import { Space } from 'antd';
import { FilterContainer } from 'pages/Online/List/List.styled';
import { ListWrapper, TableContainer } from 'pages/Publications/List/List.styled';
import { ButtonContainer } from 'pages/Publications/Publication/Publication.styled';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { MEDIA_SOURCES } from 'shared/constants/MEDIA_SOURCES';
import { ROUTES } from 'shared/constants/ROUTES';
import { Button, Card, Input } from 'shared/theme/elements';
import { DatePicker } from 'shared/theme/elements/DatePicker';
import { DateRange } from 'shared/theme/elements/DateRange';
import { Select } from 'shared/theme/elements/Select';
import Table from 'shared/theme/elements/Table/Table';

import UnverifiedAds_Columns from './UnverifiedAdsColumn';

type Props = {
  data: any;
  // isLoading: boolean;
  handlePageChange: (page: number) => void;
  page: number;
  handlePageSize: (num: number) => void;
  pageSize: number;
};

const UnverifiedAdsView: React.FC<Props> = ({ data, handlePageChange, page, handlePageSize }) => {
  const { push } = useHistory();

  // const tableData = useMemo(() => {
  //   const results = data?.authors ? data.authors : [];
  //   return results.map((result: IAuthor) => {
  //     return {
  //       key: result?._id,
  //       author_name: result?.author_name,
  //       profile_pic: result?.author_profile_pic,
  //       contact_information: result?.contact_information?.contact_email,
  //       social_media_links: result?.social_media_links,
  //       author_tag: result?.author_tag,
  //       verified: result?.is_verified,
  //     };
  //   });
  // }, [data?.authors]);

  const handleEdit = (id: string) => {
    push(ROUTES.PRINT.EDIT, {
      id,
    });
  };

  return (
    <ListWrapper>
      <Card $fullHeight>
        <FilterContainer>
          <Input placeholder="Search title and content" $fullWidth />
          <ButtonContainer>
            <Space size="middle">
              <DateRange />
              <DatePicker />
              <Select items={MEDIA_SOURCES} placeholder="Media Source" />
            </Space>
          </ButtonContainer>
        </FilterContainer>
        <ButtonContainer>
          <Space size="middle">
            <Button variant="primary">Search</Button>
            <Button variant="outlined">Clear</Button>
          </Space>
        </ButtonContainer>
        <TableContainer>
          <Table
            // loading={isLoading}
            data={data}
            columns={UnverifiedAds_Columns({ handleEdit })}
            pagination={{
              current: page,
              total: data?.number_of_pages || 0,
              onChange: (newPage: number, currentPageSize: number) => {
                handlePageChange(newPage);
                handlePageSize(currentPageSize);
              },
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
            }}
          />
        </TableContainer>
      </Card>
    </ListWrapper>
  );
};

export default UnverifiedAdsView;
