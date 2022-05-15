import React, { useState } from 'react';
import { usePagination } from 'shared/hooks/usePagination';

import TvAdsView from './TvAdsView';

const TvAdsContainer = () => {
  const { page, pageSize, handlePageChange, handlePageSizeChange } = usePagination();
  const [data] = useState([
    {
      key: '1',
      program: `
      NESTLE PHILIPPINES: MILO: 
      mag-Milo breakfast everyday!
      - Jan 12, 2022      
    `,
      channel: 'GMA 7',
      segment_type: 'News Release',
      segment_length: '224 sec',
      upload_date: 'Tue, Jan 11, 2022 2:33 PM',
      date_published: 'Jan 11, 2022',
    },
    {
      key: '2',
      program: `
      ABBOTT LABORATORIES INC.: 
      SIMILAC GAIN SCHOOL: 
      Fast learners level up every day
      - Jan 12, 2022
    `,
      channel: 'GMA 7',
      segment_type: 'News Release',
      segment_length: '224 sec',
      upload_date: 'Tue, Jan 11, 2022 2:33 PM',
      date_published: 'Jan 11, 2022',
    },
    {
      key: '3',
      program: `
      UNIVERSAL ROBINA CORPORATION: PAYLESS XTRA BIG PANCIT CANTON: 
      Xtra Sarap Xtra Saya!
      The Worst Witch - Jan 12, 2022
    `,
      channel: 'GMA 7',
      segment_type: 'Interview',
      segment_length: '224 sec',
      upload_date: 'Tue, Jan 11, 2022 2:33 PM',
      date_published: 'Jan 11, 2022',
    },
    {
      key: '4',
      program: `
    Technology expert; Smartmatic dapat magpalianag sa na-hack na server ng Comelec
    Headline Pilipinas - Jan 11, 2022
    `,
      channel: 'DZRH',
      segment_type: 'Interview',
      segment_length: '224 sec',
      upload_date: 'Tue, Jan 11, 2022 2:33 PM',
      date_published: 'Jan 11, 2022',
    },
  ]);
  return (
    <div>
      <TvAdsView
        data={data}
        page={page}
        handlePageChange={handlePageChange}
        pageSize={pageSize}
        handlePageSize={handlePageSizeChange}
      />
    </div>
  );
};

export default TvAdsContainer;
