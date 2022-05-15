import React, { useState } from 'react';
import { usePagination } from 'shared/hooks/usePagination';

import PrintMediaView from './PrintMediaView';

const PrintMediaContainer = () => {
  const { page, pageSize, handlePageChange, handlePageSizeChange } = usePagination();

  const [data] = useState([
    {
      key: '1',
      title: 'WARRIORS BEAT CAVS, 96-82',
      type: 'Provincial',
      authors: 'No Author',
      upload_date: 'Mon, Jan 10, 2022 1:20 PM',
      date_published: 'Sun, Jan 9, 2022	',
      publication: 'Sun Star Davao',
    },
    {
      key: '2',
      title: 'Covid-19 threatens 2023 Fiba qualifiers PH hosting',
      type: 'Provincial',
      authors: 'Nick Gibbs',
      upload_date: 'Mon, Jan 10, 2022 1:20 PM',
      date_published: 'Sun, Jan 9, 2022	',
      publication: 'Sun Star Davao',
    },
    {
      key: '3',
      title: 'Judge asks what more Djokovic could have done for a visa',
      type: 'Provincial',
      authors: 'Nick Gibbs',
      upload_date: 'Mon, Jan 10, 2022 1:20 PM',
      date_published: 'Sun, Jan 9, 2022	',
      publication: 'Sun Star Davao',
    },
    {
      key: '4',
      title: 'SSS to offer calamity assistance to members affected by Typhoon Odette',
      type: 'Provincial',
      authors: 'Nick Gibbs',
      upload_date: 'Mon, Jan 10, 2022 1:20 PM',
      date_published: 'Sun, Jan 9, 2022	',
      publication: 'Batemansbaypost Com',
    },
    {
      key: '5',
      title: 'th Normin labor-employment summit highlights academe’s prio courses',
      type: 'Provincial',
      authors: 'Nick Gibbs',
      upload_date: 'Mon, Jan 10, 2022 1:20 PM',
      date_published: 'Sun, Jan 9, 2022	',
      publication: 'Batemansbaypost Com',
    },
  ]);
  return (
    <div>
      <PrintMediaView
        data={data}
        page={page}
        handlePageChange={handlePageChange}
        pageSize={pageSize}
        handlePageSize={handlePageSizeChange}
      />
    </div>
  );
};

export default PrintMediaContainer;
