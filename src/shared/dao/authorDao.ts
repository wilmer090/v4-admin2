import { ENDPOINTS } from 'shared/constants/ENDPOINTS';
import { useAxios } from 'shared/hooks/useAxios';
import {
  IAuthor,
  //IAuthorDeletePayload,
  IAuthorRequestPayload,
  IAuthorResponsePayload,
} from 'shared/interfaces/IAuthor';
import { transformPayload } from 'shared/utils/transformPayload';

const { GET, POST, DELETE } = useAxios();
export const useAuthorDao = () => {
  const getAuthors = async (payload?: IAuthorRequestPayload) => {
    const transformedPayload = transformPayload<IAuthorRequestPayload>(payload);
    const response = await GET<IAuthorResponsePayload>({
      url: `${ENDPOINTS.AUTHORS}`,
      params: {
        token: transformedPayload,
      },
    });
    return response.data;
  };

  const getSingleAuthor = async (id: string) => {
    const _id = id;
    const transformedPayload = transformPayload({ _id });
    const response = await GET<IAuthor>({
      url: `${ENDPOINTS.AUTHORS}/show`,
      params: {
        token: transformedPayload,
      },
    });

    return response.data;
  };

  const createAuthor = async (formData: FormData) => {
    // const transformedPayload = transformPayload<IPublicationCreatePayload>(payload);
    // const formData = new FormData();
    // formData.append('token', transformedPayload);

    const response = await POST({
      url: `${ENDPOINTS.AUTHORS}/create`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  };

  const updateAuthor = async (formData: FormData) => {
    const response = await POST({
      url: `${ENDPOINTS.AUTHORS}/update`,
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

  const deleteAuthor = async ({ _id }) => {
    const transformedPayload = transformPayload({ _id });
    const response = await DELETE({
      url: `${ENDPOINTS.AUTHORS}/delete`,
      params: {
        token: transformedPayload,
      },
    });

    return response.data;
  };

  return {
    getAuthors,
    getSingleAuthor,
    createAuthor,
    updateAuthor,
    deleteAuthor,
  };
};
