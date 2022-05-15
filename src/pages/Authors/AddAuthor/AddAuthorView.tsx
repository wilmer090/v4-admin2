import { Col, Row, Space, Spin, Checkbox } from 'antd';
import { DefaultOptionType } from 'antd/lib/select';
import EditUserDetail from 'components/EditUserDetail/EditUserDetail';
import { useFormik } from 'formik';
import {
  ButtonContainer,
  DetailsCard,
  FormControl,
  FormLabel,
  TableContainer,
} from 'pages/Publications/Publication/Publication.styled';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { IAuthorRequestPayload } from 'shared/interfaces/IAuthor';
import { IUpload } from 'shared/interfaces/utils/IUpload';
import { Button, Card, Input, Upload } from 'shared/theme/elements';
//import InputNumber from 'shared/theme/elements/Input/InputNumber';
import { Select } from 'shared/theme/elements/Select';
import Table from 'shared/theme/elements/Table/Table';
import { getErrorMessage } from 'shared/utils/getErrorMessage';
import { socialMediasToArray } from 'shared/utils/socialMediasToArray';
import * as yup from 'yup';
import moment from 'moment';

type Props = {
  handleSubmit: (values: any, logo: any) => void;
  author: any;
  childAuthor: any;
  publication?: DefaultOptionType[];
  isLoading: boolean;
  isPublicationLoading: boolean;
  isChildAuthorLoading: boolean;
  filter: IAuthorRequestPayload;
  setPublicationSearch: (value: string) => void;
  handlePageChange: (page: number) => void;
  setFilter: React.Dispatch<React.SetStateAction<Partial<IAuthorRequestPayload>>>;
  handlePageSize: (num: number) => void;
};

