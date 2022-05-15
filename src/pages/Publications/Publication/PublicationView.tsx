import { Col, DatePicker, Row, Space } from 'antd';
import { SelectValue } from 'antd/lib/select';
import EditUserDetail from 'components/EditUserDetail/EditUserDetail';
import { FormikProps, useFormik } from 'formik';
import React, { useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IMediaSource } from 'shared/interfaces/IMediaSource';
import { IPublication, IPublicationCreatePayload } from 'shared/interfaces/IPublication';
import { IKeyValue } from 'shared/interfaces/utils/IKeyValue';
import { IUpload } from 'shared/interfaces/utils/IUpload';
import { Button, Input, Upload, useModal } from 'shared/theme/elements';
import InputNumber from 'shared/theme/elements/Input/InputNumber';
import InputTextArea from 'shared/theme/elements/Input/InputTextArea';
import { Select } from 'shared/theme/elements/Select';
import Table from 'shared/theme/elements/Table/Table';
import { getErrorMessage } from 'shared/utils/getErrorMessage';
import { socialMediasToArray } from 'shared/utils/socialMediasToArray';
import * as yup from 'yup';

import { METRICS_COLUMN } from './MetricsColumn';
import { METRIC_STATUS_COLUMN } from './MetricsStatusColumn';
import MultiplierModalContent from './MultiplierModalContent';
import NewPageModalContent from './NewPageModalContent';
import {
  ButtonContainer,
  ButtonSetContainer,
  CostCard,
  DetailsCard,
  FilterContainer,
  FilterFormControl,
  FormControl,
  FormLabel,
  HorizontalLabel,
  MetricsCard,
  MetricsStatusContainer,
  PagesCard,
  PublicationWrapper,
  SetText,
  TableContainer,
} from './Publication.styled';

const countries: IKeyValue[] = [
  {
    id: 'ph',
    value: 'Philippines',
  },
  {
    id: 'sg',
    value: 'Singapore',
  },
];

type Props = {
  handleSubmit: (values: IPublicationCreatePayload, logo: IUpload) => void;
  isLoading?: boolean;
  mediaSources: IMediaSource[];
  publication?: IPublication;
};

