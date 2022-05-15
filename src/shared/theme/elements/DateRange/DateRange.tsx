import React from 'react';

import { InputLabel, LabelWrapper, RequiredLabel } from '../Input/Input.styled';
import { CRangePicker, DatePickerWrapper } from './DateRange.styled';

type Props = {
  label?: string;
  isRequired?: boolean;
  $fullWidth?: boolean;
};
const DateRange: React.FC<Props> = ({ label, isRequired, $fullWidth }) => {
  return (
    <DatePickerWrapper $isFullWidth={$fullWidth}>
      {label && (
        <LabelWrapper>
          {isRequired && <RequiredLabel>*</RequiredLabel>}
          <InputLabel>{label}</InputLabel>
        </LabelWrapper>
      )}
      <CRangePicker />
    </DatePickerWrapper>
  );
};

export default DateRange;
