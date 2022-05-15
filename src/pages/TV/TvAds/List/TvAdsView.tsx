import { Col, Row, Space } from 'antd';
import { FilterContainer } from 'pages/Online/List/List.styled';
import {
  LeftContainer,
  ListWrapper,
  RightContainer,
  TableContainer,
  TopContainer,
} from 'pages/Publications/List/List.styled';
import { ButtonContainer } from 'pages/Publications/Publication/Publication.styled';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { MEDIA_SOURCES } from 'shared/constants/MEDIA_SOURCES';
import { ROUTES } from 'shared/constants/ROUTES';
import { Button, Card, Input, Link } from 'shared/theme/elements';
import { DatePicker } from 'shared/theme/elements/DatePicker';
import { DateRange } from 'shared/theme/elements/DateRange';
import { Select } from 'shared/theme/elements/Select';
import Table from 'shared/theme/elements/Table/Table';

import TvAds_Columns from './TvAdsColumns';

type Props = {
  data: any;
  // isLoading: boolean;
  handlePageChange: (page: number) => void;
  page: number;
  handlePageSize: (num: number) => void;
  pageSize: number;
};
const TvAdsView: React.FC<Props> = ({ data, handlePageChange, page, handlePageSize }) => {
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
    push(ROUTES.TV.TVADS.CREATE, {
      id,
    });
  };

  return (
    <ListWrapper>
      <Card $fullHeight>
        <TopContainer>
          <LeftContainer></LeftContainer>
          <RightContainer>
            <Space>
              <Link type="link" to={ROUTES.TV.TVADS.CREATE}>
                Create TV Ad
              </Link>
            </Space>
          </RightContainer>
        </TopContainer>
        <FilterContainer>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Input placeholder="Search title and content" $fullWidth />
            </Col>
          </Row>
          <ButtonContainer>
            <Row gutter={16}>
              <Col span={4}>
                <DateRange />
              </Col>
              <Col span={4}>
                <DatePicker />
              </Col>
              <Col span={4}>
                <Select placeHolder="All Clients" items={[]} $fullWidth />
              </Col>
              <Col span={4}>
                <Select placeHolder="Publication" items={MEDIA_SOURCES} $fullWidth />
              </Col>
            </Row>
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
            columns={TvAds_Columns({ handleEdit })}
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

export default TvAdsView;
