import { Image, Layout, Menu as AntMenu, Typography } from 'antd';
import { MdDoubleArrow } from 'react-icons/md';
import styled from 'styled-components';

const { Sider } = Layout;

export const SidebarWrapper = styled(Sider)`
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.whiteColor};
  padding: 1.75rem 1rem;
`;

// Profile

export const ProfileWrapper = styled.div`
  overflow: hidden;
`;
export const ProfileDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 50px;
`;
export const ProfileImage = styled(Image)`
  height: 42px;
  width: 42px;
  object-fit: contain;
  border-radius: 50%;
`;

export const ProfileNameText = styled(Typography.Title)`
  font-weight: 500;
  color: white !important;
`;

export const ProfileEmailText = styled(Typography.Text)`
  font-size: 10px;
  color: white;
`;

// Sidebar Menu

export const Menu = styled(AntMenu)`
  background-color: transparent;
  margin-top: 1rem;
  .menu__logout {
    margin-left: -12px !important;
    /* transform: translateX(-12px); */
  }
  &.ant-menu {
    background-color: transparent;

    padding: 0 !important;
    .ant-menu-sub {
      background-color: transparent;
    }
  }
  .ant-menu-item {
    padding: 14px !important;
    &.ant-menu-item-selected {
      background-color: #fff !important;
      .ant-menu-title-content {
        a {
          color: #181b34;
        }
      }
    }
  }
  .ant-menu-submenu {
    .ant-menu-item {
      padding-left: 24px !important;
    }
    svg {
      height: 1.255rem;
      width: 1.25rem;
    }
  }
  .ant-menu-submenu-title {
    padding: 0 !important;
    /* margin: 0 !important; */
  }
`;

export const CollapseIcon = styled(MdDoubleArrow)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin: 0.5rem 0;
`;
