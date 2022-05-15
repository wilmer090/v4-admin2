import { useHistory } from 'react-router-dom';
import { usePagination } from 'shared/hooks/usePagination';
import { useAuthorService } from 'shared/services/authorService';
import { usePublicationService } from 'shared/services/publicationService';
import { Spinner } from 'shared/theme/elements';
import { createURL } from 'shared/utils/createURL';
import { transformPayload } from 'shared/utils/transformPayload';

import OnlineNewsView from './OnlineNewsView';

const { createAuthor, getSingleAuthor } = useAuthorService();

const AddAuthorContainer = () => {
  const { location } = useHistory();
  const { state } = location as any;
  const { data: publication } = getSingleAuthor(state?.id);
  const { createMutation } = createAuthor();
  const { page, pageSize } = usePagination();
  const { getPublications } = usePublicationService();
  const { isLoading } = getPublications(page, {
    page_size: pageSize,
    page_number: page,
  });
  const handleSubmit = (values: any) => {
    const payload: any = {
      ...values,
      social_media_links: {
        facebook: {
          profile_url: createURL(values.social_media_links.facebook.profile_url),
        },
        twitter: {
          profile_url: createURL(values.social_media_links.twitter.profile_url),
        },
        instagram: {
          profile_url: createURL(values.social_media_links.instagram.profile_url),
        },
        linkenin: {
          profile_url: createURL(values.social_media_links.linkenin.profile_url),
        },
        youtube: {
          profile_url: createURL(values.social_media_links.youtube.profile_url),
        },
      },
    };

    const transformedPayload = transformPayload(payload);
    const formData = new FormData();
    formData.append('token', transformedPayload);

    createMutation.mutate(formData);
  };
  return <>{isLoading ? <Spinner /> : <OnlineNewsView handleSubmit={handleSubmit} publication={publication} />}</>;
};

export default AddAuthorContainer;
