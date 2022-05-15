import { CaretDownFilled, CaretUpFilled, FilterFilled, SearchOutlined } from '@ant-design/icons';
import { Avatar, Checkbox, Dropdown, Image, Menu, Space } from 'antd';
import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
import { SOCIAL_LINKS_FILTER } from 'shared/constants/SOCIAL_LINKS_FILTER';
import { IMediaSource, IMediaSourceResponsePayload } from 'shared/interfaces/IMediaSource';
import { IPublication } from 'shared/interfaces/IPublication';
import { ITableColumn } from 'shared/interfaces/utils/ITable';
import { Button, Input } from 'shared/theme/elements';
import { getInitials } from 'shared/utils/getInitials';
import styled from 'styled-components';
import { IPublisherFilter } from './ListContainer';

import { SortValue } from './ListView';

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

type PublicationSortMenuProps = {
  handleSort: (sortBy: SortValue) => void;
};
const PublicationSortMenu = ({ handleSort }: PublicationSortMenuProps) => (
  <Menu>
    <Menu.Item disabled>Publication Score (Ascending)</Menu.Item>
    <Menu.Item disabled>Publication Score (Descending)</Menu.Item>
    <Menu.Item onClick={() => handleSort('publisher-name-asc')}>A-Z (Alphabetical Order)</Menu.Item>
    <Menu.Item onClick={() => handleSort('publisher-name-desc')}>Z-A (Reverse Order) </Menu.Item>
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

type MediaSourceFilterMenuProps = {
  setMediaSourcesFilter: React.Dispatch<React.SetStateAction<string[]>>;

  mediaSource: IMediaSource[];
  handleMediaSourceFilter: () => void;
};
const MediaSourceFilterMenu = ({
  mediaSource,

  setMediaSourcesFilter,
  handleMediaSourceFilter,
}: MediaSourceFilterMenuProps) => {
  return (
    <Menu>
      <Checkbox.Group onChange={(value) => setMediaSourcesFilter(value as string[])}>
        {mediaSource.map((social) => (
          <Menu.Item key={social._id}>
            <Checkbox value={social._id}>{social.media_source_name}</Checkbox>
          </Menu.Item>
        ))}
      </Checkbox.Group>
      <Menu.Divider />

      <Menu.Item>
        <Button $fullwidth onClick={() => handleMediaSourceFilter()}>
          Apply
        </Button>
      </Menu.Item>
    </Menu>
  );
};

type WebsiteSearchMenuProps = {
  handleWebsiteSearch: (value: string) => void;
  websiteSearchInput: string;
  setWebsiteSearchInput: React.Dispatch<React.SetStateAction<string>>;
};
const WebsiteSearchMenu = ({
  handleWebsiteSearch,
  websiteSearchInput,
  setWebsiteSearchInput,
}: WebsiteSearchMenuProps) => {
  return (
    <Menu>
      <Menu.Item key="menu-search">
        <Input
          type="search"
          placeholder="Seach"
          value={websiteSearchInput}
          onChange={(e) => setWebsiteSearchInput(e.target.value)}
          onSearch={(value) => handleWebsiteSearch(value)}
          onClick={(e) => e.stopPropagation()}
          autoFocus
          allowClear
        />
      </Menu.Item>
    </Menu>
  );
};

type Props = {
  handleEdit: (id: string) => void;
  showSocialFilter: boolean;
  setShowSocialFilter: React.Dispatch<React.SetStateAction<boolean>>;
  showMediaSourceFilter: boolean;
  setShowMediaSourceFilter: React.Dispatch<React.SetStateAction<boolean>>;
  showWebsiteSearch: boolean;
  setShowWebsiteSearch: React.Dispatch<React.SetStateAction<boolean>>;
  mediaSources: IMediaSourceResponsePayload | undefined;
  handleSort: (sortBy: 'publisher-name-asc' | 'publisher-name-desc') => void;
  sort: SortValue | '';
  setMediaSourcesFilter: React.Dispatch<React.SetStateAction<string[]>>;
  handleMediaSourceFilter: () => void;
  setSocialMediaFilter: React.Dispatch<React.SetStateAction<string[]>>;
  handleSocialMediaFilter: () => void;
  handleWebsiteSearch: (value: string) => void;
  websiteSearchInput: string;
  setWebsiteSearchInput: React.Dispatch<React.SetStateAction<string>>;
  handleOnDelete: (publication: IPublication) => void;
  filter: IPublisherFilter;
};
export const LIST_COLUMN = ({
  handleEdit,
  showSocialFilter,
  setShowSocialFilter,
  showMediaSourceFilter,
  setShowMediaSourceFilter,
  showWebsiteSearch,
  setShowWebsiteSearch,
  mediaSources,
  handleSort,
  sort,
  setMediaSourcesFilter,
  handleMediaSourceFilter,
  setSocialMediaFilter,
  handleSocialMediaFilter,
  handleWebsiteSearch,
  websiteSearchInput,
  setWebsiteSearchInput,
  handleOnDelete,
  filter,
}: Props): ITableColumn[] => [
  {
    key: 'logo',
    title: (
      <HeadContainer>
        <span>Logo</span>
      </HeadContainer>
    ),
    render: (_, { logo, publisher_name }: IPublication) => {
      const getInitialLetters = getInitials(publisher_name);
      return logo ? <Logo src={logo} /> : <LetterAvatar>{getInitialLetters}</LetterAvatar>;
    },
  },
  {
    key: 'name',
    width: 200,
    title: (
      <HeadContainer>
        <span>Publication Name</span>
        <Space>
          <Dropdown overlay={PublicationSortMenu({ handleSort })} trigger={['click']} placement="bottom">
            <SortContainer>
              <CaretUpFilled
                height={5}
                style={{ fontSize: 12, lineHeight: 0, color: sort === 'publisher-name-asc' ? '#1890FF' : '' }}
                className="__icon"
                color="red"
              />
              <CaretDownFilled
                height={5}
                style={{ fontSize: 12, lineHeight: 0, color: sort === 'publisher-name-desc' ? '#1890FF' : '' }}
                className="__icon"
              />
            </SortContainer>
          </Dropdown>
        </Space>
      </HeadContainer>
    ),

    render: (_, data: IPublication) => data.publisher_name,
  },
  {
    key: 'media_type',
    width: 100,
    title: (
      <HeadContainer>
        <span>Media Type</span>
        {mediaSources?.data && (
          <Space>
            <Dropdown
              overlay={MediaSourceFilterMenu({
                mediaSource: mediaSources.data,
                setMediaSourcesFilter,

                handleMediaSourceFilter,
              })}
              trigger={['click']}
              visible={showMediaSourceFilter}
              onVisibleChange={setShowMediaSourceFilter}
              placement="bottom"
            >
              <FilterFilled
                style={{ color: filter.media_sources && filter.media_sources.length > 0 ? '#1890FF' : '' }}
              />
            </Dropdown>
          </Space>
        )}
      </HeadContainer>
    ),

    render: (_, data: IPublication) => data.media_source[0]?.media_source_name,
  },
  {
    key: 'scrapping_url',
    width: '20%',
    title: (
      <HeadContainer>
        <span>Website URLs</span>
        <Space>
          <Dropdown
            overlay={WebsiteSearchMenu({ handleWebsiteSearch, websiteSearchInput, setWebsiteSearchInput })}
            trigger={['click']}
            visible={showWebsiteSearch}
            onVisibleChange={setShowWebsiteSearch}
            placement="bottom"
          >
            <SearchOutlined style={{ color: filter.website_urls ? '#1890FF' : '' }} />
          </Dropdown>
        </Space>
      </HeadContainer>
    ),
    render: (_, data: IPublication) => data.website_urls.join(', '),
  },
  {
    key: 'social_media_links',
    width: '20%',
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
            <FilterFilled
              style={{ color: filter.social_media_links && filter.social_media_links.length > 0 ? '#1890FF' : '' }}
            />
          </Dropdown>
        </Space>
      </HeadContainer>
    ),
    render: (_, { social_media_links }: IPublication) => {
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
    key: 'description',
    title: 'Description',
    width: '10%',
    ellipsis: true,
    render: (_, { description }: IPublication) => description && `${description.slice(0, 30)}...`,
  },
  {
    key: 'actions',
    title: 'Actions',
    render: (_, data: IPublication) => {
      return (
        <Space>
          <Button onClick={() => handleEdit(data._id)}>Edit</Button>
          <Button variant="outlined" onClick={() => handleOnDelete(data)}>
            Delete
          </Button>
        </Space>
      );
    },
  },
];
