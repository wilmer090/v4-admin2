import { Space } from 'antd';
import { IAVAutomation } from 'shared/interfaces/IAVAutomation';
import { Button } from 'shared/theme/elements';
import { getFormattedDate } from 'shared/utils/getFormattedDate';

interface Props {
  handleEdit: (id: string) => void;
  handleDelete: (
    id: string,
    channel: Pick<IAVAutomation, 'channel_details'>['channel_details'],
    program: Pick<IAVAutomation, 'program_details'>['program_details'],
  ) => void;
}

export const LIST_COLUMN = ({ handleEdit, handleDelete }: Props) => [
  {
    key: 'channel',
    title: 'Channel',
    render: (_, data: IAVAutomation) => data.channel_details.channel_name,
  },
  {
    key: 'program',
    title: 'Program',
    render: (_, data: IAVAutomation) => data.program_details.program_name,
  },

  {
    key: 'anchors',
    title: 'Anchors/Reporters',
    render: (_, data: IAVAutomation) => {
      const anchors = data.anchors.map((anchor) => anchor.author_name);
      return anchors.join(', ');
    },
  },
  {
    key: 'dateCreated',
    title: 'Date Created',
    render: (_, data: IAVAutomation) => getFormattedDate(new Date(data.date_created || '')),
  },
  {
    key: 'dateUpdated',
    title: 'Date Updated',
    render: (_, data: IAVAutomation) => getFormattedDate(new Date(data.date_created || '')),
  },
  {
    key: 'actions',
    title: 'Actions',
    render: (_, { _id, channel_details, program_details }: IAVAutomation) => {
      return (
        <Space>
          <Button onClick={() => handleEdit(_id)} key="edit">
            Edit
          </Button>
          <Button variant="outlined" onClick={() => handleDelete(_id, channel_details, program_details)} key="delete">
            Delete
          </Button>
        </Space>
      );
    },
  },
];
