import { useAxios } from 'shared/hooks/useAxios';
import { ILoginPayload } from 'shared/interfaces/IAuth';

const { POST } = useAxios();
export const authService = () => {
  const login = async (payload: ILoginPayload) => {
    const response = await POST({
      url: '/auth',
      body: payload,
    });
    return response.data;
  };
  return {
    login,
  };
};
