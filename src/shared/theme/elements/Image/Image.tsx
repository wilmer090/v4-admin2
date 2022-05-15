import { Image } from 'antd';
import Typography from 'antd/lib/typography/Typography';
import React from 'react';

import { ErrorText, InputLabel, InputWrapper, LabelWrapper, RequiredLabel } from '../Input/Input.styled';

type Props = {
  label?: string;
  $fullWidth?: boolean;
  errorMessage?: string;
  isRequired?: boolean;
  width?: number;
  height?: number;
};
function ImageDemo(width, height) {
  return (
    <Image
      width={width}
      height={height}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
  );
}

const Images: React.FC<Props> = ({ label, $fullWidth, isRequired, errorMessage, width, height }) => {
  return (
    <InputWrapper $haserror={!!errorMessage} $isFullWidth={$fullWidth}>
      {label && (
        <LabelWrapper>
          {isRequired && <RequiredLabel>*</RequiredLabel>}
          <InputLabel>{label}</InputLabel>
        </LabelWrapper>
      )}
      <Typography>Use mouse to control preview the panel</Typography>
      {ImageDemo(width, height)}
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </InputWrapper>
  );
};

export default Images;
