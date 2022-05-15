import React, { useState } from 'react';
import { AiFillEdit, AiOutlineInsertRowAbove, AiOutlineMail, AiOutlineUnorderedList } from 'react-icons/ai';
import { ITableColumn, ITableData } from 'shared/interfaces/utils/ITable';
import { Link } from 'shared/theme/elements';
import Table from 'shared/theme/elements/Table/Table';

interface IState {
  clients: ITableData[];
  column: ITableColumn[];
}
const ClientsView = () => {
  const [data] = useState<IState['clients']>([
    {
      key: '1',
      name: 'Bank of the Philippines Island',
      parent: 'Ayala Corporation',
    },
    { key: '2', name: 'EastWest Bank', parent: 'DDB' },
    { key: '3', name: 'Filminera Resources Corporation', parent: 'Filminera Resources Corporation' },
    { key: '4', name: 'Midea', parent: 'N/A' },
    { key: '5', name: 'Philip Morris Fortune Tobacco Corp', parent: 'LT Group Main Account' },
  ]);
  const [col] = useState<IState['column']>([
    { title: 'Client Name', key: 'name' },
    { title: 'Parent', key: 'parent' },
    {
      title: '',
      key: 'action',
      render: () => {
        return (
          <>
            <Link to={'/admin/clients/edit-client'} style={{ display: 'inline-block', marginRight: '15px' }}>
              <AiFillEdit />
            </Link>

            <Link to={'/admin/clients/mailer'} style={{ display: 'inline-block', marginRight: '15px' }}>
              <AiOutlineMail />
            </Link>
            <Link to={'/admin/clients/edit-keywords'} style={{ display: 'inline-block', marginRight: '15px' }}>
              <AiOutlineUnorderedList />
            </Link>
            <Link to={'/admin/clients/manage-plan'} style={{ display: 'inline-block' }}>
              <AiOutlineInsertRowAbove />
            </Link>
          </>
        );
      },
    },
  ]);
  return (
    <div>
      <Table data={data} columns={col} />
    </div>
  );
};

export default ClientsView;
