import { Space } from 'antd';
import { ITableColumn } from 'shared/interfaces/utils/ITable';
import { Button } from 'shared/theme/elements';

type Props = {
  handleEdit: (id: string) => void;
};
const RadioClip_Columns = ({ handleEdit }: Props): ITableColumn[] => [
  {
    key: 'program_station',
    title: 'Program Station',
    width: 250,
    render: (_, data) => {
      return <span>{data.program_station}</span>;
    },
  },
  {
    key: 'station',
    title: 'station',
    render: (_, data) => {
      return (
        <>
          <span style={{ width: 350 }}>{data.station} </span>
        </>
      );
    },
  },
  { key: 'segment_type', title: 'Segment Type', width: 100 },
  { key: 'segment_length', title: 'Segment Length', width: 100 },

  {
    key: 'upload_date',
    title: 'Upload Date',
    width: '150px',
  },
  {
    key: 'date_published',
    title: 'Date Published',
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

export default RadioClip_Columns;
