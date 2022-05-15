import { Image, Space } from 'antd';
import { ITableColumn } from 'shared/interfaces/utils/ITable';
import { Button } from 'shared/theme/elements';
import styled from 'styled-components';

export const Logo = styled(Image)`
  height: 42px;
  width: 42px;
  object-fit: cover;
  border-radius: 50%;
`;
export const CircleLogo = styled.div`
  height: 42px;
  width: 42px;
  border-radius: 50%;
  background-color: #c4c4c4;
`;

export const SocialLink = styled.a<{ hasLink: boolean }>`
  .__icon {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${({ hasLink }) => !hasLink && 'grey'} !important;
    &.facebook {
      fill: #395185;
    }
    &.instagram {
      fill: #ff006b;
    }
    &.youtube {
      fill: #ff0000;
    }
    &.linkedIn {
      fill: #0a66c2;
    }
    &.twitter {
      fill: #55acee;
    }
  }
`;
type Props = {
  handleEdit: (id: string) => void;
};
const PrintMedia_Columns = ({ handleEdit }: Props): ITableColumn[] => [
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

export default PrintMedia_Columns;
