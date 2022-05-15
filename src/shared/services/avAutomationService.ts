import { useMutation, useQuery } from 'react-query';
import { useAVAutomationDao } from 'shared/dao/avAutomationDao';
import {
  IAVAutomationCreatePayload,
  IAVAutomationDeletePayload,
  IAVAutomationRequestPayload,
  IAVAutomationResponsePayload,
  IAVAutomationUpdatePayload,
} from 'shared/interfaces/IAVAutomation';

export const useAVAutomationService = () => {
  const {
    getAVAutomation: getAVAutomationDao,
    getSingleAVAutomation: getSingleAVAutomationDao,
    createAVAutomation: createAVAutomationDao,
    updateAVAutomation: updateAVAutomationDao,
    deleteAVAutomation: deleteAVAutomationDao,
  } = useAVAutomationDao();

  const createMutation = useMutation((payload?: { data?: IAVAutomationCreatePayload; image?: File }) =>
    createAVAutomationDao(payload),
  );
  const updateMutation = useMutation((payload?: { data?: IAVAutomationUpdatePayload; image?: File }) =>
    updateAVAutomationDao(payload),
  );
  const deleteMutation = useMutation((payload?: IAVAutomationDeletePayload) => deleteAVAutomationDao(payload));

  const getAVAutomations = (payload?: IAVAutomationRequestPayload) => {
    // payload.media_source_name = 'video';
    const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery<
      IAVAutomationResponsePayload,
      Error
    >(['av_automation', payload], () => getAVAutomationDao(payload), { enabled: !!payload });

    return {
      data,
      error,
      isLoading,
      isError,
      isFetching,
      isPreviousData,
    };
  };

  const getSingleAVAutomation = (payload?: IAVAutomationRequestPayload) => {
    const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery<
      IAVAutomationResponsePayload,
      Error
    >(['av_automation', payload], () => getSingleAVAutomationDao(payload), { enabled: !!payload });

    return {
      data,
      error,
      isLoading,
      isError,
      isFetching,
      isPreviousData,
    };
  };

  const createAVAutomation = () => {
    return {
      createMutation,
    };
  };

  const updateAVAutomation = () => {
    return {
      updateMutation,
    };
  };

  const deleteAVAutomation = () => {
    return {
      deleteMutation,
    };
  };

  return {
    getAVAutomations,
    getSingleAVAutomation,
    createAVAutomation,
    updateAVAutomation,
    deleteAVAutomation,
  };
};
