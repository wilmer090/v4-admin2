import { Space } from 'antd';
import { ITableColumn } from 'shared/interfaces/utils/ITable';
import { Button } from 'shared/theme/elements';

type Props = {
  handleEdit: (id: string) => void;
};
const PrintAds_Columns = ({ handleEdit }: Props): ITableColumn[] => [
  {
    key: 'title',
    title: 'Title',
    sorter: (a, b) => (a > b ? 1 : -1),
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    // onFilter: (a, b) => console.log(a, b),
    // render: (_, data) => (data?.profile_pic ? <Logo src={data?.profile_pic} /> : <CircleLogo />),
  },
  {
    key: 'type',
    title: 'Type',
    // render: (_, data) => {
    //   return (
    //     <>
    //       <span>{data.author_name} </span>
    //       <span>{data?.verified && <img src={check} />}</span>
    //     </>
    //   );
    // },
  },
  { key: 'upload_date', title: 'Upload Date' },
  { key: 'date_published', title: 'Date Published' },
  { key: 'publication', title: 'Publication' },

  {
    key: 'action',
    title: 'Action',
    render: (_, data) => {
      return (
        <Space size="small">
          <Button onClick={() => handleEdit(data?.key)}>Edit</Button>
        </Space>
      );
    },
  },
];

export default PrintAds_Columns;
