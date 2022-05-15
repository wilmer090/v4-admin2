import { Transfer } from 'antd';
import React, { useState } from 'react';

const TransferComponent: React.FC<any> = ({ data, labelLeft, labelRight }) => {
  const [targetKeys, setTargetKeys] = useState(['1']);

  const handleChange = (targetKeys) => {
    setTargetKeys(targetKeys);
  };

  return (
    <>
      <Transfer
        dataSource={data}
        showSearch
        listStyle={{
          width: '100%',
          height: 300,
        }}
        operations={['to right', 'to left']}
        locale={{
          itemUnit: labelRight,
          itemsUnit: labelLeft,
        }}
        targetKeys={targetKeys}
        onChange={handleChange}
        render={(item) => `${item.title} ${item.description}`}
        // footer={renderFooter}
      />
    </>
  );
};

export default TransferComponent;
