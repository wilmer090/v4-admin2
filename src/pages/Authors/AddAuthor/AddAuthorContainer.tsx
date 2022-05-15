import { DefaultOptionType } from 'antd/lib/select';
import { useMemo, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';
import { usePagination } from 'shared/hooks/usePagination';
import { IAuthorRequestPayload } from 'shared/interfaces/IAuthor';
import { useAuthorService } from 'shared/services/authorService';
import { usePublicationService } from 'shared/services/publicationService';
import { Alert, Spinner } from 'shared/theme/elements';
//import { createURL } from 'shared/utils/createURL';
//import { IUpload } from 'shared/interfaces/utils/IUpload';
import { transformPayload } from 'shared/utils/transformPayload';
import { useDebounce } from 'use-debounce';

import AddAuthorView from './AddAuthorView';

const { createAuthor, getSingleAuthor, getAuthors, updateAuthor } = useAuthorService();

const AddAuthorContainer = () => {
  const { createMutation } = createAuthor();
  const { updateMutation } = updateAuthor();
  const { location, goBack } = useHistory();
  const { state } = location as any;
  const queryClient = useQueryClient();

  const { data: author, isLoading: isAuthorLoading } = getSingleAuthor(state?.id);
  const [filter, setFilter] = useState<Partial<IAuthorRequestPayload>>({
    sort: '',
    is_verified: undefined,
    social_media_links: undefined,
    author_name: undefined,
    author_publications: undefined,
  });
  const { data: ChildAuthorData, isLoading: isChildAuthorLoading } = getAuthors({
    author_publications: [],
    author_name: filter.author_name ? filter?.author_name : author?.data[0]?.author_name,
    author_tag: 'Author',
    is_parent: false,
    sort: '',
  });
  const [publicationSearch, setPublicationSearch] = useState<string>('');
  const [publicationKeyword] = useDebounce(publicationSearch, 800);

  // publications
  const { page, pageSize, handlePageChange, handlePageSizeChange } = usePagination();
  const { getPublications } = usePublicationService();

  const { data: publicationsData, isLoading: isPublicationLoading } = getPublications(page, {
    sort: '',
    page,
    limit: pageSize,
    publisher_name: publicationKeyword,
  });
  const initializeOptions = (
    options?: DefaultOptionType[],
    initialValues?: DefaultOptionType[],
  ): DefaultOptionType[] | undefined => {
    if (!options) return undefined;

    const data: DefaultOptionType[] = options;

    if (initialValues) {
      initialValues.forEach((initialValue) => {
        const exists = options.find((option) => option.value === initialValue.value);

        if (!exists) data.push(initialValue);
      });
    }

    return data;
  };

  const getChildAuthorsData = () => {
    // eslint-disable-next-line prefer-const
    let intialValues: DefaultOptionType[] | undefined = undefined;
    const childAuthors = ChildAuthorData?.data?.map(({ _id, author_name, articles_count }: any) => ({
      _id: { $oid: _id },
      author_name,
      articles_count,
    }));

    return initializeOptions(childAuthors, intialValues);
  };
  const getPublicationData = () => {
    // eslint-disable-next-line prefer-const
    let intialValues: DefaultOptionType[] | undefined = undefined;
    const publications = publicationsData?.data?.map(({ _id, publisher_name }: any) => ({
      value: _id,
      label: publisher_name,
    }));

    if (author) {
      intialValues = author?.data[0]?.author_publications.map(({ _id, publication_name }) => ({
        value: _id.$oid,
        label: publication_name,
      }));
    }
    //console.log('test', initializeOptions(publications, intialValues));
    return initializeOptions(publications, intialValues);
  };

  const handleSubmit = (values: any, logo: any) => {
    const payload: any = {
      ...values,
      _id: author ? author?.data[0]?._id : null,
      children_authors: values.children_authors?.map((author) => author._id.$oid),
    };

    const transformedPayload = transformPayload(payload);
    const formData = new FormData();
    formData.append('token', transformedPayload);
    if (logo) {
      formData.append('image', logo);
    }
    if (author) {
      updateMutation.mutate(formData, {
        onSuccess: () => {
          queryClient.removeQueries('authors');
          queryClient.invalidateQueries(['author', author?.data[0]?._id]);
          Alert.success('', 'Author Updated');
          goBack();
          return;
        },
        onError: () => {
          Alert.error('', 'Failed to updated Author');
          // push(ROUTES.AUTHORS.LIST.LIST);
          return;
        },
      });
    } else {
      createMutation.mutate(formData, {
        onSuccess: () => {
          queryClient.removeQueries('authors');
          Alert.success('', 'Author Created');
          goBack();
          return;
        },
        onError: () => {
          Alert.error('', `Failed to Create New Author's Profile`);
          return;
        },
      });
    }
  };

  const isLoading = useMemo(() => {
    return isAuthorLoading;
  }, [isAuthorLoading]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <AddAuthorView
          handleSubmit={handleSubmit}
          author={author}
          filter={filter}
          setFilter={setFilter}
          childAuthor={getChildAuthorsData()}
          handlePageChange={handlePageChange}
          handlePageSize={handlePageSizeChange}
          isLoading={createMutation.isLoading || updateMutation.isLoading}
          isPublicationLoading={isPublicationLoading}
          isChildAuthorLoading={isChildAuthorLoading}
          publication={getPublicationData()}
          setPublicationSearch={(value) => setPublicationSearch(value)}
        />
      )}
    </>
  );
};

export default AddAuthorContainer;
