import { useQuery } from 'react-query';
import { useChannelDao } from 'shared/dao/channelDao';
import { IChannelRequestPayload, IChannelResponsePayload } from 'shared/interfaces/IChannel';

export const useChannelService = () => {
  const { getChannel: getChannelDao } = useChannelDao();

  const getChannel = (payload?: IChannelRequestPayload) => {
    const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery<IChannelResponsePayload, Error>(
      ['channel', payload],
      () => getChannelDao(payload),
    );

    return {
      data,
      error,
      isLoading,
      isError,
      isFetching,
      isPreviousData,
    };
  };

  return {
    getChannel,
  };
};
