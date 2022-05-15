import { Button as AntButton } from 'antd';
import CSS from 'csstype';
import { cloneElement, FC, useEffect, useRef, useState } from 'react';
import ReactRegionSelect from 'react-region-select';

export interface RectPixelPoints {
  topLeft: [number, number];
  topRight: [number, number];
  bottomLeft: [number, number];
  bottomRight: [number, number];
}

interface Props {
  regionStyle?: CSS.Properties;
  onChange?: (regions: Array<any>, rect: RectPixelPoints | undefined) => void;
  onSave?: (regions: Array<any>, rect: RectPixelPoints | undefined) => void;
  defaultValue?: RectPixelPoints;
  disabled?: boolean;
  children: any;
}

const RegionSelect: FC<Props> = ({ onChange, onSave, regionStyle, disabled, defaultValue, children }) => {
  const [regions, setRegions] = useState<Array<any>>([]);
  const childRef = useRef<any>();

  const getRectPixelPoints = (region: any): RectPixelPoints | undefined => {
    if (childRef.current) {
      const xPx = parseInt((childRef.current.clientWidth * region.x * 0.01).toFixed(2));
      const yPx = parseInt((childRef.current.clientHeight * region.y * 0.01).toFixed(2));
      const widthPx = parseInt((childRef.current.clientWidth * region.width * 0.01).toFixed(2));
      const heightPx = parseInt((childRef.current.clientHeight * region.height * 0.01).toFixed(2));

      const topLeft = [xPx, yPx];
      const topRight = [xPx + widthPx, yPx];
      const bottomLeft = [xPx, yPx + heightPx];
      const bottomRight = [xPx + widthPx, yPx + heightPx];

      return { topLeft, topRight, bottomLeft, bottomRight } as RectPixelPoints;
    }

    return undefined;
  };

  const onRegionDelete = (regionIndex: number) => {
    const filteredRegion = regions?.filter((reg) => reg.data.index !== regionIndex);
    setRegions(filteredRegion);
  };

  const onRegionChange = (regions: Array<any>) => {
    if (disabled) return;

    setRegions(regions);

    if (onChange) {
      onChange(regions, getRectPixelPoints(regions));
    }
  };

  const onRegionSave = (regionIndex) => {
    const region = regions.find(({ data }) => data.index === regionIndex);

    if (onSave) {
      onSave(region, getRectPixelPoints(region));
    }
  };

  const regionRenderer = (regionProps) => {
    if (!regionProps.isChanging && !disabled) {
      return (
        <div style={{ position: 'absolute', bottom: '25%' }}>
          <AntButton
            danger
            onClick={() => onRegionDelete(regionProps.data.index)}
            size="small"
            style={{ marginRight: '1rem' }}
          >
            Remove
          </AntButton>
          <AntButton
            value={regionProps.data.dataType}
            onClick={() => onRegionSave(regionProps.data.index)}
            size="small"
          >
            Select
          </AntButton>
        </div>
      );
    }
  };

  const reactRegionStyle = {
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    outline: '80rem solid rgba(0,0,0, 0.7)',
    zIndex: 1,
  };

  const setDefaultValue = () => {
    if (defaultValue) {
      const imageWidth = childRef.current.clientWidth;
      const imageHeight = childRef.current.clientHeight;

      const { topLeft, topRight, bottomLeft } = defaultValue;
      const region = {
        data: { index: 0 },
        new: false,
        isChanging: false,
        x: (topLeft[0] / imageWidth) * 100,
        y: (topLeft[1] / imageHeight) * 100,
        width: ((topRight[0] - topLeft[0]) / imageWidth) * 100,
        height: ((bottomLeft[1] - topLeft[1]) / imageHeight) * 100,
      };

      setRegions([region]);
    }
  };

  useEffect(() => {
    setDefaultValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  return (
    <ReactRegionSelect
      maxRegions={1}
      regions={regions}
      onChange={onRegionChange}
      regionStyle={regionStyle || reactRegionStyle}
      regionRenderer={regionRenderer}
      constraint
      style={{ overflow: 'hidden' }}
    >
      {cloneElement(children, { ref: childRef })}
    </ReactRegionSelect>
  );
};

export default RegionSelect;
