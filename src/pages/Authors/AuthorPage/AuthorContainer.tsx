import { DefaultOptionType } from 'antd/lib/select';
import { useMemo, useState } from 'react';
import { usePagination } from 'shared/hooks/usePagination';
import { IAuthorRequestPayload } from 'shared/interfaces/IAuthor';
import { useAuthorService } from 'shared/services/authorService';
import { usePublicationService } from 'shared/services/publicationService';
import { useDebounce } from 'use-debounce';

import AuthorView from './AuthorView';

export interface IAuthorFilter {
  sort?: string;
  is_verified?: boolean;
  social_media_links?: string[];
  author_name?: string;
}
const { getAuthors } = useAuthorService();
const { getPublications } = usePublicationService();
const AuthorContainer = () => {
  const { page, pageSize, handlePageChange, handlePageSizeChange } = usePagination();

  const [publicationSearchInput, setPublicationSearchInput] = useState<string>('');
  const [publicationKeyword] = useDebounce(publicationSearchInput, 800);
  const [filter, setFilter] = useState<Partial<IAuthorRequestPayload>>({
    sort: '',
    is_verified: undefined,
    social_media_links: undefined,
    author_name: undefined,
    author_publications: undefined,
  });

  const { data: publicationsData, isLoading: isLoadingPublications } = getPublications(1, {
    page: 1,
    limit: 10,
    publisher_name: publicationKeyword,
  });

  const { data, isLoading, isFetching } = getAuthors({
    sort: filter.sort,
    page,
    limit: pageSize,
    is_verified: filter.is_verified,
    author_name: filter.author_name,
    social_media_links: filter.social_media_links,
    author_publications: filter.author_publications,
    is_parent: filter.is_parent,
  });

  const getPublicationsData = useMemo(() => {
    const results = publicationsData?.data ? publicationsData.data : [];
    return results.map((publication) => {
      return {
        value: publication._id,
        label: publication.publisher_name,
      };
    });
  }, [publicationsData]) as DefaultOptionType[];

  return (
    <div>
      <AuthorView
        data={data}
        isLoading={isLoading || isFetching}
        page={page}
        filter={filter}
        handlePageChange={handlePageChange}
        pageSize={pageSize}
        handlePageSize={handlePageSizeChange}
        setFilter={setFilter}
        publicationSearchInput={publicationSearchInput}
        setPublicationSearchInput={setPublicationSearchInput}
        publicationsOptions={getPublicationsData}
        isPublicationLoading={isLoadingPublications}
      />
    </div>
  );
};

export default AuthorContainer;
