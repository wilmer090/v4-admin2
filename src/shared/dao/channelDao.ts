import { ENDPOINTS } from 'shared/constants/ENDPOINTS';
import { useAxios } from 'shared/hooks/useAxios';
import { IChannelRequestPayload, IChannelResponsePayload } from 'shared/interfaces/IChannel';
import { transformPayload } from 'shared/utils/transformPayload';

export const useChannelDao = () => {
  const { GET } = useAxios();

  const getChannel = async (payload?: IChannelRequestPayload) => {
    const transformedPayload = transformPayload<IChannelRequestPayload>(payload);

    const response = await GET<IChannelResponsePayload>({
      url: ENDPOINTS.CHANNEL,
      params: {
        token: transformedPayload,
      },
    });

    return response.data;
  };

  return {
    getChannel,
  };
};
