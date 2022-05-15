import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import CreateTvClipsView from './CreateTvClipsView';

const CreateTvClipsContainer = () => {
  const { location } = useHistory();
  const { state } = location as any;

  const [initialData] = useState([
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
      media_src: 'https://www.youtube.com/embed/zSAJ14mIzt8',
      reporter: 'Dennise Antenor Jr.',
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
      media_src: 'https://www.youtube.com/embed/vVC11LPfTJE',
      reporter: 'Pia Hontiveros',
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
      media_src: 'https://www.youtube.com/embed/t8Z-mIlde-Q',
      reporter: 'Alex Santos',
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
      media_src: 'https://www.youtube.com/embed/ue2p9hsJALY',
      reporter: 'Adi Amor',
    },
    {
      key: '6',
      program: `
      DOTr, 'no vax, no ride' policy, ipatutupad sa mga pampublikong transportasyon sa Metro Manila
      Sentro Balita - Jan 12, 2022
    `,
      channel: 'DZRH',
      segment_type: 'Interview',
      segment_length: '300 sec',
      upload_date: 'Tue, Jan 11, 2022 2:33 PM',
      date_published: 'Jan 11, 2022',
      media_src: 'https://www.youtube.com/embed/ue2p9hsJALY',
      reporter: 'Adi Amor',
    },
    {
      key: '7',
      program: `
      Umano'y hacking sa Comelec server iimbestigahan
      Balitaan - Jan 12, 2022
    `,
      channel: 'CNN',
      segment_type: 'Interview',
      segment_length: '300 sec',
      upload_date: 'Tue, Jan 11, 2022 2:33 PM',
      date_published: 'Jan 11, 2022',
      media_src: 'https://www.youtube.com/embed/t8Z-mIlde-Q',
      reporter: 'Alex Santos',
    },
    {
      key: '8',
      program: `
      Phase 2 ng limited face-to-face classes ng HEIs sa mga lugar na nasa alert level 3, simula na sa Jan. 31
      Sentro Balita - Jan 12, 2022
    `,
      channel: 'PTV 4',
      segment_type: 'Interview',
      segment_length: '300 sec',
      upload_date: 'Tue, Jan 11, 2022 2:33 PM',
      date_published: 'Jan 11, 2022',
      media_src: 'https://www.youtube.com/embed/vVC11LPfTJE',
      reporter: 'Pia Hontiveros',
    },
    {
      key: '9',
      program: `
      NPC, ipinatawag ang Commission on Elections, Manila Bulletin, para sa pagpupulong
      C-News - Jan 12, 2022
    `,
      channel: 'ABS CBN',
      segment_type: 'Interview',
      segment_length: '300 sec',
      upload_date: 'Tue, Jan 11, 2022 2:33 PM',
      date_published: 'Jan 11, 2022',
      media_src: 'https://www.youtube.com/embed/zSAJ14mIzt8',
      reporter: 'Dennise Antenor Jr.',
    },
    {
      key: '10',
      program: `
    Technology expert; Smartmatic dapat magpalianag sa na-hack na server ng Comelec
    Headline Pilipinas - Jan 11, 2022
    `,
      channel: 'DZRH',
      segment_type: 'Interview',
      segment_length: '300 sec',
      upload_date: 'Tue, Jan 11, 2022 2:33 PM',
      date_published: 'Jan 11, 2022',
      media_src: 'https://www.youtube.com/embed/zSAJ14mIzt8',
      reporter: 'Dennise Antenor Jr.',
    },
  ]);

  const options = [
    'interview',
    'Logo Exposure',
    'Product Exposure',
    'Brand Mention',
    'Event',
    'Prime Time Radio AM 6PM-9PM',
    'Prime Time Radio AM 6AM-9AM Lunch',
    'Prime Time Radio FM 6PM-9PM',
    'Prime Time Radio FM 6AM-9AMs',
  ];

  const filter = initialData.filter((item) => item.key === state?.id);
  const [data] = filter;
  return (
    <div>
      <CreateTvClipsView options={options} data={data} />
    </div>
  );
};

export default CreateTvClipsContainer;
