import { ITableColumn } from 'shared/interfaces/utils/ITable';

export const METRIC_STATUS_COLUMN = (): ITableColumn[] => [
  {
    key: 'done',
    title: 'Done',
  },
  {
    key: 'error',
    title: 'Error',
  },
];
