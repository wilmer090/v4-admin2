import { Card, Checkbox, Col, Form, Row } from 'antd';
import React from 'react';
import { Input } from 'shared/theme/elements';
import { DatePicker } from 'shared/theme/elements/DatePicker';
import InputNumber from 'shared/theme/elements/Input/InputNumber';
import { Select } from 'shared/theme/elements/Select';

const options = ['Media Watch', 'Shared View', 'AD Watch'];

const AccountAndPayment = () => {
  return (
    <Card>
      <Form>
        <Form.Item label="Account and Payment Details" style={{ marginBottom: 0, display: 'block' }}>
          <Form.Item
            name="account_name"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          >
            <Input type="text" placeholder="Account Name" />
          </Form.Item>
          <Form.Item
            name="payment_type"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
          >
            <Select
              placeHolder="Payment Type"
              items={[
                { id: '1', value: 'Type A' },
                { id: '2', value: 'Type B' },
                { id: '3', value: 'Type C' },
              ]}
            />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Billing Duration" style={{ marginBottom: 0, display: 'block' }}>
          <Form.Item
            name="start_date"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="end_date"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
          >
            <DatePicker />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Subscription Duration" style={{ marginBottom: 0, display: 'block' }}>
          <Form.Item
            name="start_date"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="end_date"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
          >
            <DatePicker />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Select Platform" style={{ marginBottom: 0, display: 'block' }}>
          <Form.Item name="selected_platform">
            <Checkbox.Group options={options} />
          </Form.Item>
        </Form.Item>
      </Form>
    </Card>
  );
};

const ReportAndAnalysis = () => {
  return (
    <Card>
      <Form>
        <Form.Item label="Report and Analysis" style={{ marginBottom: 0, display: 'block' }}>
          <Form.Item
            name="media_watch"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          >
            <Checkbox.Group options={['Media Watch']} />
          </Form.Item>
          <Form.Item
            name="media_watch_price"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
          >
            <InputNumber placeHolder="Price" />
          </Form.Item>

          <Form.Item
            name="shared_veiw"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          >
            <Checkbox.Group options={['Shared View']} />
          </Form.Item>
          <Form.Item
            name="shared_view_price"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
          >
            <InputNumber placeHolder="Price" />
          </Form.Item>
          <Form.Item
            name="ad_watch"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          >
            <Checkbox.Group options={['Ad Watch']} />
          </Form.Item>
          <Form.Item
            name="ad_watch_price"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
          >
            <InputNumber placeHolder="Price" />
          </Form.Item>
        </Form.Item>
      </Form>
    </Card>
  );
};

const Summary = () => {
  return <Card>Summary</Card>;
};

const ManagePlanView = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <AccountAndPayment />
        </Col>
        <Col span={12}>
          <Summary />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <ReportAndAnalysis />
        </Col>
      </Row>
    </div>
  );
};

export default ManagePlanView;
