import { Col, Row, Space } from 'antd';
import { ButtonContainer, DetailsCard } from 'pages/Publications/Publication/Publication.styled';
import { useHistory } from 'react-router-dom';
import { Button, Input } from 'shared/theme/elements';
import { DatePicker } from 'shared/theme/elements/DatePicker';
import { Select } from 'shared/theme/elements/Select';
import { TextArea } from 'shared/theme/elements/Textarea';

const TvView = () => {
  //const multiplier = multiplierSource;
  const history = useHistory();

  //   const form = useFormik({
  //     initialValues,
  //     onSubmit: (values) => handleSubmit(values, logo),
  //     // validationSchema: publicationValidationSchema,
  //   });

  // const options = multiplierSource?.map((item) => {
  //   return { label: item.multiplier_name, value: item.multiplier_value };
  // });
  // const options = multiplier
  //   ?.filter((item) => item?.multiplier_name != 'sample_multiplier')
  //   .map((item) => {
  //     return { label: item.multiplier_name, value: item.multiplier_value };
  //   });
  return (
    <>
      <DetailsCard title="Details">
        <Row gutter={[16, 32]}>
          <Col span={12}>
            <Input
              type="text"
              placeholder="Enter name here"
              label="Channel(Publication)"
              isRequired
              id="channel"
              name="channel"
              $fullWidth
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
            <Input
              type="text"
              $fullWidth
              placeholder="Title here"
              label="Title"
              id="title"
              name="title"
              isRequired

              // onChange={form.handleChange}
              // value={form.values.publication_name}
              //errorMessage={getErrorMessage(form.touched.publication_name, form.errors.publication_name)}
            />
          </Col>

          <Col span={24}>
            <Input
              type="text"
              $fullWidth
              placeholder=""
              label="Endorse Search"
              id="endorse_search"
              name="endorse_search"
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
              placeholder="First name"
              label="Endorse Manual Input"
              id="firstname"
              name="firstname"
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
              placeholder="Middle name"
              label=" "
              id="middlename"
              name="middlename"
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
              placeholder="Last Name"
              label=" "
              id="lastname"
              name="lastname"
              isRequired

              // onChange={form.handleChange}
              // value={form.values.publication_name}
              //errorMessage={getErrorMessage(form.touched.publication_name, form.errors.publication_name)}
            />
          </Col>

          <Col span={12}>
            <Select
              $fullWidth
              label="Ad Type"
              placeHolder="Choose Ad Type"
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
            <DatePicker label="Time Aired" isRequired />
          </Col>
          <Col span={8}></Col>
          <Col span={8}>
            <Input
              type="text"
              $fullWidth
              placeholder="000"
              label="Ad Length (Seconds)"
              id="ad_length"
              name="ad_length"
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

export default TvView;

{
  /* <Col span={24}>
    <Row>
      <Col>
        <Row>

        </Row>
      </Col>
      <Col></Col>
    </Row>
</Col> */
}
