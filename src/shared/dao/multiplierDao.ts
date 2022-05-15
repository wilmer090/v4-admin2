import { ENDPOINTS } from 'shared/constants/ENDPOINTS';
import { useAxios } from 'shared/hooks/useAxios';
import { IMultiplierRequestPayload, IMultiplierResponsePayload } from 'shared/interfaces/IMultiplier';
import { transformPayload } from 'shared/utils/transformPayload';

const { GET } = useAxios();
export const useMultiplierDao = () => {
  const getMultipliers = async (payload?: IMultiplierRequestPayload) => {
    const transformedPayload = transformPayload<IMultiplierRequestPayload>({
      ...payload,
      page_size: 100,
    });
    const response = await GET<IMultiplierResponsePayload>({
      url: ENDPOINTS.MULTIPLIERS,
      params: {
        token: transformedPayload,
      },
    });

    return response.data;
  };

  return {
    getMultipliers,
  };
};
