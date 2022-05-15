import { CaretDownFilled, CaretUpFilled, FilterFilled, SearchOutlined } from '@ant-design/icons';
import { Avatar, Checkbox, Dropdown, Image, Menu, Space, Spin } from 'antd';
import { DefaultOptionType } from 'antd/lib/select';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { SOCIAL_LINKS_FILTER } from 'shared/constants/SOCIAL_LINKS_FILTER';
import { IAuthor } from 'shared/interfaces/IAuthor';
import { ITableColumn } from 'shared/interfaces/utils/ITable';
import { Button, Select } from 'shared/theme/elements';
import { getInitials } from 'shared/utils/getInitials';
import styled from 'styled-components';

import check from '../../../assets/check_circle.png';
import { SortValue } from './AuthorView';

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

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .__icon {
    cursor: pointer;
  }
`;

export const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LetterAvatar = styled(Avatar)`
  height: 42px;
  width: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryColor};
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

type AuthorNameSortMenuProps = {
  handleSort: (sortBy: SortValue) => void;
};
const AuthorNameSortMenu = ({ handleSort }: AuthorNameSortMenuProps) => (
  <Menu>
    <Menu.Item disabled>Author Score (Ascending)</Menu.Item>
    <Menu.Item disabled>Author Score (Descending)</Menu.Item>
    <Menu.Item onClick={() => handleSort('author-name-asc')}>A-Z (Alphabetical Order)</Menu.Item>
    <Menu.Item onClick={() => handleSort('author-name-desc')}>Z-A (Reverse Order) </Menu.Item>
  </Menu>
);

type SocialMediaFilterMenuProps = {
  setSocialMediaFilter: React.Dispatch<React.SetStateAction<string[]>>;
  handleSocialMediaFilter: () => void;
};
const SocialMediaFilterMenu = ({ setSocialMediaFilter, handleSocialMediaFilter }: SocialMediaFilterMenuProps) => {
  return (
    <Menu>
      <Checkbox.Group onChange={(value) => setSocialMediaFilter(value as string[])}>
        {SOCIAL_LINKS_FILTER.map((social) => (
          <Menu.Item key={social.value}>
            <Checkbox value={social.value}>{social.id}</Checkbox>
          </Menu.Item>
        ))}
      </Checkbox.Group>
      <Menu.Divider key="divider" />
      <Menu.Item key="action">
        <Button $fullwidth onClick={() => handleSocialMediaFilter()}>
          Apply
        </Button>
      </Menu.Item>
    </Menu>
  );
};

type PublicationSearchMenuProps = {
  handlePublicationSearch: (value: string) => void;
  setPublicationSearchInput: React.Dispatch<React.SetStateAction<string>>;
  publicationsOptions: DefaultOptionType[] | undefined;
  publicationText: string;
  isPublicationLoading: boolean;
};

const PublicationSearchMenu = ({
  handlePublicationSearch,
  setPublicationSearchInput,
  publicationsOptions,
  publicationText,
  isPublicationLoading,
}: PublicationSearchMenuProps) => {
  return (
    <Menu>
      <Menu.Item key="menu-search">
        <Select
          placeHolder="Select Publication"
          size="large"
          autoFocus
          onClick={(e) => e.stopPropagation()}
          style={{ width: 300 }}
          value={publicationText}
          options={publicationsOptions}
          onChange={(value) => {
            handlePublicationSearch(value as string);
          }}
          onSearch={(value) => {
            // setPublicationText('');
            setPublicationSearchInput(value as string);
          }}
          showSearch
          filterOption={false}
          allowClear
          autoClearSearchValue
          loading={isPublicationLoading}
          notFoundContent={isPublicationLoading ? <Spin size="small" /> : null}
        />
      </Menu.Item>
    </Menu>
  );
};

type Props = {
  handleEdit: (id: string) => void;
  handleDelete: (id: string, name: string) => void;
  handleSort: (sortBy: SortValue) => void;
  sort: SortValue | '';
  showSocialFilter: boolean;
  socialMediaFilter: string[];
  setShowSocialFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setSocialMediaFilter: React.Dispatch<React.SetStateAction<string[]>>;
  handleSocialMediaFilter: () => void;
  showPublicationSearch: boolean;
  setShowPublicationSearch: React.Dispatch<React.SetStateAction<boolean>>;
  handlePublicationSearch: (value: string) => void;
  setPublicationSearchInput: React.Dispatch<React.SetStateAction<string>>;
  publicationsOptions: DefaultOptionType[] | undefined;
  publicationText: string;
  isPublicationLoading: boolean;
};

