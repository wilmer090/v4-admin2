import { Col, Row, Space } from 'antd';
import { ButtonContainer, DetailsCard } from 'pages/Publications/Publication/Publication.styled';
import { useHistory } from 'react-router-dom';
import { Button, Input } from 'shared/theme/elements';
import { DatePicker } from 'shared/theme/elements/DatePicker';
import { Radio } from 'shared/theme/elements/Radio';
import { TextArea } from 'shared/theme/elements/Textarea';

type Props = {
  handleSubmit: (values: any) => void;
  publication: any;
};

const AddAuthorView: React.FC<Props> = () => {
  //   const handleFile = (file: Blob) => {
  //     setLogo(file);
  //   };

  // const initialValues = {
  //   _id: author ? author?._id : '',
  //   country: author ? author?.country : '',
  //   author_publications: [],
  //   author_score: [],
  //   created_by: null,
  //   updated_by: null,
  //   author_profile_pic: author ? author?.author_profile_pic : '',
  //   author_tag: author ? author?.author_tag : '',
  //   author_reputation_score: 0,
  //   author_activity_score: 0,
  //   social_media_links: {
  //     twitter: {
  //       profile_url: author ? author.social_media_links.twitter.profile_url : '',
  //       follower_count: '',
  //       tweets_count: '',
  //     },
  //     instagram: {
  //       profile_url: author ? author.social_media_links.instagram.profile_url : '',
  //     },
  //     facebook: {
  //       profile_url: author ? author.social_media_links.facebook.profile_url : '',
  //     },
  //     linkedin: {
  //       profile_url: author ? author.social_media_links.linkedin.profile_url : '',
  //     },
  //     social_links: {
  //       profile_url: '',
  //     },
  //   },
  //   contact_information: {
  //     contact_phone: author ? author?.contact_information?.contact_phone : '',
  //     contact_email: author ? author?.contact_information?.contact_email : '',
  //   },
  //   aut_id: 11428,
  //   author_name: author ? author?.author_name : '',
  //   is_verified: author ? author?.is_verified : false,
  //   date_created: null,
  //   date_updated: null,
  // };

  const history = useHistory();

  // const form = useFormik({
  //   initialValues,
  //   onSubmit: (values) => handleSubmit(values),
  //   // validationSchema: publicationValidationSchema,
  // });

  return (
    <>
      <DetailsCard title="Details">
        <Row gutter={[16, 32]}>
          <Col span={8}>
            <DatePicker label="Publication Date" isRequired />
          </Col>
          <Col span={8}>
            <Input
              type="text"
              $fullWidth
              placeholder="example"
              label="Publication Search (Optional)"
              id="search"
              name="search"
              // onChange={form.handleChange}
              // value={form.values.publication_name}
              //errorMessage={getErrorMessage(form.touched.publication_name, form.errors.publication_name)}
            />
          </Col>
          <Col span={8}></Col>

          <Col span={24}>
            <Input
              type="text"
              $fullWidth
              placeholder="Paste URL here"
              label="Full URL"
              isRequired
              name="full_url"
              // onChange={form.handleChange}
              //   value={form.values.contact_information.contact_email}
            />
          </Col>
          <Col span={24}>
            <Input
              type="text"
              $fullWidth
              placeholder=""
              label="Article Title"
              isRequired
              name="article_title"
              // onChange={form.handleChange}
              //   value={form.values.contact_information.contact_email}
            />
          </Col>

          <Col span={8}>
            <Input
              type="text"
              $fullWidth
              placeholder="Add author/s separated by newline"
              label="Authors"
              isRequired
              name="authors"
              // onChange={form.handleChange}
              //   value={form.values.contact_information.contact_email}
            />
          </Col>
          <Col span={8}>
            <Input
              type="text"
              $fullWidth
              placeholder=""
              label="Publication"
              name="publication"
              id="publication"
              // onChange={form.handleChange}
              //value={form.values.author_tag}
              // errorMessage={getErrorMessage(
              //   form.touched.social_media_links?.youtube?.profile_url,
              //   form.errors.social_media_links?.youtube?.profile_url,
              // )}
            />
          </Col>
          <Col span={8}></Col>

          <Col span={8}>
            <Input
              type="text"
              $fullWidth
              placeholder=""
              label="Section Search"
              name="publication"
              id="publication"
              // onChange={form.handleChange}
              //value={form.values.author_tag}
              // errorMessage={getErrorMessage(
              //   form.touched.social_media_links?.youtube?.profile_url,
              //   form.errors.social_media_links?.youtube?.profile_url,
              // )}
            />
          </Col>
          <Col span={8}>
            <Input
              type="text"
              $fullWidth
              placeholder=""
              label="Manual Input Section Name"
              name="publication"
              id="publication"
              // onChange={form.handleChange}
              //value={form.values.author_tag}
              // errorMessage={getErrorMessage(
              //   form.touched.social_media_links?.youtube?.profile_url,
              //   form.errors.social_media_links?.youtube?.profile_url,
              // )}
            />
          </Col>
          <Col span={8}></Col>
          <Col span={8}>
            <Radio
              items={['Online News', 'Blog']}
              $fullWidth
              isRequired
              label={'Media Type'}
              errorMessage={undefined}
              type={undefined}
              defaultValue={undefined}
              btnStyle={undefined}
            />
          </Col>
          <Col span={8}>
            <Input
              type="text"
              $fullWidth
              placeholder=""
              label="Website Type"
              isRequired
              name="social_media_links.youtube.profile_url"
              // onChange={form.handleChange}
              // value={form.values.social_media_links.youtube.profile_url}
              // errorMessage={getErrorMessage(
              //   form.touched.social_media_links?.youtube?.profile_url,
              //   form.errors.social_media_links?.youtube?.profile_url,
              // )}
            />
          </Col>
          <Col span={24}>
            <Input
              type="text"
              $fullWidth
              label="Image URLs"
              isRequired
              placeholder="Paste urls separated by newline"
              name="social_media_links.twitter.profile_url"
              // onChange={form.handleChange}
              //value={form.values.social_media_links.twitter.profile_url}
              // errorMessage={getErrorMessage(
              //   form.touched.social_media_links?.twitter?.profile_url,
              //   form.errors.social_media_links?.twitter?.profile_url,
              // )}
            />
          </Col>
          <Col span={24}>
            <Input
              type="text"
              $fullWidth
              placeholder=""
              label="Video URLs"
              isRequired
              name="social_media_links.social_links.profile_url"
              // onChange={form.handleChange}
              //value={form.values.social_media_links.social_links.profile_url}
              // errorMessage={getErrorMessage(
              //   form.touched.social_media_links?.linkenin?.profile_url,
              //   form.errors.social_media_links?.linkenin?.profile_url,
              // )}
            />
          </Col>
          <Col span={24}>
            <TextArea label="Content" isRequired />
          </Col>
          <Col span={24}>
            <TextArea label="Keyword/s Append" isRequired />
          </Col>
        </Row>
        <Col span={8}>
          <ButtonContainer>
            <Button variant="outlined" onClick={() => history.goBack()}>
              Add Keyword/s to content
            </Button>
          </ButtonContainer>
        </Col>
      </DetailsCard>
      <ButtonContainer>
        <Space size="middle">
          <Button variant="outlined" onClick={() => history.goBack()}>
            Cancel
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Space>
      </ButtonContainer>
    </>
  );
};

export default AddAuthorView;
