import { Table as AntTable, TablePaginationConfig } from 'antd';
import React, { useMemo } from 'react';
import { ITableColumn, ITableData } from 'shared/interfaces/utils/ITable';

import { TableWrapper } from './Table.styled';

type Props = {
  columns: ITableColumn[];
  data: ITableData[];
  pagination?: TablePaginationConfig;
  customSize?: string;
  className?: string;
  loading?: boolean;
  rowSelection?: any;
};
const Table: React.FC<Props> = ({ columns, data, pagination, className, ...props }: Props) => {
  const tableColumns = useMemo(() => {
    return columns.map((item: ITableColumn) => {
      return {
        title: item.title,
        dataIndex: item.key,
        key: item.key,
        align: item.align,
        fixed: item.fixed || false,
        ellipsis: item.ellipsis ? item.ellipsis : undefined,
        width: item.width ? item.width : undefined,
        onFilter: item.onFilter ? item.onFilter : undefined,
        sorter: item.sorter ? item.sorter : undefined,
        render: item.render ? item.render : undefined,
        filters: item.filters ? item.filters : undefined,
        filterDropdown: item.filterDropdown ? item.filterDropdown : undefined,
        filterIcon: item.filterIcon ? item.filterIcon : undefined,
      };
    });
  }, [columns]);
  return (
    <TableWrapper>
      <AntTable
        {...props}
        columns={tableColumns}
        className={className}
        dataSource={data}
        pagination={pagination ?? false}
        scroll={{ x: 'max-content' }}
      />
    </TableWrapper>
  );
};

export default Table;
