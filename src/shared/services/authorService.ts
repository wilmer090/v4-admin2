import { useMutation, useQuery } from 'react-query';
import { useAuthorDao } from 'shared/dao/authorDao';
import {
  //IAuthor,
  IAuthorDeletePayload,
  IAuthorRequestPayload,
  IAuthorResponsePayload,
} from 'shared/interfaces/IAuthor';

const {
  getAuthors: getAuthorsDao,
  getSingleAuthor: getSingleAuthorDao,
  createAuthor: createAuthorDao,
  deleteAuthor: deleteAuthorDao,
  updateAuthor: updateAuthorDao,
} = useAuthorDao();

export const useAuthorService = () => {
  const getAuthors = (payload?: IAuthorRequestPayload) => {
    const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery<IAuthorResponsePayload, Error>(
      ['authors', payload],
      () => getAuthorsDao(payload),
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

  const getSingleAuthor = (id?: string) => {
    const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery<any, Error>(
      ['author', id],
      () => getSingleAuthorDao(id || ''),
      { enabled: !!id },
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

  const createAuthor = () => {
    const createMutation = useMutation((formData: FormData) => createAuthorDao(formData));
    return {
      createMutation,
    };
  };

  const updateAuthor = () => {
    const updateMutation = useMutation((formData: FormData) => updateAuthorDao(formData));
    return {
      updateMutation,
    };
  };

  const deleteAuthor = () => {
    const deleteMutation = useMutation((id: IAuthorDeletePayload) => deleteAuthorDao(id));

    return {
      deleteMutation,
    };
  };
  return {
    getAuthors,
    getSingleAuthor,
    createAuthor,
    updateAuthor,
    deleteAuthor,
  };
  //
};
