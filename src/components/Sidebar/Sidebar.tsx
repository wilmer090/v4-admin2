import React, { useCallback, useState } from 'react';

import { CollapseIcon, SidebarWrapper } from './Sidebar.styled';
import SidebarLogo from './SidebarLogo';
import SidebarMenu from './SidebarMenu';
import SidebarProfile from './SidebarProfile';

const Sidebar = () => {
  const [collapsed, setIsCollapse] = useState(false);
  const toggleCollapse = useCallback(() => {
    setIsCollapse((collapsed) => !collapsed);
  }, []);
  return (
    <SidebarWrapper collapsed={collapsed}>
      <SidebarLogo collapsed={collapsed} />
      <SidebarProfile collapsed={collapsed} />
      <SidebarMenu />
      <CollapseIcon onClick={toggleCollapse} />
    </SidebarWrapper>
  );
};

export default Sidebar;
