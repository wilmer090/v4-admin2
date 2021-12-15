import { useAxios } from 'shared/hooks/useAxios';
import { IClient, IClientRequestPayload } from 'shared/interfaces/IClient';

const { GET } = useAxios();
export const useClientDao = () => {
  const getClients = async (payload?: IClientRequestPayload) => {
    const response = await GET<IClient[]>({
      ...payload,
      url: '/posts',
    });
    return response.data;
  };
  return {
    getClients,
  };
};
