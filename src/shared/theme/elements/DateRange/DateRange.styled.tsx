import { DatePicker } from 'antd';
import styled from 'styled-components';

const { RangePicker } = DatePicker;
export const CRangePicker = styled(RangePicker)``;

CRangePicker.defaultProps = {
  size: 'large',
};

export const DatePickerWrapper = styled.div<{
  $haserror?: boolean;
  $isFullWidth?: boolean;
}>`
  width: 100%;
  > ${CRangePicker} {
    &.ant-picker-large {
      width: ${({ $isFullWidth }) => ($isFullWidth ? '100%' : 'auto')};
    }
    /* .ant-picker {
      width: '100%';
    } */
  }
`;
