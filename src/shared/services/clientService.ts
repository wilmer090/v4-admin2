import { useQuery } from 'react-query';
import { useClientDao } from 'shared/dao/clientDao';
import { IClient, IClientRequestPayload } from 'shared/interfaces/IClient';

const { getClients: getClientsDao } = useClientDao();
export const useClientService = () => {
  const getClients = (payload?: IClientRequestPayload) => {
    const { data, error, isLoading, isError } = useQuery<IClient[], Error>(['clients', payload], () =>
      getClientsDao(payload),
    );
    return {
      data,
      error,
      isLoading,
      isError,
    };
  };

  return {
    getClients,
  };
};

// const response = await GET<IClient[]>({
//     params: payload,
//     url: '/clients',
//   });
//   return response.data;
