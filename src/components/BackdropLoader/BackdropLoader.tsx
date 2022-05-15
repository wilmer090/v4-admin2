import { LoadingOutlined } from '@ant-design/icons';
import { Backdrop } from './BackdropLoader.styled';
import { Spin } from 'antd';
import React from 'react';

const BackdropLoader: React.FC = () => {
  return (
    <Backdrop>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 100 }} />} spinning={true} />
    </Backdrop>
  );
};

export default BackdropLoader;
