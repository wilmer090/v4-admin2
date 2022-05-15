import { useMutation, useQuery } from 'react-query';
import { usePublicationDao } from 'shared/dao/publicationDao';
import {
  IDeletePublicationPayload,
  IPublicationRequestPayload,
  IPublicationResponsePayload,
} from 'shared/interfaces/IPublication';

const {
  getPublications: getPublicationsDao,
  getSinglePublication: getSinglePublicationDao,
  createPublication: createPublicationDao,
  updatePublication: updatePublicationDao,
  deletePublication: deletePublicationDao,
} = usePublicationDao();
export const usePublicationService = () => {
  const getPublications = (page: number, payload?: IPublicationRequestPayload) => {
    const { isLoading, isError, error, data, isFetching, isPreviousData, refetch } = useQuery<
      IPublicationResponsePayload,
      Error
    >(['publications', page, payload], () => getPublicationsDao(page, payload));
    return {
      data,
      error,
      isLoading,
      isError,
      isFetching,
      isPreviousData,
      refetch,
    };
  };

  const getSinglePublication = (id?: string) => {
    const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery<
      IPublicationResponsePayload,
      Error
    >(['publication', id], () => getSinglePublicationDao(id || ''), { enabled: !!id });

    return {
      data: data?.data[0],
      error,
      isLoading,
      isError,
      isFetching,
      isPreviousData,
    };
  };

  const createPublication = () => {
    const createMutation = useMutation((formData: FormData) => createPublicationDao(formData));

    return {
      createMutation,
    };
  };

  const updatePublication = () => {
    const updateMutation = useMutation((formData: FormData) => updatePublicationDao(formData));
    return {
      updateMutation,
    };
  };

  const deletePublication = () => {
    const deleteMutation = useMutation((payload: IDeletePublicationPayload) => deletePublicationDao(payload));
    return {
      deleteMutation,
    };
  };

  return {
    getPublications,
    getSinglePublication,
    createPublication,
    updatePublication,
    deletePublication,
  };
};
