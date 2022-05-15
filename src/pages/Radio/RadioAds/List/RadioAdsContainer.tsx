import React, { useState } from 'react';
import { usePagination } from 'shared/hooks/usePagination';

import RadioAdsView from './RadioAdsView';

const RadioAdsContainer = () => {
  const { page, pageSize, handlePageChange, handlePageSizeChange } = usePagination();
  // const { getAuthors } = useAuthorService();
  // const { data, isLoading } = getAuthors(page, {
  //   page_size: pageSize,
  // });

  const [data] = useState([]);
  return (
    <div>
      <RadioAdsView
        data={data}
        page={page}
        handlePageChange={handlePageChange}
        pageSize={pageSize}
        handlePageSize={handlePageSizeChange}
      />
    </div>
  );
};

export default RadioAdsContainer;
