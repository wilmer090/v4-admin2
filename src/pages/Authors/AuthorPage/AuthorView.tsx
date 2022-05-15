import { Modal, Space } from 'antd';
import { DefaultOptionType } from 'antd/lib/select';
import { LeftContainer, ListWrapper, RightContainer, TableContainer } from 'pages/Publications/List/List.styled';
import React, { useMemo, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'shared/constants/ROUTES';
import { IAuthor, IAuthorRequestPayload } from 'shared/interfaces/IAuthor';
import { useAuthorService } from 'shared/services/authorService';
//import { IAuthor, IAuthorResponsePayload } from 'shared/interfaces/IAuthor';
import { Alert, Card, Input, Link } from 'shared/theme/elements';
import { Radio } from 'shared/theme/elements/Radio';
import Table from 'shared/theme/elements/Table/Table';
import { getShowTotal } from 'shared/utils/getShowTotal';
import { TopContainer } from './Author.styled';

import Author_Columns from './AuthorColumns';

export type SortValue = 'author-name-asc' | 'author-name-desc';

type Props = {
  data: any;
  isLoading: boolean;
  handlePageChange: (page: number) => void;
  page: number;
  handlePageSize: (num: number) => void;
  pageSize?: number;
  filter: IAuthorRequestPayload;
  setFilter: React.Dispatch<React.SetStateAction<Partial<IAuthorRequestPayload>>>;
  publicationSearchInput: string;
  setPublicationSearchInput: React.Dispatch<React.SetStateAction<string>>;
  publicationsOptions: DefaultOptionType[] | undefined;
  isPublicationLoading: boolean;
};
const { deleteAuthor } = useAuthorService();
const AuthorView: React.FC<Props> = ({
  data,
  isLoading,
  handlePageChange,
  handlePageSize,
  filter,
  setFilter,
  setPublicationSearchInput,
  publicationsOptions,
  isPublicationLoading,
}) => {
  const { deleteMutation } = deleteAuthor();
  const [showSocialFilter, setShowSocialFilter] = useState<boolean>(false);
  const [showPublicationSearch, setShowPublicationSearch] = useState<boolean>(false);
  const [inputSearch, setInputSearch] = useState<string>('');
  const [sort, setSort] = useState<SortValue | ''>('');
  const [socialMediaFilter, setSocialMediaFilter] = useState<string[]>([]);
  const [publicationText, setPublicationText] = useState<string>('');

  const { confirm } = Modal;
  const { push } = useHistory();
  const queryClient = useQueryClient();

  const tableData = useMemo(() => {
    const results = data ? data.data : [];
    return results?.map((result: IAuthor) => {
      return {
        key: result?._id,
        author_name: result?.author_name,
        profile_pic: result?.author_profile_pic,
        publications:
          result?.author_publications?.length > 0
            ? result.author_publications.map((item) => item.publication_name).join(', ')
            : '',
        social_media_links: result?.social_media_links,
        author_tag: result?.author_tag,
        verified: result?.is_verified,
      };
    });
  }, [data]);

  const onAuthorNameSearch = (value: string) => {
    setFilter({ ...filter, author_name: value });
    handlePageChange(1);
  };

  const handleSort = (sortBy: SortValue) => {
    if (sort === sortBy) {
      setSort('');
      setFilter({ ...filter, sort: '' });
    } else {
      setSort(sortBy);
      setFilter({ ...filter, sort: sortBy });
    }
    handlePageChange(1);
  };

  const handleIsVerified = (value: string) => {
    const isVerified = value === 'All' ? undefined : value === 'Verified' ? true : false;
    setFilter({ ...filter, is_verified: isVerified, is_parent: isVerified });
    handlePageChange(1);
  };

  const handleSocialMediaFilter = () => {
    setFilter({ ...filter, social_media_links: socialMediaFilter });
    setShowSocialFilter(false);
    handlePageChange(1);
  };

  const handlePublicationSearch = (value: string) => {
    setFilter({ ...filter, author_publications: value ? [value] : undefined });
    if (!value) {
      setPublicationSearchInput('');
    }

    setPublicationText(value);
    setShowPublicationSearch(false);
    handlePageChange(1);
  };

  const deleteSetup = (id: string) => {
    return new Promise((resolve, reject) => {
      deleteMutation.mutateAsync(
        { _id: id },
        {
          onSuccess: () => {
            resolve(true);
            Alert.success('Author Deleted!');
            queryClient.invalidateQueries('authors');
          },
          onError: (error: any) => {
            reject();
            Alert.error(error.response.data.server_response);
          },
        },
      );
    });
  };

  const handleEdit = (id: string) => {
    push(ROUTES.AUTHORS.LIST.EDIT, {
      id,
    });
  };

  const handleDelete = (id: string, name: string) => {
    confirm({
      centered: true,
      title: 'Delete Author',
      content: (
        <div>
          <p>Are you sure you want to delete this?</p>
          <p style={{ marginBottom: '0.2rem' }}>Author: {name}</p>
        </div>
      ),
      onOk: async () => await deleteSetup(id),
      okButtonProps: {
        danger: true,
        size: 'large',
        style: { borderRadius: '4px', fontSize: '14px' },
      },
      cancelButtonProps: {
        size: 'large',
        style: { borderRadius: '4px', fontSize: '14px' },
      },
      okText: 'Delete',
    });
  };

  // const authorIsVerified = (params) => {
  //   if (params === 'All') {
  //     setFilter({ ...filter, isVerified: '' });
  //   }
  //   if (params === 'Verified') {
  //     setFilter({ ...filter, isVerified: true });
  //   }
  //   if (params === 'Unverified') {
  //     setFilter({ ...filter, isVerified: false });
  //   }
  // };
  // const onAuthorNameSearch = () => {
  //   setFilter({ ...filter, author_name: inputSearch });
  //   handlePageChange(1);
  // };

  // const handleOnClick = (value: string) => {
  //   authorIsVerified(value);
  // };

  return (
    <ListWrapper>
      <Card $fullHeight>
        <TopContainer>
          <LeftContainer>
            <Radio
              items={['All', 'Verified', 'Unverified']}
              defaultValue="All"
              type={'button'}
              btnStyle={'solid'}
              $fullWidth
              onChange={(value) => handleIsVerified(value)}
            />
          </LeftContainer>
          <RightContainer>
            <Space>
              <Input
                type="search"
                allowClear
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
                onSearch={(value) => onAuthorNameSearch(value)}
                // hasSearchButton
              />
              <Link type="link" to={ROUTES.AUTHORS.LIST.CREATE}>
                Create New Author
              </Link>
            </Space>
          </RightContainer>
        </TopContainer>
        <TableContainer>
          <Table
            loading={isLoading}
            data={tableData}
            columns={Author_Columns({
              handleEdit,
              handleDelete,
              handleSort,
              sort,
              showSocialFilter,
              socialMediaFilter,
              setShowSocialFilter,
              setSocialMediaFilter,
              handleSocialMediaFilter,
              showPublicationSearch,
              setShowPublicationSearch,
              setPublicationSearchInput,
              handlePublicationSearch,
              publicationsOptions,
              publicationText,
              isPublicationLoading,
            })}
            pagination={{
              current: data?.meta?.pagination?.current_page || 1,
              total: data?.meta?.pagination?.total || 0,
              onChange: (newPage: number, currentPageSize: number) => {
                handlePageChange(newPage);
                handlePageSize(currentPageSize);
              },
              showTotal: (total, range) => getShowTotal(total, range),
              position: ['topRight', 'bottomRight'],
            }}
          />
        </TableContainer>
      </Card>
    </ListWrapper>
  );
};

export default AuthorView;
