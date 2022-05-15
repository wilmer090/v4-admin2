import { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { IUpload } from 'shared/interfaces/utils/IUpload';
import { useAuthorService } from 'shared/services/authorService';
import { Spinner } from 'shared/theme/elements';
import { createURL } from 'shared/utils/createURL';
import { transformPayload } from 'shared/utils/transformPayload';

import EditPrintView from './EditPrintView';

const { createAuthor, getSingleAuthor } = useAuthorService();

const EditPrintContainer = () => {
  const { location } = useHistory();
  const { state } = location as any;
  const { data: author, isLoading: isAuthorLoading } = getSingleAuthor(state?.id);
  const { createMutation } = createAuthor();

  const handleSubmit = (values: any, logo: IUpload) => {
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

    if (logo) {
      formData.append('pub_logo', logo);
    }
    createMutation.mutate(formData);
  };

  const isLoading = useMemo(() => {
    return isAuthorLoading;
  }, [isAuthorLoading]);

  return <>{isLoading ? <Spinner /> : <EditPrintView handleSubmit={handleSubmit} author={author} />}</>;
};

export default EditPrintContainer;
