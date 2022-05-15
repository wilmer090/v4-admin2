import generatePicker from 'antd/es/date-picker/generatePicker';
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import styled from 'styled-components';

const DatePicker = generatePicker(dateFnsGenerateConfig);

export const CTimePicker = styled(DatePicker)``;

CTimePicker.defaultProps = {
  size: 'large',
  picker: 'time',
};

export const TimePickerWrapper = styled.div<{
  $isFullWidth?: boolean;
}>`
  width: 100%;
  > ${CTimePicker} {
    &.ant-picker {
      width: ${({ $isFullWidth }) => ($isFullWidth ? '100%' : 'auto')};
    }
    /* .ant-picker {
      width: '100%';
    } */
  }
`;

export const ErrorText = styled.label`
  display: block;
  margin-top: 0.25rem;
  color: ${({ theme }) => theme.errorColor};
`;
export const LabelWrapper = styled.div`
  display: flex;

  gap: 0.25rem;
`;
export const InputLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.25rem;
  color: #000;
`;
export const RequiredLabel = styled.label`
  color: ${({ theme }) => theme.errorColor};
`;
