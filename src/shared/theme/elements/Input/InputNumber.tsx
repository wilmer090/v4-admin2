import { InputNumberProps } from 'antd';
import React from 'react';

import { CInputNumber, ErrorText, InputLabel, InputWrapper, LabelWrapper, RequiredLabel } from './Input.styled';

type Props = InputNumberProps & {
  errorMessage?: string;
  label?: string;
  placeHolder?: string;
  isRequired?: boolean;
  $fullWidth?: boolean;
};
const InputNumber: React.FC<Props> = ({ errorMessage, placeHolder, label, isRequired, $fullWidth, ...inputProps }) => {
  return (
    <InputWrapper $haserror={!!errorMessage} $isFullWidth={$fullWidth}>
      {label && (
        <LabelWrapper>
          {isRequired && <RequiredLabel>*</RequiredLabel>}
          <InputLabel>{label}</InputLabel>
        </LabelWrapper>
      )}
      <CInputNumber size="large" {...inputProps} placeholder={placeHolder} />
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </InputWrapper>
  );
};

export default InputNumber;
