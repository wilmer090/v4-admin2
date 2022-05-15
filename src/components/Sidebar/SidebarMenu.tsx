import { LogoutOutlined } from '@ant-design/icons';
import { Menu as AntMenu } from 'antd';
import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SIDEBAR_MENU_LIST } from 'shared/constants/SIDEBAR';
import { authService } from 'shared/services/authService';

import { Menu } from './Sidebar.styled';

const { SubMenu, Item } = AntMenu;

const { logout } = authService();
const SidebarMenu: React.FC = () => {
  const { pathname } = useLocation();

  const getActiveMenu = useMemo(() => {
    const parentRoute = pathname.split('/')[1];
    return parentRoute;
  }, [pathname]);
  const getSelectedKey = useMemo(() => {
    const [, parent, child] = pathname.split('/');
    return `/${parent}/${child}`;
  }, [pathname]);

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <Menu defaultSelectedKeys={[getSelectedKey]} defaultOpenKeys={[getActiveMenu]} mode="inline" theme="dark">
      {SIDEBAR_MENU_LIST.map(({ Icon, ...item }, index) => (
        <SubMenu icon={Icon} title={item.title} key={item.title.toLowerCase()}>
          {item.children.map((child, childIndex) => (
            <Item key={child.to ? child.to : `${index} ${childIndex}`}>
              <Link to={child.to || '#'}>{child.title}</Link>
            </Item>
          ))}
        </SubMenu>
      ))}

      <Item key="logout" icon={<LogoutOutlined />} onClick={() => handleLogout()} className="menu__logout">
        Logout
      </Item>
    </Menu>
  );
};

export default React.memo(SidebarMenu);
