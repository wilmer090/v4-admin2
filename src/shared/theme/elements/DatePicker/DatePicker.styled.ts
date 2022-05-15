import { DatePicker } from 'antd';
import styled from 'styled-components';

export const CDatePicker = styled(DatePicker)``;

CDatePicker.defaultProps = {
  size: 'large',
};

export const DatePickerWrapper = styled.div`
  width: 100%;
  > ${CDatePicker} {
    &.ant-picker-large {
      width: 100%;
    }
    /* .ant-picker {
      width: '100%';
    } */
  }
`;
