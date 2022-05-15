import { useState } from 'react';
import { usePagination } from 'shared/hooks/usePagination';

import UrlListView from './UrlListView';

const UrlListContainer = () => {
  const { page, pageSize, handlePageChange, handlePageSizeChange } = usePagination();
  // const { getAuthors } = useAuthorService();
  // const { data, isLoading } = getAuthors(page, {
  //   page_size: pageSize,
  // });

  const [data] = useState([
    {
      key: '1',
      title: 'Tigray party accuses Eritrea of attacks',
      publication: 'Batemansbaypost Com',
      upload_date: 'Mon, Jan 10, 2022 1:20 PM',
      date_published: 'Sun, Jan 9, 2022	',
      media_type: 'Online News',
      authors: 'No Author',
    },
    {
      key: '2',
      title: 'Girl still missing as Qld floodwaters drop',
      publication: 'Batemansbaypost Com',
      upload_date: 'Mon, Jan 10, 2022 1:20 PM',
      date_published: 'Sun, Jan 9, 2022	',
      media_type: 'Online News',
      authors: 'No Author',
    },
    {
      key: '3',
      title: 'Girl still missing as Qld floodwaters drop',
      publication: 'Batemansbaypost Com',
      upload_date: 'Mon, Jan 10, 2022 1:20 PM',
      date_published: 'Sun, Jan 9, 2022	',
      media_type: 'Online News',
      authors: 'No Author',
    },
    {
      key: '4',
      title: 'Comic Bob Saget found dead in hotel room',
      publication: 'Batemansbaypost Com',
      upload_date: 'Mon, Jan 10, 2022 1:20 PM',
      date_published: 'Sun, Jan 9, 2022	',
      media_type: 'Online News',
      authors: 'No Author',
    },
    {
      key: '5',
      title: 'Tigray party accuses Eritrea of attacks',
      publication: 'Batemansbaypost Com',
      upload_date: 'Mon, Jan 10, 2022 1:20 PM',
      date_published: 'Sun, Jan 9, 2022	',
      media_type: 'Online News',
      authors: 'No Author',
    },
  ]);

  return (
    <UrlListView
      // isLoading={isLoading}
      data={data}
      page={page}
      handlePageChange={handlePageChange}
      pageSize={pageSize}
      handlePageSize={handlePageSizeChange}
    />
  );
};

export default UrlListContainer;
