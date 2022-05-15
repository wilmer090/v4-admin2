import { Col, Row, Space } from 'antd';
import { ButtonContainer, DetailsCard } from 'pages/Publications/Publication/Publication.styled';
import { useHistory } from 'react-router-dom';
import { Button, Input } from 'shared/theme/elements';
import { DatePicker } from 'shared/theme/elements/DatePicker';
import { Select } from 'shared/theme/elements/Select';
import { TextArea } from 'shared/theme/elements/Textarea';

const EditRadioView = () => {
  const history = useHistory();

  //   const form = useFormik({
  //     initialValues,
  //     onSubmit: (values) => handleSubmit(values, logo),
  //     // validationSchema: publicationValidationSchema,
  //   });

  return (
    <>
      <DetailsCard title="Details">
        <Row gutter={[16, 32]}>
          <Col span={24}>
            <Input
              type="text"
              placeholder="Enter name here"
              label="Channel(Publication)"
              isRequired
              id="channel"
              name="channel"
              //   onChange={form.handleChange}
              //   value={form.values.author_name}
              // onChange={form.handleChange}
              // value={form.values.publication_name}
              //errorMessage={getErrorMessage(form.touched.publication_name, form.errors.publication_name)}
            />
          </Col>
          <Col span={24}>
            <Space>
              <Input
                type="text"
                placeholder="example"
                label="Program"
                id="program"
                name="program"
                isRequired
                // onChange={form.handleChange}
                // value={form.values.publication_name}
                //errorMessage={getErrorMessage(form.touched.publication_name, form.errors.publication_name)}
              />
              <ButtonContainer>
                <Button>Add New Program</Button>
              </ButtonContainer>
            </Space>
          </Col>

          <Col span={24}>
            <Space>
              <Select
                label="Reporter"
                placeHolder="Select Reporter"
                items={[
                  { value: 1, id: 'Philippines' },
                  { value: 2, id: 'Singapore' },
                ]}
                isRequired

                //   onChange={(value) => form.setFieldValue('country', value)}
                //   value={form.values.country}
              />
              <ButtonContainer>
                <Button>Add New Reporter</Button>
              </ButtonContainer>
            </Space>
          </Col>
          <Col span={8}>
            <Input
              type="text"
              $fullWidth
              placeholder="example"
              label="Title"
              id="title"
              name="title"
              isRequired

              // onChange={form.handleChange}
              // value={form.values.publication_name}
              //errorMessage={getErrorMessage(form.touched.publication_name, form.errors.publication_name)}
            />
          </Col>

          <Col span={8}>
            <Select
              $fullWidth
              label="Segment Type"
              placeHolder="New release"
              items={[
                { value: 1, id: 'Philippines' },
                { value: 2, id: 'Singapore' },
              ]}
              isRequired

              //   onChange={(value) => form.setFieldValue('country', value)}
              //   value={form.values.country}
            />
          </Col>
          <Col span={8}></Col>
          <Col span={8}>
            <DatePicker label="Date Aired" isRequired />
          </Col>
          <Col span={8}>
            <DatePicker label="Date Aired" isRequired />
          </Col>
          <Col span={8}></Col>
          <Col span={8}>
            <Input
              type="text"
              $fullWidth
              placeholder="000"
              label="Segment Length(Seconds)"
              id="segment_length"
              name="segment_length"
              isRequired

              // onChange={form.handleChange}
              // value={form.values.publication_name}
              //errorMessage={getErrorMessage(form.touched.publication_name, form.errors.publication_name)}
            />
          </Col>
          <Col span={8}>
            <Input
              type="text"
              $fullWidth
              placeholder="000"
              label="Time Slot"
              id="time_slot"
              name="time_slot"
              isRequired

              // onChange={form.handleChange}
              // value={form.values.publication_name}
              //errorMessage={getErrorMessage(form.touched.publication_name, form.errors.publication_name)}
            />
          </Col>
          <Col span={16}>
            <Select
              $fullWidth
              label="Client"
              placeHolder="All Client"
              items={[
                { value: 1, id: 'Philippines' },
                { value: 2, id: 'Singapore' },
              ]}
              isRequired

              //   onChange={(value) => form.setFieldValue('country', value)}
              //   value={form.values.country}
            />
          </Col>
          <Col span={24}>
            <TextArea label="Keywords" isRequired $fullHeight />
          </Col>
          <Col span={24}>
            <TextArea label="Keyword/s Append" isRequired />
          </Col>
          <Col span={8}>
            <ButtonContainer>
              <Button variant="outlined" onClick={() => history.goBack()}>
                Add Keyword/s to content
              </Button>
            </ButtonContainer>
          </Col>
        </Row>
      </DetailsCard>
      <ButtonContainer>
        <Space size="middle">
          <Button variant="outlined" onClick={() => history.goBack()}>
            Cancel
          </Button>
          <Button
            variant="primary"
            //   onClick={() => form.handleSubmit()}
          >
            Save Changes
          </Button>
        </Space>
      </ButtonContainer>
    </>
  );
};

export default EditRadioView;
