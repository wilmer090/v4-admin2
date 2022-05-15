import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'shared/constants/ROUTES';
import { ILoginRequestPayload } from 'shared/interfaces/IAuth';
import { authService } from 'shared/services/authService';
import { Alert } from 'shared/theme/elements';
import { ls } from 'shared/utils/ls';

import LoginView from './LoginView';

const { getProfile } = authService();
const LoginContainer = () => {
  const { login } = authService();
  const userProfile = getProfile();
  const history = useHistory();

  const { loginMutation } = login();
  const { push } = useHistory();
  const handleSubmit = (payload: ILoginRequestPayload) => {
    loginMutation.mutate(payload, {
      onSuccess: (response) => {
        ls.set('user', response.data[0]);
        push(ROUTES.ADMIN.CLIENTS);
      },
      onError: (error) => {
        if (error.response?.data.server_response) {
          Alert.error('', error.response?.data.server_response);
        }
      },
    });
  };

  useEffect(() => {
    if (userProfile) {
      history.push(ROUTES.ADMIN.CLIENTS);
    }
  }, [userProfile, history]);

  return <LoginView handleSubmit={handleSubmit} loading={loginMutation.isLoading} />;
};

export default LoginContainer;
