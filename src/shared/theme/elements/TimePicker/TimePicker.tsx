import { InputLabel, LabelWrapper, RequiredLabel } from '../Input/Input.styled';
import { CTimePicker, TimePickerWrapper } from './TimePicker.styled';

type Props = {
  label?: string;
  isRequired?: boolean;
  $fullWidth?: boolean;
  [key: string]: any;
};

const TimePicker = ({ label, isRequired, $fullWidth, ...timePickerProps }: Props) => {
  return (
    <TimePickerWrapper $isFullWidth={$fullWidth}>
      {label && (
        <LabelWrapper>
          {isRequired && <RequiredLabel>*</RequiredLabel>}
          <InputLabel>{label}</InputLabel>
        </LabelWrapper>
      )}
      <CTimePicker {...timePickerProps} />
    </TimePickerWrapper>
  );
};

export default TimePicker;
