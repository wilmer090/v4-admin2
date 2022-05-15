import { TextAreaProps } from 'antd/lib/input';
import React from 'react';

import { CInputTextArea, ErrorText, InputLabel, InputWrapper, LabelWrapper, RequiredLabel } from './Input.styled';

type Props = TextAreaProps & {
  errorMessage?: string;
  label?: string;
  placeHolder?: string;
  isRequired?: boolean;
  $fullWidth?: boolean;
};
const InputTextArea: React.FC<Props> = ({
  errorMessage,
  placeHolder,
  label,
  isRequired,
  $fullWidth,
  ...inputProps
}) => {
  return (
    <InputWrapper $haserror={!!errorMessage} $isFullWidth={$fullWidth}>
      {label && (
        <LabelWrapper>
          {isRequired && <RequiredLabel>*</RequiredLabel>}
          <InputLabel>{label}</InputLabel>
        </LabelWrapper>
      )}
      <CInputTextArea size="large" {...inputProps} placeholder={placeHolder} />
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </InputWrapper>
  );
};

export default InputTextArea;
