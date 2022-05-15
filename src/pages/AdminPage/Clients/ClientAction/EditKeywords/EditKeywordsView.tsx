import { Space, Tabs } from 'antd';
import React from 'react';
import { Button } from 'shared/theme/elements';
import Table from 'shared/theme/elements/Table/Table';
import styled from 'styled-components';

const { TabPane } = Tabs;

const TabStyled = styled(Tabs)`
  width: 1100px;
  & .ant-tabs-tab {
    width: 300px;
    justify-content: center;
  }
`;

const EditKeywordsView = ({ mediaData, mediaCols }) => {
  return (
    <div>
      <Space direction="vertical" size={15}>
        <TabStyled defaultActiveKey="1" size="large">
          <TabPane tab="Media Watch" key="1">
            <Table data={mediaData} columns={mediaCols} />
          </TabPane>
          <TabPane tab="Shared View" key="2">
            <Table data={mediaData} columns={mediaCols} />
          </TabPane>
          <TabPane tab="Ad Watch" key="3">
            <Table data={mediaData} columns={mediaCols} />
          </TabPane>
        </TabStyled>
        <Button>Add Bucket</Button>
      </Space>
    </div>
  );
};

export default EditKeywordsView;
