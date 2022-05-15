import { Checkbox, Dropdown, Menu } from 'antd';
import { FC, useState } from 'react';
import { Button } from 'shared/theme/elements';

import { DropdownCopyMenu, DropdownCopyMenuItem } from './DropdownCopy.styled';

interface Props {
  current?: string;
  items: Array<{
    id: string;
    name: string;
  }>;
  copyButtonTitle?: string;
  disabled?: boolean;
  onCopy?: (origin: string | undefined, destination: Array<string> | undefined) => void;
}

const DropdownCopy: FC<Props> = ({ current, items, copyButtonTitle, disabled, onCopy, children }) => {
  const [checkedItems, setChecked] = useState<Array<string>>([`${current}`]);

  const handleOnCheckChange = (value: any) => {
    setChecked(value);
  };

  const handleSubmit = () => {
    if (onCopy) {
      onCopy(current, checkedItems);
    }

    setChecked([`${current}`]);
  };

  const getOptions = () => {
    return items.map((item) => ({
      label: item.name,
      value: item.id,
      disabled: current === item.id ? true : false,
    }));
  };

  const DropdownCard = () => (
    <DropdownCopyMenu>
      <DropdownCopyMenuItem key="items">
        <Checkbox.Group
          options={getOptions()}
          defaultValue={[`${current}`]}
          value={checkedItems}
          onChange={handleOnCheckChange}
        ></Checkbox.Group>
      </DropdownCopyMenuItem>
      <Menu.Divider></Menu.Divider>
      <DropdownCopyMenuItem key="button">
        <Button onClick={handleSubmit} $fullwidth disabled={disabled}>
          {copyButtonTitle ? copyButtonTitle : 'Copy'}
        </Button>
      </DropdownCopyMenuItem>
    </DropdownCopyMenu>
  );

  return (
    <Dropdown overlay={<DropdownCard />} placement="bottomRight" trigger={['click']}>
      {children}
    </Dropdown>
  );
};

export default DropdownCopy;
