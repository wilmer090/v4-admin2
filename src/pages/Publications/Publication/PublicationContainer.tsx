import React, { useMemo } from 'react';
import { useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';
import { IMediaSource } from 'shared/interfaces/IMediaSource';
import { IPublicationCreatePayload, IPublicationUpdatePayload } from 'shared/interfaces/IPublication';
import { IUpload } from 'shared/interfaces/utils/IUpload';
import { authService } from 'shared/services/authService';
import { useMediaSourceService } from 'shared/services/mediaSourceService';
import { usePublicationService } from 'shared/services/publicationService';
import { Alert, Spinner } from 'shared/theme/elements';
import { transformPayload } from 'shared/utils/transformPayload';

import PublicationView from './PublicationView';

const { createPublication, getSinglePublication, updatePublication } = usePublicationService();
const { getMediaSource } = useMediaSourceService();
const { getProfile } = authService();
// const { getMultipliers } = useMultiplierService();

const PublicationContainer = () => {
  const userProfile = getProfile();
  const { createMutation } = createPublication();
  const { updateMutation } = updatePublication();
  const { location, goBack } = useHistory();
  const { state } = location as any;
  const queryClient = useQueryClient();

  const { data: mediaSources, isLoading: isMediaSourcesLoading } = getMediaSource();

  // const { isLoading: isMultipliersLoading } = getMultipliers();
  const { data: publication, isLoading: isPublicationLoading } = getSinglePublication(state?.id);

  const handleSubmit = async (values: IPublicationCreatePayload | IPublicationUpdatePayload, logo: IUpload) => {
    const payload: IPublicationCreatePayload | IPublicationUpdatePayload = {
      ...values,
      _id: publication ? publication._id : undefined,
      updated_by: publication ? userProfile._id : undefined,
      created_by: !publication ? userProfile._id : undefined,
    };

    const transformedPayload = transformPayload(payload);

    const formData = new FormData();
    formData.append('token', transformedPayload);
    if (logo) {
      formData.append('image', logo);
    }

    if (publication) {
      updateMutation.mutate(formData, {
        onSuccess: () => {
          queryClient.removeQueries('publications');
          queryClient.invalidateQueries(['publication', publication?._id]);
          Alert.success('', 'Publication Updated');
          goBack();
          return;
        },
        onError: (error: any) => {
          if (error?.response?.data?.server_response) {
            Alert.error('', error?.response?.data?.server_response);
          } else {
            Alert.error('', 'Failed to updated publication');
          }

          return;
        },
      });
    } else {
      createMutation.mutate(formData, {
        onSuccess: () => {
          queryClient.removeQueries('publications');
          Alert.success('', 'Publication Created');
          goBack();
          return;
        },
        onError: () => {
          Alert.error('', 'Failed to create publication');

          return;
        },
      });
    }
  };

  const getMediaSources = useMemo(() => {
    return mediaSources?.data || [];
  }, [mediaSources]) as IMediaSource[];

  const isLoading = useMemo(() => {
    return isPublicationLoading;
  }, [isPublicationLoading]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <PublicationView
          mediaSources={getMediaSources}
          handleSubmit={handleSubmit}
          isLoading={createMutation.isLoading || updateMutation.isLoading || isMediaSourcesLoading}
          publication={publication}
        />
      )}
    </>
  );
};

export default PublicationContainer;
