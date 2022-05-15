import React, { useState } from 'react';
import { usePagination } from 'shared/hooks/usePagination';

import TvClipsView from './TvClipsView';

const TvClipsContainer = () => {
  const { page, pageSize, handlePageChange, handlePageSizeChange } = usePagination();
  const [data] = useState([
    {
      key: '1',
      program: `
    Panayam kay MERALCO,Spokeperson Joe Zaldariaga - 
    good news mula sa MERALCO
    Walang Sinasanto - Jan 11, 2022
    `,
      channel: 'DZRH',
      segment_type: 'News Release',
      segment_length: '224 sec',
      upload_date: 'Tue, Jan 11, 2022 2:33 PM',
      date_published: 'Jan 11, 2022',
    },
    {
      key: '2',
      program: `
    Pfizer gumagawa ng vaccine kontra 
    Omicron variant
    Headline Pilipinas - Jan 11, 2022
    `,
      channel: 'CNN',
      segment_type: 'News Release',
      segment_length: '708 sec',
      upload_date: 'Tue, Jan 11, 2022 2:33 PM',
      date_published: 'Jan 11, 2022',
    },
    {
      key: '3',
      program: `
    Comelec iniimbestigahan ang ulat na hacking sa kanilang servers
    Headline Pilipinas - Jan 11, 2022
    `,
      channel: 'PTV4',
      segment_type: 'Interview',
      segment_length: '530 sec',
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
      segment_length: '300 sec',
      upload_date: 'Tue, Jan 11, 2022 2:33 PM',
      date_published: 'Jan 11, 2022',
    },
    {
      key: '5',
      program: `
      Water level sa Angat Dam bumababa 
      na naman
      Balitaan - Jan 12, 2022
    `,
      channel: 'DZRH',
      segment_type: 'Interview',
      segment_length: '250 sec',
      upload_date: 'Tue, Jan 11, 2022 2:33 PM',
      date_published: 'Jan 11, 2022',
    },
    {
      key: '6',
      program: `
      DOTr, 'no vax, no ride' policy, ipatutupad sa mga pampublikong transportasyon sa Metro Manila
      Sentro Balita - Jan 12, 2022
    `,
      channel: 'DZRH',
      segment_type: 'Interview',
      segment_length: '890 sec',
      upload_date: 'Tue, Jan 11, 2022 2:33 PM',
      date_published: 'Jan 11, 2022',
    },
    {
      key: '7',
      program: `
      Umano'y hacking sa Comelec server iimbestigahan
      Balitaan - Jan 12, 2022
    `,
      channel: 'CNN',
      segment_type: 'Interview',
      segment_length: '730 sec',
      upload_date: 'Tue, Jan 11, 2022 2:33 PM',
      date_published: 'Jan 11, 2022',
    },
    {
      key: '8',
      program: `
      Phase 2 ng limited face-to-face classes ng HEIs sa mga lugar na nasa alert level 3, simula na sa Jan. 31
      Sentro Balita - Jan 12, 2022
    `,
      channel: 'PTV 4',
      segment_type: 'Interview',
      segment_length: '500 sec',
      upload_date: 'Tue, Jan 11, 2022 2:33 PM',
      date_published: 'Jan 11, 2022',
    },
    {
      key: '9',
      program: `
      NPC, ipinatawag ang Commission on Elections, Manila Bulletin, para sa pagpupulong
      C-News - Jan 12, 2022
    `,
      channel: 'ABS CBN',
      segment_type: 'Interview',
      segment_length: '100 sec',
      upload_date: 'Tue, Jan 11, 2022 2:33 PM',
      date_published: 'Jan 11, 2022',
    },
    {
      key: '10',
      program: `
    Technology expert; Smartmatic dapat magpalianag sa na-hack na server ng Comelec
    Headline Pilipinas - Jan 11, 2022
    `,
      channel: 'DZRH',
      segment_type: 'Interview',
      segment_length: '360 sec',
      upload_date: 'Tue, Jan 11, 2022 2:33 PM',
      date_published: 'Jan 11, 2022',
    },
  ]);
  return (
    <div>
      <TvClipsView
        data={data}
        page={page}
        handlePageChange={handlePageChange}
        pageSize={pageSize}
        handlePageSize={handlePageSizeChange}
      />
    </div>
  );
};

export default TvClipsContainer;