const PublicationView: React.FC<Props> = ({ handleSubmit, isLoading, publication, mediaSources }) => {
  const history = useHistory();
  const [showMultiplier, setShowMultiplier] = useState<boolean>(false);
  const [logo, setLogo] = useState<IUpload>(null);
  const [selectedMultiplierIndex, setSelectedMultiplierIndex] = useState<number>(0);
  const [isMediaSourceAudioAndVideo] = useState<boolean>(false);
  // const [selectedMediaSource, setSelectedMediaSource] = useState<IMediaSource>();

  const handleFile = (file: Blob) => {
    setLogo(file);
  };

  // const toggleCost = () => {
  //   setShowCost((showCost) => !showCost);
  // };
  const toggleMultiplier = () => {
    setShowMultiplier((showMultiplier) => !showMultiplier);
  };
  //#region Initial Values
  const initialValues: IPublicationCreatePayload = {
    publisher_name: publication ? publication.publisher_name : '',
    description: publication ? publication.description : '',
    media_source_name: publication ? publication.media_source[0]?.media_source_name : '',
    country: publication ? publication.country : 'ph',
    website_urls: publication ? publication.website_urls || [] : [],
    publication_page: publication ? publication.publication_page : [],

    contact_information: {
      email: publication ? publication.contact_information.email : null,
      landline: publication ? publication.contact_information.landline : null,
      phone: publication ? publication.contact_information.phone : null,
      address: {
        street_address1: publication ? publication.contact_information.address.street_address1 : null,
        street_address2: publication ? publication.contact_information.address.street_address2 : null,
      },
    },
    pub_cost: {
      pco_circulation: publication ? publication.pub_cost.pco_circulation : 0,
      pco_weekend_circulation: publication ? publication.pub_cost.pco_weekend_circulation : 0,
      pco_price_per_colcm: publication ? publication.pub_cost.pco_price_per_colcm : 0,
      pco_weekend_colcm: publication ? publication.pub_cost.pco_weekend_colcm : 0,
      pco_whole_page_bw: publication ? publication.pub_cost.pco_whole_page_bw : 0,
      pco_whole_page_1clr: publication ? publication.pub_cost.pco_whole_page_1clr : 0,
      pco_whole_page_2clr: publication ? publication.pub_cost.pco_whole_page_2clr : 0,
      pco_whole_page_3clr: publication ? publication.pub_cost.pco_whole_page_3clr ?? 0 : 0,
      pco_weekend_whole_page_bw: publication ? publication.pub_cost.pco_weekend_whole_page_bw : 0,
      pco_weekend_whole_page_1clr: publication ? publication.pub_cost.pco_weekend_whole_page_1clr : 0,
      pco_weekend_whole_page_2clr: publication ? publication.pub_cost.pco_weekend_whole_page_2clr : 0,
      pco_weekend_whole_page_3clr: publication ? publication.pub_cost.pco_weekend_whole_page_3clr : 0,
      pco_extended_fix_rate: publication ? publication.pub_cost.pco_extended_fix_rate : 0,
    },
    social_media_links: publication ? socialMediasToArray(publication.social_media_links) : [],
    is_verified: true,
  };

  const publicationValidationSchema: yup.SchemaOf<IPublicationCreatePayload> = yup.object().shape({
    publisher_name: yup.string().required('Publication Name is required'),
    description: yup.string(),
    country: yup.string().required('Country is required'),
    media_source_name: yup.string().required('Media Source is required'),
    contact_information: yup.object({
      email: yup.string().nullable(),
      landline: yup.string().nullable(),
      phone: yup.string().nullable(),
      address: yup.object({
        street_address1: yup.string().nullable(),
        street_address2: yup.string().nullable(),
      }),
    }),
    publication_page: yup.array(),
    website_urls: yup.array().min(1, 'Websites Urls must not be empty'),
    social_media_links: yup.array(),
    pub_cost: yup.object({
      pco_circulation: yup.number().default(0),
      pco_weekend_circulation: yup.number().default(0),
      pco_price_per_colcm: yup.number().default(0),
      pco_weekend_colcm: yup.number().default(0),
      pco_whole_page_bw: yup.number().default(0),
      pco_whole_page_1clr: yup.number().default(0),
      pco_whole_page_2clr: yup.number().default(0),
      pco_whole_page_3clr: yup.number().default(0),
      pco_weekend_whole_page_bw: yup.number().default(0),
      pco_weekend_whole_page_1clr: yup.number().default(0),
      pco_weekend_whole_page_2clr: yup.number().default(0),
      pco_weekend_whole_page_3clr: yup.number().default(0),
      pco_extended_fix_rate: yup.number().default(0),
    }),
    is_verified: yup.boolean().notRequired(),
    created_by: yup.string(),
  });

  const form: FormikProps<IPublicationCreatePayload> = useFormik<IPublicationCreatePayload>({
    initialValues,
    onSubmit: (values) => {
      let finalValues = { ...values };
      if (publication) {
        finalValues = {
          ...values,
          publication_page: values.publication_page.slice(7),
        };
      }

      handleSubmit(finalValues, logo);
    },
    validationSchema: publicationValidationSchema,
  });
  //#endregion
  const mediaSourcesOptions = useMemo(() => {
    return mediaSources.map((item) => {
      return {
        id: item.media_source_name,
        value: item.media_source_name,
      };
    });
  }, [mediaSources]) as IKeyValue[];

  // const getCostLabel = useMemo(() => {
  //   const lowerCaseFlag = selectedMediaSource?.media_source_type_flag?.toLocaleLowerCase();
  //   return lowerCaseFlag === 'print' ? 'Circulation' : lowerCaseFlag === 'online' ? 'Readership' : 'Viewership';
  // }, [selectedMediaSource]);

  const handleMediaSource = (value: SelectValue) => {
    if (value !== 'Broadsheet') {
      form.setFieldValue('publication_page', []);
    }
    form.setFieldValue('media_source_name', value);
    // const mediaSource = mediaSources.filter((ms) => ms._id === value)[0];
    // const _isMediaSourceAudioAndVideo =
    //   mediaSource?.media_source_type_flag === 'audio' || mediaSource?.media_source_type_flag === 'video';

    // setSelectedMediaSource(mediaSource);
    // setIsMediaSourceAudioAndVideo(_isMediaSourceAudioAndVideo);
  };

  const handleWebsiteChange = (value: SelectValue) => {
    form.setFieldValue('website_urls', value);
  };

  const handleSocialLinksChange = (value: SelectValue) => {
    form.setFieldValue('social_media_links', value);
  };

  const onAddNewPage = ({ name, value, page_number }: { name: string; value: number; page_number: string }) => {
    const newPage = {
      multiplier_media_type: 'print',
      multiplier_name: name,
      multiplier_value: value,
      publication_page_no: page_number,
    };

    form.setFieldValue('publication_page', [...form.values.publication_page, newPage]);
  };

  const getPublicationPages = useMemo(() => {
    return form.values.publication_page.filter(
      (v, i, a) => a.findIndex((t) => t.multiplier_name === v.multiplier_name) === i,
    );
  }, [form.values.publication_page]);

  // const isMediaSourceAudioAndVideo = useMemo(() => {
  //   return (
  //     getMediaSourceValue?.media_source_type_flag === 'audio' || getMediaSourceValue?.media_source_type_flag === 'video'
  //   );
  // }, [getMediaSourceValue]);

  // Modals

  const {
    open: openMultiplierModal,
    isOpen: isMultiplierModalOpen,
    modalRef: multiplierModal,
  } = useModal({
    title: form.values.publication_page[selectedMultiplierIndex]?.multiplier_name,
    centered: true,
    disableCloseButton: false,
    width: 570,
    component: (_, close) => (
      <MultiplierModalContent closeModal={close} form={form} multiplierIndex={selectedMultiplierIndex} />
    ),
  });

  const {
    open: openNewPageModal,
    isOpen: isNewPageModalOpen,
    modalRef: newPageModal,
  } = useModal({
    title: 'New Page',
    centered: true,
    disableCloseButton: false,
    width: 570,
    component: (_, close) => <NewPageModalContent onAddPage={onAddNewPage} closeModal={close} />,
  });

  const handleModalOpen = (multiplierIndex: number) => {
    setSelectedMultiplierIndex(multiplierIndex);
    openMultiplierModal();
  };

  return (
    <PublicationWrapper>
      {isMultiplierModalOpen && multiplierModal}
      {isNewPageModalOpen && newPageModal}

      <DetailsCard title="Details">
        <Row gutter={[16, 32]}>
          {publication && (
            <>
              <Col span={8}>
                <EditUserDetail
                  label="Modified By"
                  date={publication.date_updated}
                  name={`${
                    publication.updated_by
                      ? `${publication.updated_by.first_name} ${publication.updated_by.last_name}`
                      : ''
                  }`}
                />
              </Col>
              <Col span={8}>
                <EditUserDetail label="Created By" date={null} name={'Na'} />
              </Col>
              <Col span={8} />
            </>
          )}

          <Col span={8}>
            <Input
              type="text"
              $fullWidth
              placeholder="Enter Publication Name"
              label="Publication Name"
              isRequired
              id="publisher_name"
              name="publisher_name"
              onChange={form.handleChange}
              value={form.values.publisher_name}
              errorMessage={getErrorMessage(form.touched.publisher_name, form.errors.publisher_name)}
            />
          </Col>
          <Col span={8}>
            <Select
              items={mediaSourcesOptions}
              onChange={(value) => handleMediaSource(value)}
              value={form.values.media_source_name}
              errorMessage={getErrorMessage(form.touched.media_source_name, form.errors.media_source_name)}
              placeholder="Select Media Type"
              label="Media Type"
              isRequired
              $fullWidth
            />
          </Col>

          <Col span={8}>
            <Select
              items={countries}
              onChange={(value) => form.setFieldValue('country', value)}
              value={form.values.country}
              errorMessage={getErrorMessage(form.touched.country, form.errors.country)}
              placeholder="Philippines"
              label="Country"
              isRequired
              $fullWidth
            />
          </Col>

          <Col span={24}>
            <Select
              mode="tags"
              items={[]}
              onChange={(value) => handleWebsiteChange(value)}
              value={form.values.website_urls}
              errorMessage={getErrorMessage(form.touched.website_urls, form.errors.website_urls)}
              placeholder="inquirer.net"
              label="Website URL/s"
              $fullWidth
              isRequired
            />
          </Col>

          <Col span={24}>
            <Select
              mode="tags"
              items={[]}
              onChange={(value) => handleSocialLinksChange(value)}
              value={form.values.social_media_links}
              placeholder="inquirer.net"
              label="Social Media Links"
              $fullWidth
            />
          </Col>

          <Col span={8}>
            <FormControl>
              <FormLabel>Publication Logo</FormLabel>
              <Upload onChange={handleFile} imageSrc={publication?.logo} accept="image/png, image/jpg, image/jpeg" />
            </FormControl>
          </Col>
          <Col span={24}>
            <InputTextArea
              label="Publisher Notes"
              name="description"
              onChange={form.handleChange}
              rows={4}
              autoSize={{ minRows: 3, maxRows: 5 }}
              value={form.values.description}
              placeHolder="inquirer.net"
              $fullWidth
            />
          </Col>
        </Row>
      </DetailsCard>

      {form.values.media_source_name === 'Broadsheet' && (
        <CostCard title="Cost">
          <Row>
            <Col span={16}>
              <Row gutter={[16, 32]}>
                <Col span={12}>
                  <InputNumber
                    label={`Circulation (Weekday)`}
                    placeholder="0"
                    $fullWidth
                    name="pub_cost.pco_circulation"
                    value={form.values.pub_cost.pco_circulation}
                    step="1"
                    min="0"
                    onChange={(value) => form.setFieldValue('pub_cost.pco_circulation', value)}
                  />
                </Col>
                <Col span={12}>
                  <InputNumber
                    label={`Circulation (Weekend)`}
                    placeholder="0"
                    $fullWidth
                    name="pub_cost.pco_weekend_circulation"
                    value={form.values.pub_cost.pco_weekend_circulation}
                    step="1"
                    min="0"
                    onChange={(value) => form.setFieldValue('pub_cost.pco_weekend_circulation', value)}
                  />
                </Col>
                <Col span={12}>
                  <InputNumber
                    label="Price (Weekend)"
                    placeholder="0"
                    $fullWidth
                    name="pub_cost.pco_price_per_colcm"
                    value={form.values.pub_cost.pco_price_per_colcm}
                    step="1"
                    min="0"
                    onChange={(value) => form.setFieldValue('pub_cost.pco_price_per_colcm', value)}
                  />
                </Col>
                <Col span={12}>
                  <InputNumber
                    label="Price (Weekday)"
                    placeholder="0"
                    $fullWidth
                    name="pub_cost.pco_weekend_colcm"
                    value={form.values.pub_cost.pco_weekend_colcm}
                    step="1"
                    min="0"
                    onChange={(value) => form.setFieldValue('pub_cost.pco_weekend_colcm', value)}
                  />
                </Col>
                <Col span={12}>
                  <InputNumber
                    label="Whole Page (Weekday, B&amp;W)"
                    placeholder="0"
                    $fullWidth
                    name="pub_cost.pco_whole_page_bw"
                    value={form.values.pub_cost.pco_whole_page_bw}
                    step="1"
                    min="0"
                    onChange={(value) => form.setFieldValue('pub_cost.pco_whole_page_bw', value)}
                  />
                </Col>
                <Col span={12}>
                  <InputNumber
                    label="Whole Page (Weekend, B&amp;W)"
                    placeholder="0"
                    $fullWidth
                    name="pub_cost.pco_weekend_whole_page_bw"
                    value={form.values.pub_cost.pco_weekend_whole_page_bw}
                    step="1"
                    min="0"
                    onChange={(value) => form.setFieldValue('pub_cost.pco_weekend_whole_page_bw', value)}
                  />
                </Col>
                <Col span={12}>
                  <InputNumber
                    label="Whole Page (Weekday, 1 Color)"
                    placeholder="0"
                    $fullWidth
                    name="pub_cost.pco_whole_page_1clr"
                    value={form.values.pub_cost.pco_whole_page_1clr}
                    step="1"
                    min="0"
                    onChange={(value) => form.setFieldValue('pub_cost.pco_whole_page_1clr', value)}
                  />
                </Col>
                <Col span={12}>
                  <InputNumber
                    label="Whole Page (Weekend, 1 Color)"
                    placeholder="0"
                    $fullWidth
                    name="pub_cost.pco_whole_page_1clr"
                    value={form.values.pub_cost.pco_weekend_whole_page_1clr}
                    step="1"
                    min="0"
                    onChange={(value) => form.setFieldValue('pub_cost.pco_weekend_whole_page_1clr', value)}
                  />
                </Col>
                <Col span={12}>
                  <InputNumber
                    label="Whole Page (Weekday, 2 Colors)"
                    placeholder="0"
                    $fullWidth
                    name="pub_cost.pco_whole_page_2clr"
                    value={form.values.pub_cost.pco_whole_page_2clr}
                    step="1"
                    min="0"
                    onChange={(value) => form.setFieldValue('pub_cost.pco_whole_page_2clr', value)}
                  />
                </Col>
                <Col span={12}>
                  <InputNumber
                    label="Whole Page (Weekend, 2 Colors)"
                    placeholder="0"
                    $fullWidth
                    name="pub_cost.pco_weekend_whole_page_2clr"
                    value={form.values.pub_cost.pco_weekend_whole_page_2clr}
                    step="1"
                    min="0"
                    onChange={(value) => form.setFieldValue('pub_cost.pco_weekend_whole_page_2clr', value)}
                  />
                </Col>
                <Col span={12}>
                  <InputNumber
                    label="Whole Page (Weekday, 3 Colors)"
                    placeholder="0"
                    $fullWidth
                    name="pub_cost.pco_whole_page_3clr"
                    value={form.values.pub_cost.pco_whole_page_3clr}
                    step="1"
                    min="0"
                    onChange={(value) => form.setFieldValue('pub_cost.pco_whole_page_3clr', value)}
                  />
                </Col>
                <Col span={12}>
                  <InputNumber
                    label="Whole Page (Weekend, 3 Colors)"
                    placeholder="0"
                    $fullWidth
                    name="pub_cost.pco_weekend_whole_page_3clr"
                    value={form.values.pub_cost.pco_weekend_whole_page_3clr}
                    step="1"
                    min="0"
                    onChange={(value) => form.setFieldValue('pub_cost.pco_weekend_whole_page_3clr', value)}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </CostCard>
      )}

      {/* <ButtonContainer>
        <Button onClick={toggleCost}>{showCost ? 'Hide Cost' : 'Add Cost'}</Button>
      </ButtonContainer>
      {showCost && (
        <CostCard title="Cost">
          <Row>
            <Col span={16}>
              <Row gutter={[16, 32]}>
                <Col span={12}>
                  <InputNumber label={`${getCostLabel} (Weekday)`} placeholder="0" $fullWidth />
                </Col>
                <Col span={12}>
                  <InputNumber label={`${getCostLabel} (Weekend)`} placeholder="0" $fullWidth />
                </Col>
                <Col span={12}>
                  <InputNumber label="Price (Weekend)" placeholder="0" $fullWidth />
                </Col>
                <Col span={12}>
                  <InputNumber label="Price (Weekday)" placeholder="0" $fullWidth />
                </Col>
                <Col span={12}>
                  <InputNumber label="Whole Page (Weekday, B&amp;W)" placeholder="0" $fullWidth />
                </Col>
                <Col span={12}>
                  <InputNumber label="Whole Page (Weekend, B&amp;W)" placeholder="0" $fullWidth />
                </Col>
                <Col span={12}>
                  <InputNumber label="Whole Page (Weekday, 1 Color)" placeholder="0" $fullWidth />
                </Col>
                <Col span={12}>
                  <InputNumber label="Whole Page (Weekend, 1 Color)" placeholder="0" $fullWidth />
                </Col>
                <Col span={12}>
                  <InputNumber label="Whole Page (Weekday, 2 Colors)" placeholder="0" $fullWidth />
                </Col>
                <Col span={12}>
                  <InputNumber label="Whole Page (Weekend, 2 Colors)" placeholder="0" $fullWidth />
                </Col>
                <Col span={12}>
                  <InputNumber label="Whole Page (Weekday, 3 Colors)" placeholder="0" $fullWidth />
                </Col>
                <Col span={12}>
                  <InputNumber label="Whole Page (Weekend, 3 Colors)" placeholder="0" $fullWidth />
                </Col>
              </Row>
            </Col>
          </Row>
        </CostCard>
      )} */}

      {form.values.media_source_name === 'Online News' && (
        <CostCard title="Cost">
          <Row>
            <Col span={16}>
              <Row gutter={[16, 32]}>
                <Col span={12}>
                  <InputNumber label={`Publication Cost (Weekday)`} placeholder="0" $fullWidth />
                </Col>
                <Col span={12}>
                  <InputNumber label={`Circulation (Weekend)`} placeholder="0" $fullWidth />
                </Col>
              </Row>
            </Col>
          </Row>
        </CostCard>
      )}

      {form.values.media_source_name === 'Broadsheet' && (
        <PagesCard title="Pages">
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Row gutter={[4, 8]}>
                {getPublicationPages.length > 0 &&
                  getPublicationPages.map((pub, index) => (
                    <Col span={4} key={index}>
                      <ButtonSetContainer>
                        <SetText>{pub.multiplier_name}</SetText>
                        <Button $fullwidth onClick={() => handleModalOpen(index)} variant="outlined">
                          {pub.multiplier_value}
                        </Button>
                      </ButtonSetContainer>
                    </Col>
                  ))}
              </Row>
            </Col>
            <Col span={24}>
              <Button onClick={openNewPageModal}>Add New Page</Button>
            </Col>
          </Row>
        </PagesCard>
      )}

      {isMediaSourceAudioAndVideo && (
        <ButtonContainer>
          <Button onClick={toggleMultiplier}>{showMultiplier ? 'Close Multiplier' : 'Add Multiplier'}</Button>
        </ButtonContainer>
      )}

      {/* {showMultiplier && (
        <MultiplierCard title="Multiplier">
          <Row gutter={[16, 32]}>
            <Col span={8}>
              <Input
                type="text"
                $fullWidth
                placeholder="Enter Publication Name"
                label="Name"
                isRequired
                name="mutlipliers.multiplier_name"
                onChange={form.handleChange}
                value={form.values.mutlipliers?.multiplier_name}
                errorMessage={getErrorMessage(
                  form.touched.mutlipliers?.multiplier_name,
                  form.errors.mutlipliers?.multiplier_name,
                )}
              />
            </Col>
            <Col span={8}>
              <InputNumber
                min={0}
                $fullWidth
                placeholder="0"
                label="Percentage"
                isRequired
                name="mutlipliers.multiplier_value"
                onChange={(value) => form.setFieldValue('mutlipliers.multiplier_value', value)}
                value={form.values.mutlipliers?.multiplier_value}
                errorMessage={getErrorMessage(
                  form.touched.mutlipliers?.multiplier_value,
                  form.errors.mutlipliers?.multiplier_value,
                )}
              />
            </Col>
            <Col span={8}>
              <Input
                type="text"
                $fullWidth
                placeholder="Enter Publication Name"
                label="Name"
                isRequired
                name="mutlipliers.multiplier_media_type"
                onChange={form.handleChange}
                value={form.values.mutlipliers?.multiplier_media_type}
                errorMessage={getErrorMessage(
                  form.touched.mutlipliers?.multiplier_media_type,
                  form.errors.mutlipliers?.multiplier_media_type,
                )}
              />
            </Col>
          </Row>
        </MultiplierCard>
      )} */}

      {/* {publication && (
        <HistoryCard title="History">
          <Row>
            <Col span={6}>
              <HistoryTextTop>Created By</HistoryTextTop>
              <HistoryBottomContainer>
                <CalendarOutlined className="__icon" />
                <HistoryTextBottom>{publication.created_by || 'N/A'}</HistoryTextBottom>
              </HistoryBottomContainer>
            </Col>
            <Col span={6}>
              <HistoryTextTop>Date Created</HistoryTextTop>
              <HistoryBottomContainer>
                <CalendarOutlined className="__icon" />
                <HistoryTextBottom>{publication.date_created || 'N/A'}</HistoryTextBottom>
              </HistoryBottomContainer>
            </Col>
            <Col span={6}>
              <HistoryTextTop>Updated By</HistoryTextTop>
              <HistoryBottomContainer>
                <UserOutlined className="__icon" />
                <HistoryTextBottom>{publication.updated_by || 'N/A'} </HistoryTextBottom>
              </HistoryBottomContainer>
            </Col>
            <Col span={6}>
              <HistoryTextTop>Date Updated</HistoryTextTop>
              <HistoryBottomContainer>
                <CalendarOutlined className="__icon" />
                <HistoryTextBottom>{publication.date_updated || 'N/A'}</HistoryTextBottom>
              </HistoryBottomContainer>
            </Col>
          </Row>
        </HistoryCard>
      )} */}

      {/* {isMediaSourceAudioAndVideo && (
        <TimeslotCard title="Time Slot">
          <Row gutter={[16, 32]}>
            <Col span={8}>
              <Input
                placeholder="Enter Publication Name"
                label="Time Slot Name"
                isRequired
                $fullWidth
                name="time_slots.timeslot_name"
                onChange={form.handleChange}
                value={form.values?.time_slots?.timeslot_name}
                errorMessage={getErrorMessage(
                  form.touched.time_slots?.timeslot_name,
                  form.errors.time_slots?.timeslot_name,
                )}
              />
            </Col>
            <Col span={8}>
              <FormControl>
                <FormLabel>Duration</FormLabel>
                <DurationRangePicker size="large" />
              </FormControl>
            </Col>
            <Col span={8}>
              <InputNumber placeholder="0" label="Cost" $fullWidth />
            </Col>
          </Row>
        </TimeslotCard>
      )} */}

      {publication && (
        <MetricsCard title="Metrics (Done / Error)">
          <FilterContainer>
            <FilterFormControl>
              <HorizontalLabel>Frequency</HorizontalLabel>
              <Input placeholder="2" />
            </FilterFormControl>
            <FilterFormControl>
              <HorizontalLabel>Date</HorizontalLabel>
              <DatePicker size="large" style={{ width: 204 }} />
            </FilterFormControl>
            <Button>Send</Button>
          </FilterContainer>
          <TableContainer>
            <Table data={[]} columns={METRICS_COLUMN()} />
          </TableContainer>
          <MetricsStatusContainer>
            <Table data={[]} columns={METRIC_STATUS_COLUMN()} />
          </MetricsStatusContainer>
        </MetricsCard>
      )}

      <ButtonContainer>
        <Space size="middle">
          <Button variant="outlined" onClick={() => history.goBack()}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => form.handleSubmit()} loading={isLoading}>
            {publication ? 'Update' : 'Save'}
          </Button>
        </Space>
      </ButtonContainer>
    </PublicationWrapper>
  );
};

export default PublicationView;
