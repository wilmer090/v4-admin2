import { useAxios } from 'shared/hooks/useAxios';
import { IClient, IClientRequestPayload } from 'shared/interfaces/IClient';
import { transformPayload } from 'shared/utils/transformPayload';

const { PUT } = useAxios();
export const useClientDao = () => {
  const getClients = async (payload?: IClientRequestPayload) => {
    const finalPayload = {
      ...payload,
      id: '619f1734a834a290ce5655d2',
    };
    const transformedPayload = transformPayload<IClientRequestPayload>(finalPayload);

    const response = await PUT<IClient[], unknown>({
      url: `/publications`,
      data: {
        token: transformedPayload,
      },
    });
    return response.data;
  };
  return {
    getClients,
  };
};
