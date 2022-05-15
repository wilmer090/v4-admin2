import { Input } from 'antd';
import React from 'react';

import { InputLabel, LabelWrapper, RequiredLabel } from '../Input/Input.styled';
import { TextareaWrapper } from './Textarea.styled';

type Props = {
  label?: string;
  isRequired?: boolean;
  value?: any;
  $fullHeight?: boolean;
};
const TextArea: React.FC<Props> = ({ label, isRequired, value, $fullHeight }) => {
  const { TextArea } = Input;
  return (
    <TextareaWrapper>
      {label && (
        <LabelWrapper>
          {isRequired && <RequiredLabel>*</RequiredLabel>}
          <InputLabel>{label}</InputLabel>
        </LabelWrapper>
      )}
      <TextArea value={value} style={{ height: $fullHeight ? 300 : 'auto' }} />
    </TextareaWrapper>
  );
};

export default TextArea;
