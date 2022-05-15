import React from 'react';
import { Select as AntSelect, SelectProps } from 'antd';
import { ErrorText, LabelWrapper, RequiredLabel, SelectLabel, SelectWrapper } from './Select.styled';
import { SelectValue } from 'antd/lib/select';
import { IKeyValue } from 'shared/interfaces/utils/IKeyValue';

const { Option } = AntSelect;
type Props<T extends SelectValue = SelectValue> = SelectProps<T> & {
  items?: IKeyValue[];
  label?: string;
  placeHolder?: string;
  isRequired?: boolean;
  $fullWidth?: boolean;
  errorMessage?: string;
};

const Select: React.FC<Props> = ({ items, label, placeHolder, isRequired, errorMessage, $fullWidth, ...props }) => {
  return (
    <SelectWrapper $isfullwidth={$fullWidth} $haserror={!!errorMessage}>
      {label && (
        <LabelWrapper>
          {isRequired && <RequiredLabel>*</RequiredLabel>}
          <SelectLabel>{label}</SelectLabel>
        </LabelWrapper>
      )}
      <AntSelect size="large" {...props} className="__select" placeholder={placeHolder}>
        {items?.map((item, index) => (
          <Option key={index} value={item.id} disabled={item.disabled}>
            {item.value}
          </Option>
        ))}
      </AntSelect>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </SelectWrapper>
  );
};

export default Select;
