import { Col, Row, Space, Spin } from 'antd';
import { DefaultOptionType } from 'antd/lib/select';
import { ListWrapper, TableContainer } from 'pages/Publications/List/List.styled';
import { FC, useMemo, useState } from 'react';
import { ROUTES } from 'shared/constants/ROUTES';
import { IAVAutomation, IAVAutomationResponsePayload } from 'shared/interfaces/IAVAutomation';
import { ITableData } from 'shared/interfaces/utils/ITable';
import { Button, Card, Link, Select } from 'shared/theme/elements';
import Table from 'shared/theme/elements/Table/Table';

import { LIST_COLUMN } from './ListColumn';

interface Props {
  data?: IAVAutomationResponsePayload;
  isLoading?: boolean;
  handlePageSize: (size: number) => void;
  handlePageChange: (page: number) => void;
  onDelete: (
    id: string,
    channel: Pick<IAVAutomation, 'channel_details'>['channel_details'],
    program: Pick<IAVAutomation, 'program_details'>['program_details'],
  ) => void;
  onEdit: (id: string) => void;
  onFilter: (channelId?: string, programId?: string) => void;
  onFilterClear: () => void;
  onChannelSearch: (keyword: string) => void;
  onProgramSearch: (keyword: string) => void;
  channelData?: { data?: DefaultOptionType[]; isLoading: boolean };
  programData?: { data?: DefaultOptionType[]; isLoading: boolean };
}

const ListView: FC<Props> = ({
  data,
  isLoading,
  handlePageChange,
  handlePageSize,
  onDelete,
  onEdit,
  onFilter,
  onFilterClear,
  channelData,
  programData,
  onChannelSearch,
  onProgramSearch,
}) => {
  const [channel, setChannel] = useState<string>();
  const [program, setProgram] = useState<string>();

  const handleFilterSelectChange = (filter: string, value: string) => {
    switch (filter) {
      case 'channel':
        setChannel(value);
        break;
      case 'program':
        setProgram(value);
        break;
    }
  };

  const handleFilterSelectClear = () => {
    onFilterClear();
    setChannel(undefined);
    setProgram(undefined);
  };

  const tableData = useMemo(() => {
    const results = data?.data ? data.data : [];

    return results.map((result: IAVAutomation) => {
      return {
        ...result,
        key: result._id,
      };
    });
  }, [data]) as ITableData[];

  return (
    <ListWrapper>
      <Card $fullHeight>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* <Select items={MEDIA_SOURCES} placeholder="Media Source" /> */}
          <div style={{ width: '600px' }}>
            <Row gutter={[16, 36]}>
              <Col span={9}>
                <Select
                  placeHolder="Filter by Channel"
                  options={channelData?.data}
                  onChange={(value: any) => handleFilterSelectChange('channel', value)}
                  onSearch={onChannelSearch}
                  filterOption={false}
                  value={channel}
                  showSearch
                  allowClear
                  autoClearSearchValue
                  loading={channelData?.isLoading}
                  notFoundContent={channelData?.isLoading ? <Spin size="small" /> : null}
                  $fullWidth
                ></Select>
              </Col>
              <Col span={9}>
                <Select
                  placeHolder="Filter by Program"
                  options={programData?.data}
                  onChange={(value: any) => handleFilterSelectChange('program', value)}
                  onSearch={onProgramSearch}
                  value={program}
                  showSearch
                  allowClear
                  filterOption={false}
                  autoClearSearchValue
                  loading={programData?.isLoading}
                  notFoundContent={programData?.isLoading ? <Spin size="small" /> : null}
                  $fullWidth
                ></Select>
              </Col>
              <Col span={6}>
                <Space>
                  <Button onClick={() => onFilter(channel, program)}>Apply</Button>
                  <Button variant="outlined" onClick={() => handleFilterSelectClear()}>
                    Clear
                  </Button>
                </Space>
              </Col>
            </Row>
          </div>
          <div>
            <Space>
              {/* <Input type="search" allowClear /> */}
              <Link type="link" to={ROUTES.TV.PROGRAMSETUP.CREATE}>
                Create New Program Setup
              </Link>
            </Space>
          </div>
        </div>
        <TableContainer>
          <Table
            loading={isLoading}
            data={tableData}
            columns={LIST_COLUMN({ handleEdit: onEdit, handleDelete: onDelete })}
            pagination={{
              current: data?.meta?.pagination?.current_page,
              total: data?.meta?.pagination?.total_pages || 0,
              onChange: (newPage: number, currentPageSize: number) => {
                handlePageChange(newPage);
                handlePageSize(currentPageSize);
              },
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} results`,
              position: ['topRight', 'bottomRight'],
            }}
          />
        </TableContainer>
      </Card>
    </ListWrapper>
  );
};

export default ListView;
