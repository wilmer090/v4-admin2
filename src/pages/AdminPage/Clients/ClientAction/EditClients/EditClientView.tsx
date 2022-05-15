import { Checkbox, Col, Collapse, DatePicker, Row, Space, Tabs } from 'antd';
import Typography from 'antd/lib/typography/Typography';
// import { ITableColumn, ITableData } from 'shared/interfaces/utils/ITable';
import { Button, Input } from 'shared/theme/elements';
import Table from 'shared/theme/elements/Table/Table';
import TransferComponent from 'shared/theme/elements/Transfer/Transfer';
import styled from 'styled-components';

const { Panel } = Collapse;
const { TabPane } = Tabs;

const TabStyled = styled(Tabs)`
  & .ant-tabs-tab {
    width: 500px;
  }
`;

const { RangePicker } = DatePicker;

// function onChange(value, dateString) {
//   console.log('Selected Time: ', value);
//   console.log('Formatted Selected Time: ', dateString);
// }

// function onOk(value) {
//   console.log('onOk: ', value);
// }

const EditClientView = ({ checkbox1, checkbox2, col, userAccounts, publications, countries, rssBucket, rssCol }) => {
  return (
    <Collapse expandIconPosition={'right'}>
      <Panel header="Client Details" key="1">
        <Space direction="vertical" style={{ width: '100%' }} size="middle">
          <Row align="middle">
            <Col span={5}>
              <Typography>Client Name</Typography>
            </Col>
            <Col span={14}>
              <Input type="text" $fullWidth={true} />
            </Col>
          </Row>
          <Row align="middle">
            <Col span={5}>
              <Typography>Country</Typography>
            </Col>
            <Col span={14}>
              <Input type="text" $fullWidth={true} />
            </Col>
          </Row>
          <Row align="middle">
            <Col span={5}>
              <Typography>Subscription Start</Typography>
            </Col>
            <Col span={14}>
              <Input type="text" $fullWidth={true} />
            </Col>
          </Row>
          <Row align="middle">
            <Col span={5}>
              <Typography>Subscription End</Typography>
            </Col>
            <Col span={14}>
              <Input type="text" $fullWidth={true} />
            </Col>
          </Row>
          <Row align="middle">
            <Col span={5}>
              <Typography>PR Value Multiplier</Typography>
            </Col>
            <Col span={14}>
              <Input type="text" $fullWidth={true} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Typography>Access</Typography>

              <Checkbox.Group options={checkbox1} defaultValue={['Dashboard']} style={{ marginLeft: '15px' }} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Typography>Options</Typography>

              <Checkbox.Group options={checkbox2} style={{ marginLeft: '15px' }} />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col>
              <Button variant="outlined">Cancel</Button>
            </Col>
            <Col>
              <Button>Save Changes</Button>
            </Col>
          </Row>
        </Space>
      </Panel>
      <Panel header="User Accounts" key="2">
        <Space direction="vertical" size="middle">
          <Table data={userAccounts} columns={col} />
          <Button>Add User</Button>
        </Space>
      </Panel>
      <Panel header="Client Subscription" key="3">
        <TabStyled defaultActiveKey="1" size="large">
          <TabPane tab="Publications" key="1">
            <TransferComponent
              data={publications}
              labelLeft={'Available Publications'}
              labelRight={'Blacklisted Publications'}
            />
          </TabPane>

          <TabPane tab="Clients" key="2">
            <TransferComponent data={countries} labelLeft={'Available Countries'} labelRight={'Selected Countries'} />
          </TabPane>
        </TabStyled>
      </Panel>
      <Panel header="RSS Feed" key="4">
        <Row align="middle">
          <Col span={2}>
            <Typography>Date Range</Typography>
          </Col>
          <Col span={8}>
            <RangePicker showTime={{ format: 'HH:mm' }} format="YYYY-MM-DD HH:mm" />
          </Col>
        </Row>

        <TabStyled defaultActiveKey="1" size="large">
          <TabPane tab="Categories" key="1">
            <Table data={rssBucket} columns={rssCol} />
          </TabPane>

          <TabPane tab="Buckets" key="2">
            <Table data={rssBucket} columns={rssCol} />
          </TabPane>
        </TabStyled>
      </Panel>
    </Collapse>
  );
};

export default EditClientView;
