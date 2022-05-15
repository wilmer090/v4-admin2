import React, { useState } from 'react';
import { usePagination } from 'shared/hooks/usePagination';

import PrintDownloadView from './PrintDownloadView';

const PrintDownloadContainer = () => {
  const { page, pageSize, handlePageChange, handlePageSizeChange } = usePagination();

  const [data] = useState([
    {
      key: '1',
      client: 'Prime Metro Infra Holdings',
    },
    {
      key: '2',
      client: 'FT - Marshall',
    },
    {
      key: '3',
      client: 'The Company',
    },
    {
      key: '4',
      client: 'LBA Company',
    },
    {
      key: '5',
      client: 'Solenergy Systems Inc',
    },
    {
      key: '6',
      client: 'Prime Metro Infra Holdings',
    },
    {
      key: '7',
      client: 'FT - Marshall',
    },
    {
      key: '8',
      client: 'The Company',
    },
    {
      key: '9',
      client: 'LBA Company',
    },
    {
      key: '10',
      client: 'Solenergy Systems Inc',
    },
  ]);
  return (
    <div>
      <PrintDownloadView
        data={data}
        page={page}
        handlePageChange={handlePageChange}
        pageSize={pageSize}
        handlePageSize={handlePageSizeChange}
      />
    </div>
  );
};

export default PrintDownloadContainer;
