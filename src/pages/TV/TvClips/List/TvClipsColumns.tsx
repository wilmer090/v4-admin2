import { Space } from 'antd';
import { ITableColumn } from 'shared/interfaces/utils/ITable';
import { Button } from 'shared/theme/elements';

type Props = {
  handleEdit: (id: string) => void;
};
const TvAds_Columns = ({ handleEdit }: Props): ITableColumn[] => [
  {
    key: 'program',
    title: 'Program',
    width: 200,
    render: (_, data) => {
      return <span>{data.program}</span>;
    },
  },
  {
    key: 'channel',
    title: 'Channel',
    width: 100,
    render: (_, data) => {
      return (
        <>
          <span>{data.channel} </span>
        </>
      );
    },
  },
  { key: 'segment_type', title: 'Segment Type', width: 100 },
  { key: 'segment_length', title: 'Segment Length', width: 100 },

  {
    key: 'upload_date',
    title: 'Upload Date',
    width: 120,
  },
  {
    key: 'date_published',
    title: 'Publication Date',
    width: 120,
  },
  {
    key: 'action',
    title: 'Action',
    width: 150,
    render: (_, data) => {
      return (
        <Space>
          <Button onClick={() => handleEdit(data?.key)}>Edit</Button>
          <Button onClick={() => handleEdit(data?.key)}>Duplicate</Button>
          <Button variant="outlined">Delete</Button>
        </Space>
      );
    },
  },
];

export default TvAds_Columns;
