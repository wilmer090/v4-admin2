import { Space } from 'antd';
import confirm from 'antd/lib/modal/confirm';
import React, { useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'shared/constants/ROUTES';
import { IMediaSourceResponsePayload } from 'shared/interfaces/IMediaSource';
import { IDeletePublicationPayload, IPublication, IPublicationResponsePayload } from 'shared/interfaces/IPublication';
import { ITableData } from 'shared/interfaces/utils/ITable';
import { Card, Input, Link } from 'shared/theme/elements';
import Table from 'shared/theme/elements/Table/Table';
import { getShowTotal } from 'shared/utils/getShowTotal';

import { ListWrapper, RightContainer, TableContainer, TopContainer } from './List.styled';
import { LIST_COLUMN } from './ListColumn';
import { IPublisherFilter } from './ListContainer';

export type SortValue = 'publisher-name-asc' | 'publisher-name-desc';

type Props = {
  data: IPublicationResponsePayload | undefined;
  mediaSources: IMediaSourceResponsePayload | undefined;
  isLoading: boolean;
  handlePageChange: (page: number) => void;
  page: number;
  handlePageSize: (num: number) => void;
  pageSize: number;
  filter: IPublisherFilter;
  setFilter: React.Dispatch<React.SetStateAction<IPublisherFilter>>;
  handleDeletePublication: (payload: IDeletePublicationPayload) => void;
};
const ListView: React.FC<Props> = ({
  data,
  isLoading,
  handlePageChange,
  handlePageSize,
  mediaSources,
  filter,
  setFilter,
  handleDeletePublication,
}) => {
  const { push } = useHistory();
  const [showSocialFilter, setShowSocialFilter] = useState<boolean>(false);
  const [showMediaSourceFilter, setShowMediaSourceFilter] = useState<boolean>(false);
  const [showWebsiteSearch, setShowWebsiteSearch] = useState<boolean>(false);
  const [sort, setSort] = useState<SortValue | ''>('');
  const [inputSearch, setInputSearch] = useState<string>('');
  const [websiteSearchInput, setWebsiteSearchInput] = useState<string>('');
  const [mediaSourcesFilter, setMediaSourcesFilter] = useState<string[]>([]);
  const [socialMediaFilter, setSocialMediaFilter] = useState<string[]>([]);
  const tableData = useMemo(() => {
    const results = data?.data ? data.data : [];
    return results.map((result: IPublication) => {
      return {
        ...result,
        key: result._id,
      };
    });
  }, [data?.data]) as ITableData[];

  const handleEdit = (id: string) => {
    push(ROUTES.PUBLICATIONS.LIST.EDIT, {
      id,
    });
  };

  const onPublisherNameSearch = (value: string) => {
    setFilter({ ...filter, publisher_name: value });
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

  const handleMediaSourceFilter = () => {
    setFilter({ ...filter, media_sources: mediaSourcesFilter });
    setShowMediaSourceFilter(false);
    handlePageChange(1);
  };

  const handleWebsiteSearch = (value: string) => {
    setFilter({ ...filter, website_urls: value ? [value] : undefined });
    setShowWebsiteSearch(false);
    handlePageChange(1);
  };

  const handleSocialMediaFilter = () => {
    setFilter({ ...filter, social_media_links: socialMediaFilter });
    setShowSocialFilter(false);
    handlePageChange(1);
  };

  const handleOnDelete = (publication: IPublication) => {
    confirm({
      centered: true,
      title: 'Delete Publication',
      content: `Are you sure you want to delete '${publication.publisher_name}'`,
      onOk: async () => handleDeletePublication({ _id: publication._id }),
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

  return (
    <ListWrapper>
      <Card $fullHeight>
        <TopContainer>
          <RightContainer>
            <Space>
              <Space size={0}>
                <Input
                  type="search"
                  placeholder="Search Here.."
                  hasSearchButton
                  allowClear
                  value={inputSearch}
                  onChange={(e) => setInputSearch(e.target.value)}
                  onSearch={(value) => onPublisherNameSearch(value)}
                />
              </Space>
              <Link type="link" to={ROUTES.PUBLICATIONS.LIST.CREATE}>
                Create New Publication
              </Link>
            </Space>
          </RightContainer>
        </TopContainer>

        <TableContainer>
          <Table
            loading={isLoading}
            data={tableData}
            columns={LIST_COLUMN({
              handleEdit,
              showSocialFilter,
              showMediaSourceFilter,
              setShowMediaSourceFilter,
              setShowSocialFilter,
              showWebsiteSearch,
              setShowWebsiteSearch,
              mediaSources,
              sort,
              handleSort,
              setMediaSourcesFilter,
              handleMediaSourceFilter,
              setSocialMediaFilter,
              handleSocialMediaFilter,
              handleWebsiteSearch,
              websiteSearchInput,
              setWebsiteSearchInput,
              handleOnDelete,
              filter,
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

export default ListView;
