import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { useAuthDao } from 'shared/dao/authDao';
import { ILoginRequestPayload, ILoginResponsePayload, IUser } from 'shared/interfaces/IAuth';
import { ls } from 'shared/utils/ls';

const { login: loginDao } = useAuthDao();
export const authService = () => {
  const login = () => {
    const loginMutation = useMutation<
      ILoginResponsePayload,
      AxiosError<{ server_response: string }>,
      ILoginRequestPayload
    >((payload: ILoginRequestPayload) => loginDao(payload));
    return {
      loginMutation,
    };
  };
  const logout = () => {
    return ls.remove('user');
  };
  const getProfile = (): IUser => {
    return ls.get('user');
  };

  return {
    login,
    logout,
    getProfile,
  };
};
