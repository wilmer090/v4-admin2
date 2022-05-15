import { Button as AntButton, Col, Row, Space, Spin, Typography as AntTypography } from 'antd';
import { DefaultOptionType } from 'antd/lib/select';
import { DropdownCopy } from 'components';
import EditUserDetail from 'components/EditUserDetail/EditUserDetail';
import { RegionSelect } from 'components/RegionSelect';
import { RectPixelPoints } from 'components/RegionSelect/RegionSelect';
import { format, isEqual, isValid, parseISO } from 'date-fns';
import { ButtonContainer, DetailsCard } from 'pages/Publications/Publication/Publication.styled';
import { useEffect, useState } from 'react';
import { IAVAutiomationUser, IAVAutomation, IAVAutomationCreatePayload } from 'shared/interfaces/IAVAutomation';
import { Button, Input, Radio, Select, TimePicker, Typography, Upload } from 'shared/theme/elements';
import { InputLabel, LabelWrapper, RequiredLabel } from 'shared/theme/elements/Input/Input.styled';
import InputNumber from 'shared/theme/elements/Input/InputNumber';
import { getErrorMessage } from 'shared/utils/getErrorMessage';

import { useProgramSetupForm } from './ProgramSetupForm';

const { Text: AntText } = AntTypography;
const { Text } = Typography;

interface Props {
  isLoading?: boolean;
  timeSlots: Array<{ id: string; name: string }>;
  onSubmit: (values: IAVAutomationCreatePayload, image?: File) => void;
  automationData?: IAVAutomation;
  channelData?: DefaultOptionType[];
  programData?: DefaultOptionType[];
  authorData?: DefaultOptionType[];
  isAuthorLoading?: boolean;
  isChannelLoading?: boolean;
  isProgramLoading?: boolean;
  onChannelSelect: (channelId: string) => void;
  onProgramSelect: (programId: string) => void;
  onAuthorSearch: (keyword: string) => void;
  onChannelSearch: (keyword: string) => void;
  onProgramSearch: (keyword: string) => void;
  isUpdate?: boolean;
}

