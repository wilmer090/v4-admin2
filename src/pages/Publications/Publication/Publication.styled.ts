import { TimePicker, Typography } from 'antd';
import { Card, Text } from 'shared/theme/elements';
import styled from 'styled-components';

export const PublicationWrapper = styled.div`
  height: 100%;
`;
export const DetailsCard = styled(Card)``;
export const ButtonContainer = styled.div`
  margin-top: 1.5rem;
`;

export const CostCard = styled(Card)`
  margin-top: 1.5rem;
`;
export const PagesCard = styled(Card)`
  margin-top: 1.5rem;
  .pages_container {
    width: 100%;
    .ant-space-item {
      width: calc(100% / 7);
    }
  }
`;
export const ButtonSetContainer = styled.div``;
export const SetText = styled(Typography.Paragraph)``;

export const MultiplierCard = styled(Card)`
  margin-top: 1.5rem;
`;

export const TimeslotCard = styled(Card)`
  margin-top: 1.5rem;
`;

export const FormControl = styled.div``;
export const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  color: #000;
`;
export const DurationRangePicker = styled(TimePicker.RangePicker)`
  width: 100%;
`;

export const PageModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
  .__input {
    flex: 1;
    width: 100%;
  }
  .__button {
    width: 20%;
    margin-top: 1.5rem;
  }
`;

export const HistoryCard = styled(Card)`
  margin-top: 1.5rem;
  .__icon {
    width: 1rem;
    height: 1rem;
  }
`;

export const HistoryTextTop = styled(Text)``;

export const HistoryBottomContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
export const HistoryTextBottom = styled(Text)`
  margin-bottom: 0 !important;
`;
export const MetricsCard = styled(Card)`
  margin-top: 1.5rem;
`;

export const FilterFormControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const HorizontalLabel = styled.label``;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const TableContainer = styled.div`
  margin-top: 1rem;
`;

export const MetricsStatusContainer = styled.div`
  margin-top: 1rem;
`;

export const ModalFooter = styled.div`
  width: 100%;
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 24px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -24px;
    width: calc(100% + 48px);
    height: 1px;
    background-color: #eee;
  }
  .__button {
    margin-left: 12px;
    min-height: 38px;
  }
`;
