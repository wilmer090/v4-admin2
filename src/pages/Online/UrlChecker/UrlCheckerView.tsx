import { Col, Row } from 'antd';
import { DetailsCard } from 'pages/Publications/Publication/Publication.styled';
import { Button, Input } from 'shared/theme/elements';

const UrlCheckerView = () => {
  return (
    <DetailsCard>
      <Row gutter={[16, 32]}>
        <Col span={24}>
          <Input label="URLs" type="text" isRequired $fullWidth />
        </Col>
        <Col>
          <Button>Submit</Button>
        </Col>
      </Row>
    </DetailsCard>
  );
};

export default UrlCheckerView;
