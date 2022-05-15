import { ENDPOINTS } from 'shared/constants/ENDPOINTS';
import { useAxios } from 'shared/hooks/useAxios';
import { IProgramRequestPayload, IProgramResponsePayload } from 'shared/interfaces/IProgram';
import { transformPayload } from 'shared/utils/transformPayload';

export const useProgramDao = () => {
  const { GET } = useAxios();

  const getProgram = async (payload?: IProgramRequestPayload) => {
    const transformedPayload = transformPayload<IProgramRequestPayload>(payload);

    const response = await GET<IProgramResponsePayload>({
      url: ENDPOINTS.PROGRAM,
      params: {
        token: transformedPayload,
      },
    });

    return response.data;
  };

  return {
    getProgram,
  };
};
