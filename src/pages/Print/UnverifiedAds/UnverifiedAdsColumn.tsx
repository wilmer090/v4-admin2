import { Space } from 'antd';
import { ITableColumn } from 'shared/interfaces/utils/ITable';
import { Button } from 'shared/theme/elements';

type Props = {
  handleEdit: (id: string) => void;
};
const UnverifiedAds_Columns = ({ handleEdit }: Props): ITableColumn[] => [
  {
    key: 'title',
    title: 'Title',
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
  { key: 'authors', title: 'Authors' },
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

export default UnverifiedAds_Columns;
