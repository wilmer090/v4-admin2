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
    width: '350px',
    render: (_, data) => {
      return <span>{data.program}</span>;
    },
  },
  {
    key: 'channel',
    title: 'Channel',
    render: (_, data) => {
      return (
        <>
          <span style={{ width: 350 }}>{data.channel} </span>
        </>
      );
    },
  },
  { key: 'segment_type', title: 'Segment Type' },
  { key: 'segment_length', title: 'Segment Length' },

  {
    key: 'upload_date',
    title: 'Upload Date',
    width: '150px',
  },
  {
    key: 'date_published',
    title: 'Publication Date',
  },
  {
    key: 'action',
    title: 'Action',
    render: (_, data) => {
      return (
        <Space>
          <Button onClick={() => handleEdit(data?.key)}>Edit</Button>
          <Button variant="outlined">Delete</Button>
        </Space>
      );
    },
  },
];

export default TvAds_Columns;
