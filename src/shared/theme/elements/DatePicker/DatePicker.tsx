import React from 'react';

import { InputLabel, LabelWrapper, RequiredLabel } from '../Input/Input.styled';
import { CDatePicker, DatePickerWrapper } from './DatePicker.styled';

type Props = {
  label?: string;
  isRequired?: boolean;
};
const DatePicker: React.FC<Props> = ({ label, isRequired }) => {
  return (
    <DatePickerWrapper>
      {label && (
        <LabelWrapper>
          {isRequired && <RequiredLabel>*</RequiredLabel>}
          <InputLabel>{label}</InputLabel>
        </LabelWrapper>
      )}
      <CDatePicker />
    </DatePickerWrapper>
  );
};

export default DatePicker;
