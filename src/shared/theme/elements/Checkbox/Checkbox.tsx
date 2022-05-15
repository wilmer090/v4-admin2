import { Checkbox as AntCheckbox, Col, Row } from 'antd';
import React from 'react';
import { IKeyValue } from 'shared/interfaces/utils/IKeyValue';

import { InputLabel, LabelWrapper, RequiredLabel } from '../Input/Input.styled';
import { CheckboxWrapper } from './Checkbox.styled';

type Props = {
  items?: IKeyValue[];
  label?: string;
  isRequired?: boolean;
  $fullWidth?: boolean;
};

const Checkbox: React.FC<Props> = ({ items, label, isRequired, $fullWidth }) => {
  return (
    <CheckboxWrapper $isFullWidth={$fullWidth}>
      {label && (
        <LabelWrapper>
          {isRequired && <RequiredLabel>*</RequiredLabel>}
          <InputLabel>{label}</InputLabel>
        </LabelWrapper>
      )}
      <AntCheckbox.Group>
        <Row>
          {items?.map((item, index) => {
            return (
              <Col span={24} key={index}>
                <AntCheckbox value={item}>{item}</AntCheckbox>
              </Col>
            );
          })}
        </Row>
      </AntCheckbox.Group>
    </CheckboxWrapper>
  );
};

export default Checkbox;
