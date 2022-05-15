import { ENDPOINTS } from 'shared/constants/ENDPOINTS';
import { useAxios } from 'shared/hooks/useAxios';
import { IMediaSourceResponsePayload } from 'shared/interfaces/IMediaSource';
import { transformPayload } from 'shared/utils/transformPayload';

const { GET } = useAxios();
export const useMediaSourceDao = () => {
  const getMediaSources = async () => {
    const transformedPayload = transformPayload({ page_size: 100 });
    const response = await GET<IMediaSourceResponsePayload>({
      url: ENDPOINTS.MEDIA_SOURCES,
      params: {
        token: transformedPayload,
        page_size: 1,
      },
    });
    return response.data;
  };

  return {
    getMediaSources,
  };
};
