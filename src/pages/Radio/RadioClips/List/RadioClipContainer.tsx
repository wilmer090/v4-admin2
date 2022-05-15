import React, { useState } from 'react';
import { usePagination } from 'shared/hooks/usePagination';

import RadioClipView from './RadioClipView';

const RadioClipContainer = () => {
  const { page, pageSize, handlePageChange, handlePageSizeChange } = usePagination();
  // const { getAuthors } = useAuthorService();
  // const { data, isLoading } = getAuthors(page, {
  //   page_size: pageSize,
  // });

  const [data] = useState([
    {
      key: '1',
      program_station: `
      Panayam kay MERALCO,Spokeperson Joe Zaldariaga - 
      good news mula sa MERALCO
      Walang Sinasanto - Jan 11, 2022
      `,
      station: 'DZRH',
      segment_type: 'News Release',
      segment_length: '224 sec',
      upload_date: 'Tue, Jan 11, 2022 2:33 PM',
      date_published: 'Jan 11, 2022',
    },
    {
      key: '2',
      program_station: `
      Pfizer gumagawa ng vaccine kontra 
      Omicron variant
      Headline Pilipinas - Jan 11, 2022
      `,
      station: 'DZRH',
      segment_type: 'News Release',
      segment_length: '224 sec',
      upload_date: 'Tue, Jan 11, 2022 2:33 PM',
      date_published: 'Jan 11, 2022',
    },
    {
      key: '3',
      program_station: `
      Comelec iniimbestigahan ang ulat na hacking sa kanilang servers
      Headline Pilipinas - Jan 11, 2022
      `,
      station: 'DZRH',
      segment_type: 'Interview',
      segment_length: '224 sec',
      upload_date: 'Tue, Jan 11, 2022 2:33 PM',
      date_published: 'Jan 11, 2022',
    },
    {
      key: '4',
      program_station: `
      Technology expert; Smartmatic dapat magpalianag sa na-hack na server ng Comelec
      Headline Pilipinas - Jan 11, 2022
      `,
      station: 'DZRH',
      segment_type: 'Interview',
      segment_length: '224 sec',
      upload_date: 'Tue, Jan 11, 2022 2:33 PM',
      date_published: 'Jan 11, 2022',
    },
  ]);

  return (
    <div>
      <RadioClipView
        data={data}
        page={page}
        handlePageChange={handlePageChange}
        pageSize={pageSize}
        handlePageSize={handlePageSizeChange}
      />
    </div>
  );
};

export default RadioClipContainer;
