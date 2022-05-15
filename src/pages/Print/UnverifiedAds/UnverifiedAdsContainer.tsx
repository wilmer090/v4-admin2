import React, { useState } from 'react';
import { usePagination } from 'shared/hooks/usePagination';

import UnverifiedAdsView from './UnverifiedAdsView';

const UnverifiedAdsContainer = () => {
  const { page, pageSize, handlePageChange, handlePageSizeChange } = usePagination();

  const [data] = useState([
    {
      key: '1',
      title: 'On readiness for F2F classes',
      type: 'Provincial',
      authors: 'No Author',
      upload_date: 'Mon, Jan 10, 2022 1:20 PM',
      date_published: 'Sun, Jan 9, 2022	',
      publication: 'Sun Star Davao',
    },
    {
      key: '2',
      title: 'Warriorscelebrate Thompsons long-awaited return with win',
      type: 'Provincial',
      authors: 'Nick Gibbs',
      upload_date: 'Mon, Jan 10, 2022 1:20 PM',
      date_published: 'Sun, Jan 9, 2022	',
      publication: 'Sun Star Davao',
    },
    {
      key: '3',
      title: 'On Distance Learning Delivery Modalities',
      type: 'Provincial',
      authors: 'Nick Gibbs',
      upload_date: 'Mon, Jan 10, 2022 1:20 PM',
      date_published: 'Sun, Jan 9, 2022	',
      publication: 'Sun Star Davao',
    },
    {
      key: '4',
      title: 'Filipino learners deserve the best',
      type: 'Provincial',
      authors: 'Nick Gibbs',
      upload_date: 'Mon, Jan 10, 2022 1:20 PM',
      date_published: 'Sun, Jan 9, 2022	',
      publication: 'Batemansbaypost Com',
    },
    {
      key: '5',
      title: 'Vengeance, action and bromancein K-series ‘Bad & Crazy’',
      type: 'Provincial',
      authors: 'Nick Gibbs',
      upload_date: 'Mon, Jan 10, 2022 1:20 PM',
      date_published: 'Sun, Jan 9, 2022	',
      publication: 'Batemansbaypost Com',
    },
  ]);
  return (
    <div>
      <UnverifiedAdsView
        data={data}
        page={page}
        handlePageChange={handlePageChange}
        pageSize={pageSize}
        handlePageSize={handlePageSizeChange}
      />
    </div>
  );
};

export default UnverifiedAdsContainer;
