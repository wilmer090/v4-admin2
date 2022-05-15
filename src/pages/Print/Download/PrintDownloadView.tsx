import { Space } from 'antd';
import { ListWrapper, RightContainer, TableContainer, TopContainer } from 'pages/Publications/List/List.styled';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'shared/constants/ROUTES';
import { Card, Input } from 'shared/theme/elements';
import { DateRange } from 'shared/theme/elements/DateRange';
import Table from 'shared/theme/elements/Table/Table';

import Download_Columns from './PrintDownloadColumn';

type Props = {
  data: any;
  // isLoading: boolean;
  handlePageChange: (page: number) => void;
  page: number;
  handlePageSize: (num: number) => void;
  pageSize: number;
};

const PrintDownloadView: React.FC<Props> = ({ data, handlePageChange, page, handlePageSize }) => {
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
    push(ROUTES.ONLINE.EDIT, {
      id,
    });
  };

  return (
    <ListWrapper>
      <Card $fullHeight>
        <TopContainer>
          <DateRange />
          <RightContainer>
            <Space>
              <Input type="search" placeholder="Search Client" allowClear />
            </Space>
          </RightContainer>
        </TopContainer>

        <TableContainer>
          <Table
            // loading={isLoading}
            data={data}
            columns={Download_Columns({ handleEdit })}
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

export default PrintDownloadView;