const AddAuthorView: React.FC<Props> = ({
  handleSubmit,
  setPublicationSearch,
  // handlePageChange,
  // handlePageSize,
  setFilter,
  author,
  childAuthor: SuggestedChildAuthorData,
  publication,
  isLoading,
  filter,
  isPublicationLoading,
}) => {
  const [logo, setLogo] = useState<IUpload>(null);
  const [selectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const [selectedChildAuhor, setSelectedChildAuthor] = useState<any>([]);
  const [removeChildAuhor, setRemoveChildAuhor] = useState<any>([]);
  const [inputSearch, setInputSearch] = useState<string>('');
  const [suggestedChildAuthor, setSuggestedChildAuthor] = useState<any>([]);
  const handleFile = (file: Blob) => {
    setLogo(file);
  };
  const now = moment().format('MMM DD h:mm A');

  const initialValues = {
    _id: author ? author?.data[0]?._id : '',
    author_name: author ? author?.data[0]?.author_name : '',
    author_publications: author
      ? author?.data[0]?.author_publications.map((item) => {
          return { _id: item._id.$oid, publication_name: item.publication_name };
        })
      : [],
    author_publications_id: author
      ? author?.data[0]?.author_publications.map((publication) => publication._id.$oid)
      : [],
    author_tag: 'Author',

    contact_information: {
      contact_phone: author ? author?.data[0]?.contact_information?.contact_phone : [],
      contact_email: author ? author?.data[0]?.contact_information?.contact_email : [],
    },

    country: author
      ? author?.data[0]?.country
          .toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ')
      : '',
    social_media_links: author ? socialMediasToArray(author?.data[0]?.social_media_links) : [],
    children_authors: author ? author?.data[0]?.children_authors : [],
    is_verified: author ? author?.data[0]?.is_verified : false,
    is_parent: author ? author?.data[0]?.is_verified : false,
    articles_count: author ? author?.data[0]?.articles_count : 0,
    updated_by: '619f0998a834a290ce4ef6fe',
    created_by: '619f0998a834a290ce4ef6fe',
  };
  const validationSchema = yup.object().shape({
    author_name: yup.string().required(`Author's name is required`),
    country: yup.string().required(`Country is required`).default('Philippines'),
    author_publications_id: yup.array().required(`Select at least one publication`),
  });
  const history = useHistory();

  const form = useFormik({
    initialValues,
    onSubmit: (values) => {
      handleSubmit(values, logo);
    },
    validationSchema: validationSchema,
  });

  const handleWebsiteChange = (value: any) => {
    form.setFieldValue('social_media_links', value);
  };
  const handlePublicationChange = (value: any) => {
    form.setFieldValue('author_publications_id', value);
  };
  const handleVerifiedChange = (value: any) => {
    if (value[0]) {
      form.setFieldValue('is_verified', value[0]);
      form.setFieldValue('is_parent', value[0]);
    } else {
      form.setFieldValue('is_verified', false);
      form.setFieldValue('is_parent', false);
    }
  };
  const handleAddChildAuthor = (data) => {
    form.values.children_authors = [...form.values.children_authors, data];
    setSuggestedChildAuthor(suggestedChildAuthor.filter((item) => item._id != data._id));
  };

  const handleRemoveChildAuthor = (data) => {
    const newSet = form.values.children_authors.filter((item) => item._id != data._id);
    form.values.children_authors = [...newSet];
    setSuggestedChildAuthor([...suggestedChildAuthor, data]);
  };

  const childAuthorSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any) => {
      //console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setSelectedChildAuthor([...selectedRows]);
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  const removeAuthorSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any) => {
      //console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setRemoveChildAuhor([...selectedRows]);
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.author_name === 'Disabled User', // Column configuration not to be checked
      name: record.author_name,
    }),
  };

  //search child author

  const onAuthorNameSearch = (value: string) => {
    setFilter({ ...filter, author_name: value });
    // handlePageChange(1);
  };
  useEffect(() => {
    if (SuggestedChildAuthorData) {
      const existingChild = form.values.children_authors.map((author) => author._id.$oid);
      const newSet = SuggestedChildAuthorData.filter((author) => existingChild.indexOf(author._id.$oid) === -1);
      setSuggestedChildAuthor(newSet);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SuggestedChildAuthorData]);

  return (
    <>
      <DetailsCard title="Details">
        <Row gutter={[16, 32]}>
          {author && (
            <>
              <Col span={8}>
                <EditUserDetail
                  label="Modified By"
                  date={author?.date_updated}
                  name={`${
                    author.updated_by ? `${author?.updated_by?.first_name} ${author?.updated_by?.last_name}` : ''
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
              placeholder="Enter name here"
              label="Author's Full Name"
              isRequired
              id="author_name"
              name="author_name"
              onChange={form.handleChange}
              value={form.values.author_name}
              errorMessage={getErrorMessage(form.touched.author_name, form.errors.author_name)}
            />
          </Col>
          <Col span={8}>
            {author && (
              //<Checkbox>Verified</Checkbox>
              <Checkbox.Group
                options={[{ label: 'Verified', value: true }]}
                style={{ marginTop: 30 }}
                defaultValue={[form.values.is_verified]}
                onChange={handleVerifiedChange}
              />
            )}
          </Col>
          <Col span={8}></Col>

          <Col span={8}>
            <Input
              type="text"
              $fullWidth
              placeholder="Enter email here"
              label="Email Address"
              name="contact_information.contact_email"
              onChange={form.handleChange}
              value={form.values.contact_information.contact_email}
            />
          </Col>
          <Col span={8}>
            <Input
              $fullWidth
              label="Mobile Number"
              placeholder="Enter number here"
              name="contact_information.contact_phone"
              onChange={form.handleChange}
              value={form.values.contact_information.contact_phone}
            />
          </Col>

          <Col span={8}>
            <Select
              $fullWidth
              label="Country"
              isRequired
              items={[
                { value: 'philippines', id: 'Philippines' },
                { value: 'singapore', id: 'Singapore' },
              ]}
              onChange={(value) => form.setFieldValue('country', value)}
              value={form.values.country || 'Philippines'}
              errorMessage={getErrorMessage(form.touched.country, form.errors.country)}
            />
          </Col>

          <Col span={24}>
            <Select
              mode="multiple"
              onChange={handlePublicationChange}
              onSearch={setPublicationSearch}
              options={publication}
              value={form.values.author_publications_id}
              loading={isPublicationLoading}
              notFoundContent={isPublicationLoading ? <Spin size="small" /> : null}
              filterOption={false}
              autoClearSearchValue
              showSearch
              label="Publications"
              $fullWidth
              isRequired
              errorMessage={getErrorMessage(form.touched.author_publications_id, form.errors.author_publications_id)}
            ></Select>
          </Col>
          <Col span={24}>
            <Select
              mode="tags"
              items={[]}
              onChange={(value) => handleWebsiteChange(value)}
              value={form.values.social_media_links}
              label="Social Media links"
              $fullWidth
            />
          </Col>
          <Col span={8}>
            <Input
              type="text"
              $fullWidth
              label="Parent Total Articles"
              isRequired
              name="articles_count"
              value={`${form.values.articles_count} Article/s as of ${now}`}
              style={{ color: 'black' }}
              disabled
            />
          </Col>
          <Col span={8}></Col>
          <Col span={8}></Col>

          {author?.data[0]?.is_verified && (
            <>
              <Col span={12}>
                <Card
                  title="Child Author"
                  $fullHeight
                  extra={removeChildAuhor?.length > 0 ? <Button>Remove Selected</Button> : ''}
                >
                  <Input
                    type="search"
                    allowClear
                    // value={inputSearch}
                    // onChange={(e) => setInputSearch(e.target.value)}
                    // onSearch={(value) => onAuthorNameSearch(value)}
                  />
                  <TableContainer>
                    <Table
                      loading={isLoading}
                      rowSelection={{
                        type: selectionType,
                        ...removeAuthorSelection,
                      }}
                      data={form.values.children_authors}
                      columns={[
                        { key: 'author_name', title: 'Author Name' },
                        {
                          key: 'articles_count',
                          title: 'Article Count',
                          sorter: (a, b) => a.articles_count - b.articles_count,
                          render: (_, data) =>
                            data.articles_count > 1
                              ? `${data.articles_count} Articles`
                              : `${data.articles_count} Article`,
                        },
                        {
                          key: 'action',
                          title: '',
                          render: (_, data) => (
                            <Button variant="outlined" onClick={() => handleRemoveChildAuthor(data)}>
                              Remove
                            </Button>
                          ),
                        },
                      ]}
                      pagination={{
                        // current: SuggestedChildAuthorData?.meta?.pagination?.current_page || 1,
                        // total: SuggestedChildAuthorData?.meta?.pagination?.total || 0,
                        // onChange: (newPage: number, currentPageSize: number) => {
                        //   handlePageChange(newPage);
                        //   handlePageSize(currentPageSize);
                        // },
                        // showTotal: (total, range) => getShowTotal(total, range),
                        position: ['bottomRight'],
                      }}
                    />
                  </TableContainer>
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  title="Suggested Child Author"
                  $fullHeight
                  extra={selectedChildAuhor?.length > 0 ? <Button>Move Selected</Button> : ''}
                >
                  <Input
                    type="search"
                    allowClear
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)}
                    onSearch={(value) => onAuthorNameSearch(value)}
                  />
                  <TableContainer>
                    <Table
                      loading={isLoading}
                      rowSelection={{
                        type: selectionType,
                        ...childAuthorSelection,
                      }}
                      data={suggestedChildAuthor}
                      columns={[
                        { key: 'author_name', title: 'Author Name' },
                        {
                          key: 'articles_count',
                          title: 'Article Count',
                          sorter: (a, b) => a.articles_count - b.aritcles_count,
                          render: (_, data) =>
                            data.articles_count > 1
                              ? `${data.articles_count} Articles`
                              : `${data.articles_count} Article`,
                        },
                        {
                          key: 'action',
                          title: '',
                          render: (_, data) => (
                            <Button variant="outlined" onClick={() => handleAddChildAuthor(data)}>
                              Add
                            </Button>
                          ),
                        },
                      ]}
                      pagination={{
                        position: ['bottomRight'],
                      }}
                    />
                  </TableContainer>
                </Card>
              </Col>
            </>
          )}

          <Col span={24}>
            <FormControl>
              <FormLabel>Add Avatar</FormLabel>
              <Upload onChange={handleFile} imageSrc={author?.data[0]?.author_profile_pic} accept="image/png/jpg" />
            </FormControl>
          </Col>
        </Row>
      </DetailsCard>
      <ButtonContainer>
        <Space size="middle">
          <Button variant="outlined" onClick={() => history.goBack()}>
            Cancel
          </Button>

          <Button variant="primary" onClick={() => form.handleSubmit()} loading={isLoading}>
            {author ? 'Update' : 'Save'}
          </Button>
        </Space>
      </ButtonContainer>
    </>
  );
};

export default AddAuthorView;
