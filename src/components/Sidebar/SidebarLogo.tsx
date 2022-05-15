import { ReactComponent as MMILogo } from 'assets/MMI.svg';
import { ReactComponent as MMILogoWithoutText } from 'assets/MMI_WITHOUT_TEXT.svg';
import React from 'react';

type Props = {
  collapsed: boolean;
};
const SidebarLogo: React.FC<Props> = ({ collapsed }) => {
  return <>{collapsed ? <MMILogoWithoutText /> : <MMILogo />}</>;
};

export default SidebarLogo;
