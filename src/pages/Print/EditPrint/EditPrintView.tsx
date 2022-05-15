import { Col, Row, Space } from 'antd';
import { useFormik } from 'formik';
import { ButtonContainer, DetailsCard } from 'pages/Publications/Publication/Publication.styled';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IUpload } from 'shared/interfaces/utils/IUpload';
import { Button, Input } from 'shared/theme/elements';
import { DatePicker } from 'shared/theme/elements/DatePicker';
import Images from 'shared/theme/elements/Image/Image';
import { TextArea } from 'shared/theme/elements/Textarea';

type Props = {
  handleSubmit: (values: any, logo: any) => void;
  author: any;
};

const EditPrintView: React.FC<Props> = ({ handleSubmit, author }) => {
  const [logo] = useState<IUpload>(null);

  const initialValues = {
    _id: author ? author?._id : '',
    country: author ? author?.country : '',
    author_publications: [],
    author_score: [],
    created_by: null,
    updated_by: null,
    author_profile_pic: author ? author?.author_profile_pic : '',
    author_tag: author ? author?.author_tag : '',
    author_reputation_score: 0,
    author_activity_score: 0,
    social_media_links: {
      twitter: {
        profile_url: author ? author?.social_media_links.twitter?.profile_url : '',
        follower_count: '',
        tweets_count: '',
      },
      instagram: {
        profile_url: author ? author?.social_media_links?.instagram?.profile_url : '',
      },
      facebook: {
        profile_url: author ? author?.social_media_links?.facebook?.profile_url : '',
      },
      linkedin: {
        profile_url: author ? author?.social_media_links?.linkedin?.profile_url : '',
      },
      social_links: {
        profile_url: author ? author?.social_media_link?.social_link : '',
      },
    },
    contact_information: {
      contact_phone: author ? author?.contact_information?.contact_phone : '',
      contact_email: author ? author?.contact_information?.contact_email : '',
    },
    aut_id: 11428,
    author_name: author ? author?.author_name : '',
    is_verified: author ? author?.is_verified : false,
    date_created: null,
    date_updated: null,
  };

  const history = useHistory();
  const form = useFormik({
    initialValues,
    onSubmit: (values) => handleSubmit(values, logo),
    // validationSchema: publicationValidationSchema,
  });

  return (
    <>
      <DetailsCard title="Details">
        <Row gutter={[16, 32]}>
          <Col span={8}>
            <Input
              type="text"
              $fullWidth
              placeholder="Enter name here"
              label="Verified by"
              isRequired
              id="author_name"
              name="author_name"
              onChange={form.handleChange}
              value={form.values.author_name}
              // onChange={form.handleChange}
              // value={form.values.publication_name}
              //errorMessage={getErrorMessage(form.touched.publication_name, form.errors.publication_name)}
            />
          </Col>
          <Col span={8}>
            <Input
              type="text"
              $fullWidth
              placeholder="example"
              label="Modified by"
              id="aka"
              name="aka"
              // onChange={form.handleChange}
              // value={form.values.publication_name}
              //errorMessage={getErrorMessage(form.touched.publication_name, form.errors.publication_name)}
            />
          </Col>
          <Col span={8}>
            <Input
              type="text"
              $fullWidth
              placeholder="Enter email here"
              label="Created by"
              isRequired
              name="contact_information.contact_email"
              onChange={form.handleChange}
              value={form.values.contact_information.contact_email}
            />
          </Col>

          <Col span={8}>
            <DatePicker label="Publication Date" isRequired />
          </Col>
          <Col span={8}></Col>

          <Col span={8}></Col>
          <Col span={24}>
            <Input
              type="text"
              $fullWidth
              placeholder="Child?"
              label="Title"
              name="child_parent"
              id="child_parent"
              onChange={form.handleChange}
              // value={form.values.author_tag}
              isRequired
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
              placeholder="Child?"
              label="Authors"
              name="child_parent"
              id="child_parent"
              onChange={form.handleChange}
              // value={form.values.author_tag}
              isRequired
              // errorMessage={getErrorMessage(
              //   form.touched.social_media_links?.youtube?.profile_url,
              //   form.errors.social_media_links?.youtube?.profile_url,
              // )}
            />
          </Col>
          <Col span={12}>
            <TextArea
              label="Content"
              isRequired
              $fullHeight
              value="BORDER CONTROL. The Philippine National Police currently implements stricter border controls in Bulacan after it was placed under Alert Level 3 from January 5-15 to due rising OQ/ID-19 cases. (PRO Central Luzon) PNP implements stricter border controls in Bulacan MaLOLOS CITY - The Phil ippine National Police currently implements stricter border controls in Bulacan after it was placed under Alert Level 3 from January 5-15 to due rising COVID-19 cases. In a statement, Police Regional Director PBGen. Matthew Baccay said a total of 112 police officers and force multipliers are currently deployed in 24 Quarantine Control Points (QCP), 17 provincial boundaries (BulacanNational Capital Region, Bulacan- Pampanga.and Bulacan-Nueva Ecija) and 7 exits of North Luzon Expressway (NLEX). The QCPs are located in barangay San Roque Road., Baliuag, (Candaba, Pampanga Boundary); barangay Tilapayong, Baliwag, (Apalit, Pampanga Boundary); barangay Gatbuca, Calumpit, (Calumpit-Apalit, Pampanga Boundary); Slielterville, barangay Loma De Gato, Marilao, (Phase 10 Brgy Bagong Silang Caloocan City): barangay Bagbaguin, Meycauayan, (Road Closed-Valezuela Boundary); Brgy. Bahay Pare, Meycauayan (Caloocan Boundary), along McArthur Highway and barangay Bancal, Meycauayan, barangay Lawa, Meycauayan, Bulacan (Valenzuela Boundary). Also, barangay Catanghalan, Obando; barangay Panghulo, Obando; barangay Bulualto, San Miguel (Provincial Boundary of San Miguel to Gapan, Nueva Ecija); barangay DagatDagatan, San Rafael (San Rafael- Candaba, Pampanga Boundary); barangay Pansumaloc, San Rafael (San Rafael-Candaba, Pampanga Boundary); barangay Batasan Bata, San Miguel, Bulacan (Provincial Boundary of San Miguel to Candaba, Pampanga); Dela Costa Homes, San Jose Del Monte Qty (Phase 7 barangay Bagong Silang, Caloocan Qty); Evergreen Heights, San Jose Del Monte City (Phase 10, barangay Bagong Silang Caloocan City); and Sapang Alat, San Miguel, San Jose Del Monte City (barangay Malaria, Caloocan City). Meanwhile, control points NLEX are situated along the northbound exit in barangay Turo, Bocaue; Barangay Igulot, Bocaue; northbound exit in Barangay Tambubong, San Rafael: exit bound in Barangay Sta Rita Guiguinto; southbound in barangay Patubig, Marilao; NLEX toll exit southbound in Barangay Malhacan, Meycauayan City; and Pulilan Exit, South Bound, Brgy. Tibag, Pulilan, Bulacan. Baccay reminded the public that only those providing basic services, essential needs, necessary items, utilities, and other authorized personnel are permitted to enter and exit the province's borders. Travelers entering Metro Manila without vaccination proof are barred from passing through. He appealed to the public to adhere to the guidelines and to stay inside their homes given the recent surge of cases. Pampanga, Olongapo City, Angeles City, Bataan and Zambales will likewise be under Alert Level 3 beginning Sunday, January 9. (PIA 3)"
            />
          </Col>
          <Col span={12}>
            <Images label="Image/PDF" $fullWidth isRequired width={450} height={479} />
          </Col>
          <Col span={24}>
            <TextArea label="Keword/s Append" isRequired />
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
          <Button variant="primary" onClick={() => form.handleSubmit()}>
            Save Changes
          </Button>
        </Space>
      </ButtonContainer>
    </>
  );
};

export default EditPrintView;
