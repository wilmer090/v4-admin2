import { useQuery } from 'react-query';
import { useMediaSourceDao } from 'shared/dao/mediaSourceDao';
import { IMediaSourceResponsePayload } from 'shared/interfaces/IMediaSource';

const { getMediaSources: getMediaSourcesDao } = useMediaSourceDao();
export const useMediaSourceService = () => {
  const getMediaSource = () => {
    const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery<
      IMediaSourceResponsePayload,
      Error
    >(['media_sources'], () => getMediaSourcesDao());

    return {
      isLoading,
      isError,
      error,
      data,
      isFetching,
      isPreviousData,
    };
  };

  return {
    getMediaSource,
  };
};
