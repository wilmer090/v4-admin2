import { RadioChangeEvent } from 'antd';
import { useEffect, useState } from 'react';

import { ErrorText, InputLabel, InputWrapper, LabelWrapper, RequiredLabel } from '../Input/Input.styled';
import { StyledRadio, StyledRadioGroup } from './Radio.styled';

interface Props {
  items?: string[];
  type?: string | any;
  defaultValue?: string | number;
  btnStyle?: string | any;
  $fullWidth?: boolean;
  isRequired?: boolean;
  label?: string;
  errorMessage?: string;
  name?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  value?: boolean;
  id?: string;
}

const Radio: React.FC<Props> = ({
  items,
  type,
  defaultValue,
  btnStyle,
  name,
  $fullWidth,
  isRequired,
  label,
  errorMessage,
  onChange,
  disabled,
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: RadioChangeEvent) => {
    const value = e.target.value as string;
    setValue(value);

    if (onChange) {
      onChange(value);
    }
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <InputWrapper $haserror={!!errorMessage} $isFullWidth={$fullWidth}>
      {label && (
        <LabelWrapper>
          {isRequired && <RequiredLabel>*</RequiredLabel>}
          <InputLabel>{label}</InputLabel>
        </LabelWrapper>
      )}
      <StyledRadioGroup
        name={name}
        onChange={handleChange}
        optionType={type}
        value={value}
        buttonStyle={btnStyle}
        disabled={disabled}
      >
        {btnStyle
          ? items?.map((item, key) => {
              return (
                <span key={key}>
                  <StyledRadio.Button value={item}>{item}</StyledRadio.Button>
                </span>
              );
            })
          : items?.map((item, key) => {
              return (
                <span key={key}>
                  <StyledRadio value={item}>{item}</StyledRadio>
                </span>
              );
            })}
      </StyledRadioGroup>

      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </InputWrapper>
  );
};

export default Radio;
