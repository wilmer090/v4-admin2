import { useAxios } from 'shared/hooks/useAxios';
import { ILoginRequestPayload, ILoginResponsePayload, ILogoutResponsePayload } from 'shared/interfaces/IAuth';

import { transformPayload } from 'shared/utils/transformPayload';

const { POST } = useAxios();
export const useAuthDao = () => {
  const login = async (payload: ILoginRequestPayload) => {
    const transformedPayload = transformPayload<ILoginRequestPayload>(payload);
    const response = await POST<ILoginResponsePayload>({
      url: 'https://media-meter.net/global-api-staging/auth/login',
      data: {
        token: transformedPayload,
      },
    });

    return response.data;
  };

  const logout = async () => {
    const transformedPayload = transformPayload();
    const response = await POST<ILogoutResponsePayload>({
      url: 'https://media-meter.net/global-api-staging/auth/logout',
      data: {
        token: transformedPayload,
      },
    });

    return response.data;
  };

  return {
    login,
    logout,
  };
};