const Author_Columns = ({
  handleEdit,
  handleDelete,
  handleSort,
  sort,
  showSocialFilter,
  socialMediaFilter,
  setShowSocialFilter,
  setSocialMediaFilter,
  handleSocialMediaFilter,
  showPublicationSearch,
  setShowPublicationSearch,
  handlePublicationSearch,
  setPublicationSearchInput,
  publicationsOptions,
  publicationText,
  isPublicationLoading,
}: Props): ITableColumn[] => [
  {
    key: 'profile_pic',
    title: 'Avatar',
    render: (_, { author_name, profile_pic }: IAuthor) => {
      const getInitialLetters = getInitials(author_name || '');
      return profile_pic ? <Logo src={profile_pic} /> : <LetterAvatar>{getInitialLetters}</LetterAvatar>;
    },
  },
  {
    key: 'author_name',
    title: (
      <HeadContainer>
        <span>Author Name</span>
        <Space>
          <Dropdown overlay={AuthorNameSortMenu({ handleSort })} trigger={['click']} placement="bottom">
            <SortContainer>
              <CaretUpFilled
                height={5}
                style={{ fontSize: 12, lineHeight: 0, color: sort === 'author-name-asc' ? '#1890FF' : '' }}
                className="__icon"
                color="red"
              />
              <CaretDownFilled
                height={5}
                style={{ fontSize: 12, lineHeight: 0, color: sort === 'author-name-desc' ? '#1890FF' : '' }}
                className="__icon"
              />
            </SortContainer>
          </Dropdown>
        </Space>
      </HeadContainer>
    ),
    render: (_, data) => {
      return (
        <>
          <span>{data.author_name} </span>
          <span>{data?.verified && <img src={check} />}</span>
        </>
      );
    },
  },
  {
    key: 'publications',
    title: (
      <HeadContainer>
        <span>Publications</span>
        <Dropdown
          overlay={PublicationSearchMenu({
            handlePublicationSearch,
            setPublicationSearchInput,
            publicationsOptions,
            isPublicationLoading,
            publicationText,
          })}
          trigger={['click']}
          visible={showPublicationSearch}
          onVisibleChange={setShowPublicationSearch}
          placement="bottom"
        >
          <SearchOutlined style={{ color: publicationText ? '#1890FF' : '' }} />
        </Dropdown>
      </HeadContainer>
    ),
  },
  { key: 'author_tag', title: 'Author Tag' },

  {
    key: 'social_media_links',
    title: (
      <HeadContainer>
        <span>Social Media Links</span>
        <Space>
          <Dropdown
            overlay={SocialMediaFilterMenu({ setSocialMediaFilter, handleSocialMediaFilter })}
            trigger={['click']}
            visible={showSocialFilter}
            onVisibleChange={setShowSocialFilter}
            placement="bottom"
          >
            <FilterFilled style={{ color: socialMediaFilter.length > 0 ? '#1890FF' : '' }} />
          </Dropdown>
        </Space>
      </HeadContainer>
    ),
    render: (_, { social_media_links }) => {
      return (
        <Space size="middle">
          <SocialLink
            href={social_media_links?.facebook?.profile_url || '#'}
            hasLink={!!social_media_links?.facebook?.profile_url}
          >
            <AiFillFacebook className="__icon facebook" />
          </SocialLink>
          <SocialLink
            href={social_media_links?.twitter?.profile_url || '#'}
            hasLink={!!social_media_links?.twitter?.profile_url}
          >
            <AiFillTwitterCircle className="__icon twitter" />
          </SocialLink>
          <SocialLink
            href={social_media_links?.instagram?.profile_url || '#'}
            hasLink={!!social_media_links?.instagram?.profile_url}
          >
            <AiFillInstagram className="__icon instagram" />
          </SocialLink>
          <SocialLink
            href={social_media_links?.youtube?.profile_url || '#'}
            hasLink={!!social_media_links?.youtube?.profile_url}
          >
            <AiFillYoutube className="__icon youtube" />
          </SocialLink>
          <SocialLink
            href={social_media_links?.linkenin?.profile_url || '#'}
            hasLink={!!social_media_links?.linkenin?.profile_url}
          >
            <AiFillLinkedin className="__icon linkedIn" />
          </SocialLink>
        </Space>
      );
    },
  },
  {
    key: 'action',
    title: 'Actions',
    render: (_, data) => {
      return (
        <>
          {/* <ButtonContainer> */}
          <Space direction="horizontal">
            <Button onClick={() => handleEdit(data?.key)}>Edit</Button>
            <Button variant="outlined" onClick={() => handleDelete(data?.key, data?.author_name)}>
              Delete
            </Button>
          </Space>
          {/* </ButtonContainer> */}
        </>
      );
    },
  },
];

export default Author_Columns;
