import React, { useState } from 'react';
import { AiFillDelete, AiFillEdit, AiFillFile } from 'react-icons/ai';
import { Link } from 'shared/theme/elements';

import EditKeywordsView from './EditKeywordsView';

const EditKeywords = () => {
  const [mediaWatch] = useState([
    {
      key: 1,
      bucket: 'My Articles',
      category: 'Uncategorized',
      action: '',
    },
    {
      key: 2,
      bucket: 'My Industry',
      category: 'UNICEF News',
      action: '',
    },
    {
      key: 3,
      bucket: 'My Competitors',
      category: 'Uncategorized',
      action: '',
    },
    {
      key: 4,
      bucket: 'Others',
      category: 'Uncategorized',
      action: '',
    },
  ]);

  const [mediaTableCol] = useState([
    {
      key: 'bucket',
      title: 'Bucket',
    },
    {
      key: 'category',
      title: 'Category',
    },
    {
      title: '',
      key: 'action',
      render: () => {
        return (
          <>
            <Link to={''} style={{ display: 'inline-block', marginRight: '15px' }}>
              <AiFillEdit />
            </Link>

            <Link to={''} style={{ display: 'inline-block', marginRight: '15px' }}>
              <AiFillFile />
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
      <EditKeywordsView mediaData={mediaWatch} mediaCols={mediaTableCol} />
    </div>
  );
};

export default EditKeywords;
