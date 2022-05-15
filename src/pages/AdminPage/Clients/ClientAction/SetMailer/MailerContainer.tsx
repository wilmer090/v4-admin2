import React, { useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { Link } from 'shared/theme/elements';

import MailerView from './MailerView';

const MailerContainer = () => {
  const [data] = useState([
    {
      key: '1',
      mailer: 'Mailer 1',
      schedule: '8:00 am - 10:00 am',
      status: 'Active',
    },
    {
      key: '2',
      mailer: 'Mailer 2',
      schedule: '',
      status: 'Active',
    },
    {
      key: '3',
      mailer: 'Mailer 3',
      schedule: '',
      status: 'Active',
    },
    {
      key: '4',
      mailer: 'Mailer 4',
      schedule: '1:00 pm - 30:00 pm',
      status: 'Active',
    },
  ]);
  const [col] = useState([
    { title: 'Mailer Name', key: 'mailer' },
    { title: 'Schedule', key: 'schedule' },
    { title: 'Status', key: 'status' },
    {
      title: '',
      key: 'action',
      render: () => {
        return (
          <>
            <Link to={''} style={{ display: 'inline-block', marginRight: '15px' }}>
              <AiFillEdit />
            </Link>

            <Link to={''} style={{ display: 'inline-block' }}>
              <AiFillDelete />
            </Link>
          </>
        );
      },
    },
  ]);
  return (
    <div>
      <MailerView data={data} col={col} />
    </div>
  );
};

export default MailerContainer;
