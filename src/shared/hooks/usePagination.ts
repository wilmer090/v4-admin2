import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export const usePagination = (startPage = 1, startPageSize = 10) => {
  const history = useHistory();
  const location = useLocation();
  const getPage = Number(location.search?.split('=')[1]) || startPage;
  const [page, setPage] = useState<number>(getPage);
  const [pageSize, setPageSize] = useState<number>(startPageSize);

  const handlePageChange = (page: number) => {
    setPage(page);
    history.push({
      search: `?page=${page}`,
    });
  };

  const handlePageSizeChange = (num: number) => {
    setPageSize(num);
  };

  return {
    page,
    pageSize,
    handlePageChange,
    handlePageSizeChange,
  };
};
