import React, { useState } from 'react';
import { usePagination } from 'shared/hooks/usePagination';

import PrintAdsView from './PrintAdsView';

const PrintAdsContainer = () => {
  const { page, pageSize, handlePageChange, handlePageSizeChange } = usePagination();

  const [data] = useState([
    {
      key: '1',
      title: 'Healthy Pilipinas',
      type: 'Provincial',
      upload_date: 'Mon, Jan 10, 2022 1:20 PM',
      date_published: 'Sun, Jan 9, 2022	',
      publication: 'Sun Star Davao',
    },
    {
      key: '2',
      title: 'Maligayang Bagong Taon mula sa JRS EXPRESS',
      type: 'Provincial',
      upload_date: 'Mon, Jan 10, 2022 1:20 PM',
      date_published: 'Sun, Jan 9, 2022	',
      publication: 'Sun Star Davao',
    },
    {
      key: '3',
      title: 'Health Pilipinas Awards',
      type: 'Provincial',
      upload_date: 'Mon, Jan 10, 2022 1:20 PM',
      date_published: 'Sun, Jan 9, 2022	',
      publication: 'Sun Star Davao',
    },
    {
      key: '4',
      title: 'Power Situation Outlook',
      type: 'Provincial',
      upload_date: 'Mon, Jan 10, 2022 1:20 PM',
      date_published: 'Sun, Jan 9, 2022	',
      publication: 'Batemansbaypost Com',
    },
    {
      key: '5',
      title: 'MEDICAL ASSISTANCE PAGE',
      type: 'Provincial',
      upload_date: 'Mon, Jan 10, 2022 1:20 PM',
      date_published: 'Sun, Jan 9, 2022	',
      publication: 'Batemansbaypost Com',
    },
  ]);
  return (
    <div>
      <PrintAdsView
        data={data}
        page={page}
        handlePageChange={handlePageChange}
        pageSize={pageSize}
        handlePageSize={handlePageSizeChange}
      />
    </div>
  );
};

export default PrintAdsContainer;
