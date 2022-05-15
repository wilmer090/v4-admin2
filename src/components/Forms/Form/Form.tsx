import { Col, Row, Space } from 'antd';
import { useFormik } from 'formik';
import { ButtonContainer, DetailsCard } from 'pages/Publications/Publication/Publication.styled';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'shared/constants/ROUTES';
import { Button, Input } from 'shared/theme/elements';
import { Checkbox } from 'shared/theme/elements/Checkbox';
import { DatePicker } from 'shared/theme/elements/DatePicker';
import { Select } from 'shared/theme/elements/Select';
import { TextArea } from 'shared/theme/elements/Textarea';

const Form = ({ multiplierSource, data }) => {
  const { goBack, location } = useHistory();

  const initialValues = {
    id: data ? data?.id : '',
    channel: data ? data?.channel : '',
    program: data ? data?.program : '',
    segment_type: data ? data?.segment_type : '',
    segment_length: data ? data?.segment_length : '',
    reporter: data ? data?.reporter : '',
  };

  const form = useFormik({
    initialValues,
    onSubmit: () => {},

    // validationSchema: publicationValidationSchema,
  });

  return (
    <>
      <DetailsCard title="Details">
        <Row gutter={[16, 32]}>
          <Col span={24}>
            <Row>
              <Col span={16}>
                {data && (
                  <iframe
                    width="560"
                    height="315"
                    src={data?.media_src}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ marginBottom: '10px' }}
                  ></iframe>
                )}

                <Row gutter={[16, 32]}>
                  <Col span={24}>
                    <Input
                      type="text"
                      placeholder="Enter name here"
                      label="Channel(Publication)"
                      isRequired
                      id="channel"
                      name="channel"
                      onChange={form.handleChange}
                      value={form.values.channel}
                      // onChange={form.handleChange}
                      // errorMessage={getErrorMessage(form.touched.publication_name, form.errors.publication_name)}
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
                        onChange={form.handleChange}
                        value={form.values.program}
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
                          { id: '1', value: 'Dennise Antenor Jr.' },
                          { id: '2', value: 'Pia Hontiveros' },
                        ]}
                        isRequired
                        // onChange={(value) => form.setFieldValue('country', value)}
                        value={form.values.reporter}
                      />
                      <ButtonContainer>
                        <Button>Add New Reporter</Button>
                      </ButtonContainer>
                    </Space>
                  </Col>
                </Row>
              </Col>
              <Col span={8}>
                <Checkbox items={multiplierSource} label={'Multiplier'} isRequired />
              </Col>
            </Row>
          </Col>

          <Col span={8}>
            <Input
              type="text"
              $fullWidth
              placeholder="Title here"
              label="Title"
              id="title"
              name="title"
              isRequired
              onChange={form.handleChange}
              value={form.values.program}
              //errorMessage={getErrorMessage(form.touched.publication_name, form.errors.publication_name)}
            />
          </Col>

          <Col span={8}>
            <Select
              $fullWidth
              label="Segment Type"
              placeHolder="New release"
              items={[
                { id: '1', value: 'Sample1' },
                { id: '2', value: 'Sample2' },
              ]}
              isRequired
              // onChange={(value) => form.setFieldValue('country', value)}
              value={form.values.segment_type}
            />
          </Col>

          <Col span={8}></Col>
          <Col span={8}>
            <DatePicker label="Date Aired" isRequired />
          </Col>
          <Col span={8}>
            <DatePicker label="Time Aired" isRequired />
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
              onChange={form.handleChange}
              value={form.values.segment_length}
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
                { id: '1', value: 'Philippines' },
                { id: '2', value: 'Singapore' },
              ]}
              isRequired
              //   onChange={(value) => form.setFieldValue('country', value)}
              value={form.values.channel}
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
              <Button variant="outlined" onClick={() => goBack()}>
                Add Keyword/s to content
              </Button>
            </ButtonContainer>
          </Col>
        </Row>
      </DetailsCard>
      <ButtonContainer>
        <Space size="middle">
          <Button variant="outlined" onClick={() => goBack()}>
            Cancel
          </Button>
          {location.pathname === ROUTES.TV.TVCLIPS.EDIT ? (
            <Button
              variant="primary"
              //   onClick={() => form.handleSubmit()}
            >
              Verify
            </Button>
          ) : (
            <Button
              variant="primary"
              //   onClick={() => form.handleSubmit()}
            >
              Save Changes
            </Button>
          )}
        </Space>
      </ButtonContainer>
    </>
  );
};

export default Form;
