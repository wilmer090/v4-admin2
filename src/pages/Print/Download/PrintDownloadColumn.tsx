import { Space } from 'antd';
import { ITableColumn } from 'shared/interfaces/utils/ITable';
import { Button } from 'shared/theme/elements';

type Props = {
  handleEdit: (id: string) => void;
};
const Download_Columns = ({ handleEdit }: Props): ITableColumn[] => [
  {
    key: 'client',
    title: 'Client',
    // render: (_, data) => (data?.profile_pic ? <Logo src={data?.profile_pic} /> : <CircleLogo />),
  },

  {
    key: 'action',
    title: 'Action',
    align: 'center',
    render: (_, data) => {
      return (
        <Space size="small">
          <Button onClick={() => handleEdit(data?.key)}>Download</Button>
        </Space>
      );
    },
  },
];

export default Download_Columns;
