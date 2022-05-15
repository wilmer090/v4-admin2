import React from 'react';
import Table from 'shared/theme/elements/Table/Table';

const MailerView = ({ data, col }) => {
  return (
    <div>
      <Table data={data} columns={col} />
    </div>
  );
};

export default MailerView;
