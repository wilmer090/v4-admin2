import { Menu } from 'antd';
import styled from 'styled-components';

export const DropdownCopyMenu = styled(Menu)`
  height: 100%;
  border: 1px solid #edededd9;
  border-radius: 2px;

  .ant-menu-item:active,
  .ant-menu-item:focus,
  .ant-menu-item-selected {
    background: transparent !important;
  }
`;

export const DropdownCopyMenuItem = styled(Menu.Item)`
  height: 100% !important;
  margin: 1rem 0 !important;

  .ant-checkbox-group {
    height: 100%;
    position: relative;
    display: grid;
    grid-column: span;
  }

  .ant-checkbox-group-item {
    margin: ${(props) => (props.key === 'button' ? '0.1rem 0' : '0.2rem 0')};
  }
`;