const ProgramSetupView = ({
  timeSlots,
  onSubmit,
  automationData,
  channelData,
  programData,
  authorData,
  onChannelSelect,
  onProgramSelect,
  onAuthorSearch,
  onChannelSearch,
  onProgramSearch,
  isLoading,
  isAuthorLoading,
  isChannelLoading,
  isProgramLoading,
  isUpdate,
}: Props) => {
  const [regionSelectDefaultValue, setRegionSelectDefaultValue] = useState<RectPixelPoints | undefined>();
  const [screenshot, setScreenshot] = useState<{ url?: string; file?: File }>({
    url: undefined,
    file: undefined,
  });

  const { form } = useProgramSetupForm({ screenshot, onSubmit, automationData });

  /**
   *  This will handle daily schedule change
   * @param timeslot form property name
   * @param value date
   */
  const handleTimeslotChange = async (timeslot: string, value: string) => {
    if (value === null) {
      form.setFieldValue(timeslot, null);
      return;
    }

    const time = format(new Date(value), '1990-01-01 HH:mm:ss');

    form.setFieldValue(timeslot, time);
  };

  /**
   *  This will set the 4 rect coordinates on screenshot
   * @param regions x,y,width,height
   * @param rect x and y rect coordinates
   */
  const onTitleSelect = (regions, rect) => {
    const { topLeft, topRight, bottomLeft, bottomRight } = rect;

    form.setFieldValue('setup.top_left_up', topLeft.length > 0 ? topLeft.join(':') : '');
    form.setFieldValue('setup.top_left_down', bottomLeft.length > 0 ? bottomLeft.join(':') : '');
    form.setFieldValue('setup.top_right_up', topRight.length > 0 ? topRight.join(':') : '');
    form.setFieldValue('setup.top_right_down', bottomRight.length > 0 ? bottomRight.join(':') : '');
  };

  const handleUploadScreenshot = (file: any, url: string) => {
    setScreenshot({
      file,
      url,
    });
  };

  const handleChannelChange = (value: any) => {
    form.resetForm();
    form.setFieldValue('program_obj', '');
    form.setFieldValue('channel_obj', value);
    setScreenshot({ url: undefined, file: undefined });

    if (onChannelSelect) onChannelSelect(value);
  };

  const handleProgramChange = (value: any) => {
    const channel = form.values.channel_obj;
    form.resetForm();
    form.setFieldValue('channel_obj', channel);
    form.setFieldValue('program_obj', value);
    setScreenshot({ url: undefined, file: undefined });

    if (onProgramSelect) onProgramSelect(value);
  };

  const handleDailyScheduleCopy = (origin, destination) => {
    const originValue = {
      timeslot_start: form.values.daily_schedule[origin].timeslot_start,
      timeslot_end: form.values.daily_schedule[origin].timeslot_end,
    };

    for (const day in destination) {
      form.setFieldValue(`daily_schedule.${destination[day]}`, originValue);
    }
  };

  const initRegionSelectDefaultValue = () => {
    let rect: RectPixelPoints | undefined = undefined;

    if (automationData && automationData.setup.top_left_up !== '') {
      rect = {
        topLeft: automationData.setup.top_left_up?.split(':').map((value) => parseFloat(value)),
        bottomLeft: automationData.setup.top_left_down?.split(':').map((value) => parseFloat(value)),
        topRight: automationData.setup.top_right_up?.split(':').map((value) => parseFloat(value)),
        bottomRight: automationData.setup.top_right_down?.split(':').map((value) => parseFloat(value)),
      } as RectPixelPoints;
    }

    setRegionSelectDefaultValue(rect);
  };

  const handleAuthorChange = (value: any) => {
    form.setFieldValue('anchors', value);
  };

  const getUserName = (user?: IAVAutiomationUser) => {
    return user ? `${user.first_name} ${user.last_name}` : '';
  };

  const initDailyScheduleValues = () => {
    const schedule = automationData?.daily_schedule;

    if (schedule) {
      for (const day in schedule) {
        if (isEqual(parseISO(schedule[day].timeslot_start), parseISO(schedule[day].timeslot_end))) {
          form.setFieldValue(`daily_schedule.${day}.timeslot_start`, null);
          form.setFieldValue(`daily_schedule.${day}.timeslot_end`, null);
        }
      }
    }
  };

  useEffect(() => {
    initRegionSelectDefaultValue();
    initDailyScheduleValues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [automationData]);

  return (
    <>
      <Space direction="vertical" size="middle">
        {/* Details */}
        <DetailsCard title="Details">
          <Row gutter={[16, 36]} justify="center">
            {isUpdate && (
              <>
                <Col span={8}>
                  <EditUserDetail
                    label="Created by"
                    date={new Date(automationData?.date_created || '')}
                    name={getUserName(automationData?.created_by?.[0])}
                  ></EditUserDetail>
                </Col>
                <Col span={8}>
                  {automationData?.updated_by?.[0] && (
                    <EditUserDetail
                      label="Modified by"
                      date={new Date(automationData?.date_updated || '')}
                      name={getUserName(automationData?.updated_by?.[0])}
                    ></EditUserDetail>
                  )}
                </Col>
                <Col span={8}></Col>
              </>
            )}

            <Col span={8}>
              <Select
                label="Channel"
                placeHolder="Select Channel"
                size="middle"
                value={form.values.channel_obj}
                options={channelData}
                onChange={handleChannelChange}
                errorMessage={getErrorMessage(form.touched.channel_obj, form.errors.channel_obj)}
                disabled={isLoading || automationData ? true : false}
                onSearch={onChannelSearch}
                filterOption={false}
                showSearch
                autoClearSearchValue
                loading={isChannelLoading}
                notFoundContent={isChannelLoading ? <Spin size="small" /> : null}
                isRequired
                $fullWidth
              ></Select>
            </Col>
            <Col span={8}>
              <Select
                label="Program"
                placeHolder="Select Program"
                size="middle"
                value={form.values.program_obj}
                options={programData}
                onChange={handleProgramChange}
                errorMessage={getErrorMessage(form.touched.program_obj, form.errors.program_obj)}
                disabled={isLoading || automationData ? true : false}
                onSearch={onProgramSearch}
                showSearch
                filterOption={false}
                autoClearSearchValue
                loading={isProgramLoading}
                notFoundContent={isProgramLoading ? <Spin size="small" /> : null}
                isRequired
                $fullWidth
              ></Select>
            </Col>
            <Col span={8}></Col>

            <Col span={16}>
              <Select
                mode="tags"
                label="Anchor/Reporter"
                size="middle"
                showSearch
                value={form.values.anchors}
                options={authorData}
                onChange={handleAuthorChange}
                disabled={!form.values.program_obj || isLoading}
                onSearch={onAuthorSearch}
                filterOption={false}
                autoClearSearchValue
                loading={isAuthorLoading}
                notFoundContent={isAuthorLoading ? <Spin size="small" /> : null}
                isRequired
                $fullWidth
              ></Select>
            </Col>
            <Col span={8}></Col>

            <Col span={8}>
              <Input
                type="text"
                placeholder="example"
                id="youtube_scrape_details.youtube_url"
                name="youtube_scrape_details.youtube_url"
                label="Youtube Channel URL"
                size="middle"
                value={form.values.youtube_scrape_details.youtube_url}
                onChange={form.handleChange}
                errorMessage={getErrorMessage(
                  form.touched.youtube_scrape_details?.youtube_url,
                  form.errors.youtube_scrape_details?.youtube_url,
                )}
                disabled={!form.values.program_obj || isLoading}
                $fullWidth
              ></Input>
            </Col>
            <Col span={8}>
              <Input
                type="text"
                placeholder="example"
                id="facebook_scraper_details.facebook_url"
                name="facebook_scraper_details.facebook_url"
                label="Facebook Page URL"
                size="middle"
                value={form.values.facebook_scraper_details.facebook_url}
                onChange={form.handleChange}
                errorMessage={getErrorMessage(
                  form.touched.facebook_scraper_details?.facebook_url,
                  form.errors.facebook_scraper_details?.facebook_url,
                )}
                disabled={!form.values.program_obj || isLoading}
                $fullWidth
              ></Input>
            </Col>
            <Col span={8}>
              <Input
                type="text"
                placeholder="example"
                id="local_recording_details.local_recording_path"
                name="local_recording_details.local_recording_path"
                label="Local Recording File Path"
                size="middle"
                value={form.values.local_recording_details.local_recording_path}
                onChange={form.handleChange}
                errorMessage={getErrorMessage(
                  form.touched.local_recording_details?.local_recording_path,
                  form.errors?.local_recording_details?.local_recording_path,
                )}
                disabled={!form.values.program_obj || isLoading}
                isRequired
                $fullWidth
              ></Input>
            </Col>

            <Col span={8}>
              <Input
                type="text"
                label="Machine IP Address"
                size="middle"
                id="setup.machine_ip_address"
                name="setup.machine_ip_address"
                value={form.values.setup.machine_ip_address}
                onChange={form.handleChange}
                errorMessage={getErrorMessage(
                  form.touched.setup?.machine_ip_address,
                  form.errors.setup?.machine_ip_address,
                )}
                disabled
                isRequired
                $fullWidth
              ></Input>
            </Col>
            <Col span={8}>
              <Input
                label="OCR Language"
                size="middle"
                id="setup.ocr_lang"
                name="setup.ocr_lang"
                value={form.values.setup.ocr_lang}
                onChange={form.handleChange}
                errorMessage={getErrorMessage(form.touched.setup?.ocr_lang, form.errors.setup?.ocr_lang)}
                disabled
                isRequired
                $fullWidth
              ></Input>
            </Col>
            <Col span={8}>
              <InputNumber
                label="Minimum article length (seconds)"
                size="middle"
                id="setup.minimum_article_length_in_seconds"
                name="setup.minimum_article_length_in_seconds"
                value={form.values.setup.minimum_article_length_in_seconds}
                onChange={(value) => form.setFieldValue('setup.minimum_article_length_in_seconds', value)}
                errorMessage={getErrorMessage(
                  form.touched.setup?.minimum_article_length_in_seconds,
                  form.errors.setup?.minimum_article_length_in_seconds,
                )}
                min={0}
                disabled
                isRequired
                $fullWidth
              ></InputNumber>
            </Col>
          </Row>
        </DetailsCard>

        {/* Time Slot */}
        <DetailsCard title="Time Slot">
          <Row gutter={[16, 32]} align="bottom">
            {/* Time Slots */}
            {timeSlots.map(({ id, name }) => (
              <Col span={24} key={id}>
                <Row gutter={[16, 32]} align="bottom">
                  <Col span={3}>
                    <Text $fontWeight="bold">{name}</Text>
                  </Col>
                  <Col span={8}>
                    <TimePicker
                      format="h:mm a"
                      size="middle"
                      label="Time Slot (Start)"
                      showNow={false}
                      name={`daily_schedule.${id}.timeslot_start`}
                      value={
                        isValid(parseISO(form.values.daily_schedule[id].timeslot_start))
                          ? parseISO(form.values.daily_schedule[id].timeslot_start)
                          : ''
                      }
                      onChange={(value) => handleTimeslotChange(`daily_schedule.${id}.timeslot_start`, value)}
                      disabled={!form.values.program_obj || isLoading}
                      $fullWidth
                    ></TimePicker>
                  </Col>
                  <Col span={8}>
                    <TimePicker
                      format="h:mm a"
                      size="middle"
                      label="Time Slot (End)"
                      showNow={false}
                      name={`daily_schedule.${id}.timeslot_end`}
                      value={
                        isValid(parseISO(form.values.daily_schedule[id].timeslot_end))
                          ? parseISO(form.values.daily_schedule[id].timeslot_end)
                          : ''
                      }
                      onChange={(value) => handleTimeslotChange(`daily_schedule.${id}.timeslot_end`, value)}
                      disabled={!form.values.program_obj || isLoading}
                      $fullWidth
                    ></TimePicker>
                  </Col>
                  <Col span={5}>
                    <DropdownCopy
                      items={timeSlots}
                      current={id}
                      onCopy={handleDailyScheduleCopy}
                      disabled={!form.values.program_obj || isLoading}
                    >
                      <AntButton disabled={!form.values.program_obj || isLoading}> Copy </AntButton>
                    </DropdownCopy>
                  </Col>
                </Row>
              </Col>
            ))}

            {/* Status */}
            <Col>
              <Radio
                label="Status"
                items={['Active', 'Inactive']}
                defaultValue={form.values.setup.on_off === 1 ? 'Active' : 'Inactive'}
                errorMessage={getErrorMessage(form.touched.setup?.on_off, form.errors.setup?.on_off)}
                onChange={(value) => {
                  form.setFieldValue('setup.on_off', value === 'Active' ? 1 : 0);
                }}
                disabled={!form.values.program_obj || isLoading}
                isRequired
              ></Radio>
            </Col>
          </Row>
        </DetailsCard>

        {/* Title Location */}
        <DetailsCard title="Title Location">
          <Row gutter={[16, 36]}>
            <Col span={24}>
              <LabelWrapper>
                <RequiredLabel>*</RequiredLabel>
                <InputLabel>
                  Screenshot <AntText type="secondary">(1280x720)</AntText>
                </InputLabel>
              </LabelWrapper>

              <Upload onChange={handleUploadScreenshot} disabled={!form.values.program_obj || isLoading}></Upload>
            </Col>
            <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
              <RegionSelect
                onSave={onTitleSelect}
                disabled={screenshot.file || automationData ? false : true}
                defaultValue={regionSelectDefaultValue}
              >
                {screenshot.file || isUpdate ? (
                  <img src={screenshot.url || automationData?.screenshot_url} width={1280} height={720}></img>
                ) : (
                  <></>
                )}
              </RegionSelect>
            </Col>

            {(screenshot.file || isUpdate) && (
              <Col span={24}>
                <Row gutter={16}>
                  <Col span={6}>
                    <LabelWrapper>
                      <InputLabel>Top Left</InputLabel>
                    </LabelWrapper>
                    <div style={{ height: '34px', width: '100%', padding: '4px 11px', border: '1px solid #d9d9d9' }}>
                      {form.values.setup.top_left_up}
                    </div>
                  </Col>
                  <Col span={6}>
                    <LabelWrapper>
                      <InputLabel>Bottom Left</InputLabel>
                    </LabelWrapper>
                    <div style={{ height: '34px', width: '100%', padding: '4px 11px', border: '1px solid #d9d9d9' }}>
                      {form.values.setup.top_left_down}
                    </div>
                  </Col>
                  <Col span={6}>
                    <LabelWrapper>
                      <InputLabel>Top Right</InputLabel>
                    </LabelWrapper>
                    <div style={{ height: '34px', width: '100%', padding: '4px 11px', border: '1px solid #d9d9d9' }}>
                      {form.values.setup.top_right_up}
                    </div>
                  </Col>
                  <Col span={6}>
                    <LabelWrapper>
                      <InputLabel>Bottom Right</InputLabel>
                    </LabelWrapper>
                    <div style={{ height: '34px', width: '100%', padding: '4px 11px', border: '1px solid #d9d9d9' }}>
                      {form.values.setup.top_right_down}
                    </div>
                  </Col>
                </Row>
              </Col>
            )}
          </Row>
        </DetailsCard>

        <ButtonContainer>
          <Space size="middle">
            <Button variant="outlined" onClick={() => history.back()}>
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => form.handleSubmit()}
              disabled={!form.values.program_obj}
              loading={isLoading}
            >
              {automationData ? 'Update' : 'Save'}
            </Button>
          </Space>
        </ButtonContainer>
      </Space>
    </>
  );
};

export default ProgramSetupView;
