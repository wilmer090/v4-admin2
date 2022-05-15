import { ENDPOINTS } from 'shared/constants/ENDPOINTS';
import { useAxios } from 'shared/hooks/useAxios';
import {
  IDeletePublicationPayload,
  IPublicationRequestPayload,
  IPublicationResponsePayload,
} from 'shared/interfaces/IPublication';
import { transformPayload } from 'shared/utils/transformPayload';

const { GET, POST, DELETE } = useAxios();
export const usePublicationDao = () => {
  const getPublications = async (page = 1, payload?: IPublicationRequestPayload) => {
    const transformedPayload = transformPayload<IPublicationRequestPayload>(payload);

    const response = await GET<IPublicationResponsePayload>({
      url: `${ENDPOINTS.PUBLICATIONS}/show`,
      params: {
        token: transformedPayload,
        page,
      },
    });
    return response.data;
  };

  const getSinglePublication = async (id: string) => {
    const transformedPayload = transformPayload({ _id: id, sort: '' });
    const response = await GET<IPublicationResponsePayload>({
      url: `${ENDPOINTS.PUBLICATIONS}/show`,
      params: {
        token: transformedPayload,
      },
    });

    return response.data;
  };

  const createPublication = async (formData: FormData) => {
    // const transformedPayload = transformPayload<IPublicationCreatePayload>(payload);
    // const formData = new FormData();
    // formData.append('token', transformedPayload);

    const response = await POST({
      url: `${ENDPOINTS.PUBLICATIONS}/create`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  };

  const updatePublication = async (formData: FormData) => {
    const response = await POST({
      url: `${ENDPOINTS.PUBLICATIONS}/update`,
      data: formData,
      params: {
        token: formData.get('token'),
      },
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  };

  const deletePublication = async (payload: IDeletePublicationPayload) => {
    const transformedPayload = transformPayload<IDeletePublicationPayload>(payload);
    const response = await DELETE({
      url: `${ENDPOINTS.PUBLICATIONS}/delete`,
      params: {
        token: transformedPayload,
      },
    });
    return response.data;
  };

  return {
    getPublications,
    getSinglePublication,
    createPublication,
    updatePublication,
    deletePublication,
  };
};
