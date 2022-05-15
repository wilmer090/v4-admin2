import { ReactNode } from 'react';

export interface ITableColumn {
  title: string | ReactNode;
  key: string;
  align?: 'left' | 'center' | 'right';
  fixed?: 'left' | 'right' | boolean;
  width?: string | number;
  ellipsis?: boolean;
  sorter?: (a: any, b: any) => number;
  onFilter?: (value: any, record: any) => any;
  filters?: any;
  render?: (key: string, record: any) => ReactNode;
  filterDropdown?: (params: any) => ReactNode;
  filterIcon?: (filtered: boolean) => ReactNode;
}

export interface ITableData {
  key: string | number;
  [key: string]: unknown;
}
