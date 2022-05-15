import React, { useState } from 'react';
import { Link } from 'shared/theme/elements';

import EditClientView from './EditClientView';

const EditClientContainer = () => {
  const plainOptions1 = ['Dashboard', 'Media Watch', 'Shared View', 'Ad Watch', 'Disable_sp_control', 'Sentiment'];
  const plainOptions2 = ['V3 Media Watch Email Sendout', 'V3 Shared View Email Sendout'];
  // USER ACCOUNTS DATA
  const [data] = useState([
    {
      key: 1,
      username: 'santiago.sofiaanne@gmail.com',
      name: 'Sofia Anne Santiago',
      level: 'Super Admin',
    },
    {
      key: 2,
      username: 'cherry.basbano@gmail.com',
      name: 'Cherry Basbano',
      level: 'Analyst',
    },
    {
      key: 3,
      username: 'judith.stodomingo@gmail.com',
      name: 'Judith Sto Domingo	',
      level: 'Finance Admin',
    },
  ]);
  //USER ACCOUNT TABLE COLUMNS
  const [userTableCol] = useState([
    { title: 'Username/Email', key: 'username' },
    { title: 'Name', key: 'name' },
    { title: 'User Level', key: 'level' },
    {
      title: '',
      key: 'action',
      render: () => {
        return (
          <>
            <Link to={'/admin/clients/edit-client'} style={{ display: 'inline-block', marginRight: '15px' }}>
              Edit Details
            </Link>

            <Link to={'/admin/clients/mailer'} style={{ display: 'inline-block', marginRight: '15px' }}>
              Generate Hash
            </Link>
            <Link to={'/admin/clients/edit-keywords'} style={{ display: 'inline-block', marginRight: '15px' }}>
              Remove User
            </Link>
          </>
        );
      },
    },
  ]);

  const [rssFeedData] = useState([
    {
      key: 1,
      media: 'All',
      link: 'https://media-meter.net/mm-admin/rss/YnJvYWRjYXN0/6887/Mzc1OQ==?category=true',
    },
    {
      key: 2,
      media: 'Print',
      link: 'https://media-meter.net/mm-admin/rss/YnJvYWRjYXN0/6887/Mzc1OQ==?category=true',
    },
    {
      key: 3,
      media: 'Online',
      link: 'https://media-meter.net/mm-admin/rss/YnJvYWRjYXN0/6887/Mzc1OQ==?category=true',
    },
    {
      key: 4,
      media: 'Broadcast',
      link: 'https://media-meter.net/mm-admin/rss/YnJvYWRjYXN0/6887/Mzc1OQ==?category=true',
    },
  ]);

  const [rssFeedCol] = useState([
    { key: 'media', title: 'Media' },
    { key: 'link', title: 'Link' },
  ]);

  // PUBLICATIONS DATA

  const [publications] = useState([
    {
      key: '1',
      title: 'ABS CBN News',
      description: '',
      chosen: false,
    },
    {
      key: '2',
      title: 'Inquirer.net',
      description: '',
      chosen: false,
    },
    {
      key: '3',
      title: 'Rappler',
      description: '',
      chosen: false,
    },
    {
      key: '4',
      title: 'The Manila Times',
      description: '',
      chosen: false,
    },
    {
      key: '5',
      title: 'Manila Bulletin',
      description: '',
      chosen: false,
    },
  ]);
  const [countries] = useState([
    {
      key: '1',
      title: 'Philippines',
      description: '',
      chosen: false,
    },
    {
      key: '2',
      title: 'South Korea',
      description: '',
      chosen: false,
    },
    {
      key: '3',
      title: 'Brazil',
      description: '',
      chosen: false,
    },
    {
      key: '4',
      title: 'Japan',
      description: '',
      chosen: false,
    },
    {
      key: '5',
      title: 'Singapore',
      description: '',
      chosen: false,
    },
  ]);
  return (
    <div>
      <EditClientView
        checkbox1={plainOptions1}
        checkbox2={plainOptions2}
        userAccounts={data}
        col={userTableCol}
        publications={publications}
        countries={countries}
        rssBucket={rssFeedData}
        rssCol={rssFeedCol}
      />
    </div>
  );
};

export default EditClientContainer;
