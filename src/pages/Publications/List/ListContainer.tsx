import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { usePagination } from 'shared/hooks/usePagination';
import { IDeletePublicationPayload } from 'shared/interfaces/IPublication';
import { useMediaSourceService } from 'shared/services/mediaSourceService';
import { usePublicationService } from 'shared/services/publicationService';
import { Alert } from 'shared/theme/elements';

import ListView from './ListView';

export interface IPublisherFilter {
  publisher_name?: string;
  sort?: string;
  media_sources?: string[];
  website_urls?: string[];
  social_media_links?: string[];
}

const { getMediaSource } = useMediaSourceService();
const { getPublications, deletePublication } = usePublicationService();
const ListContainer = () => {
  const { page, pageSize, handlePageChange, handlePageSizeChange } = usePagination();
  const { deleteMutation } = deletePublication();
  const queryClient = useQueryClient();
  const [filter, setFilter] = useState<IPublisherFilter>({
    publisher_name: undefined,
    sort: '',
    media_sources: undefined,
    website_urls: undefined,
    social_media_links: undefined,
  });

  const { data, isLoading } = getPublications(page, {
    sort: filter.sort,
    page,
    limit: pageSize,
    publisher_name: filter.publisher_name,
    media_sources: filter.media_sources,
    website_urls: filter.website_urls,
    social_media_links: filter.social_media_links,
  });
  const { data: mediaSources, isLoading: isMediaSourcesLoading } = getMediaSource();

  const handleDeletePublication = (payload: IDeletePublicationPayload) => {
    deleteMutation.mutate(payload, {
      onSuccess: () => {
        queryClient.removeQueries('publications');
        if (data) {
          if (data.data.length <= 0) {
            handlePageChange(page - 1);
          }
        }
        Alert.success('', 'Publication Deleted');
      },
      onError: () => {
        Alert.error('', 'Failed to delete publication');
      },
    });
  };

  return (
    <ListView
      data={data}
      mediaSources={mediaSources}
      isLoading={isLoading || isMediaSourcesLoading || deleteMutation.isLoading}
      page={page}
      handlePageChange={handlePageChange}
      pageSize={pageSize}
      handlePageSize={handlePageSizeChange}
      filter={filter}
      setFilter={setFilter}
      handleDeletePublication={handleDeletePublication}
    />
  );
};

export default ListContainer;
