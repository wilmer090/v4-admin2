import MMILogo from 'assets/MMI.svg';
import React from 'react';
import { authService } from 'shared/services/authService';

import { ProfileDetails, ProfileEmailText, ProfileImage, ProfileNameText, ProfileWrapper } from './Sidebar.styled';

type Props = {
  collapsed: boolean;
};
const { getProfile } = authService();
const SidebarProfile: React.FC<Props> = ({ collapsed }) => {
  const profileDetail = getProfile();
  const getFullName = `${profileDetail?.first_name} ${profileDetail?.last_name}`;

  return (
    <ProfileWrapper>
      <ProfileDetails>
        <ProfileImage src={MMILogo} preview={false} />
        {!collapsed && (
          <ProfileNameText level={5}>
            {getFullName.length <= 20 ? getFullName : `${getFullName.substring(0, 20)}...`}
          </ProfileNameText>
        )}
      </ProfileDetails>
      {!collapsed && <ProfileEmailText>{[profileDetail?.email]}</ProfileEmailText>}
    </ProfileWrapper>
  );
};

export default SidebarProfile;
