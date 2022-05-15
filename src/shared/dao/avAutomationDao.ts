import { ENDPOINTS } from 'shared/constants/ENDPOINTS';
import { useAxios } from 'shared/hooks/useAxios';
import {
  IAVAutomationCreatePayload,
  IAVAutomationDeletePayload,
  IAVAutomationRequestPayload,
  IAVAutomationResponsePayload,
  IAVAutomationUpdatePayload,
} from 'shared/interfaces/IAVAutomation';
import { transformPayload } from 'shared/utils/transformPayload';

export const useAVAutomationDao = () => {
  const { GET, POST, DELETE } = useAxios();

  const getAVAutomation = async (payload?: IAVAutomationRequestPayload) => {
    const transformedPayload = transformPayload<IAVAutomationRequestPayload>(payload);

    const response = await GET<IAVAutomationResponsePayload>({
      url: ENDPOINTS.AV_AUTOMATION,
      params: {
        token: transformedPayload,
      },
    });

    return response.data;
  };

  const getSingleAVAutomation = async (payload?: IAVAutomationRequestPayload) => {
    const transformedPayload = transformPayload<IAVAutomationRequestPayload>(payload);

    const response = await GET<IAVAutomationResponsePayload>({
      url: `${ENDPOINTS.AV_AUTOMATION}/show`,
      params: {
        token: transformedPayload,
      },
    });

    return response.data;
  };

  const createAVAutomation = async (payload?: { data?: IAVAutomationCreatePayload; image?: File }) => {
    const transformedPayload = transformPayload<IAVAutomationCreatePayload>(payload?.data);
    const formData = new FormData();
    formData.append('token', transformedPayload);
    if (payload?.image) formData.append('image', payload?.image);

    const response = await POST({
      url: `${ENDPOINTS.AV_AUTOMATION}/create`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  };

  const updateAVAutomation = async (payload?: { data?: IAVAutomationUpdatePayload; image?: File }) => {
    const transformedPayload = transformPayload<IAVAutomationUpdatePayload>(payload?.data);
    const formData = new FormData();
    formData.append('token', transformedPayload);

    if (payload?.image) formData.append('image', payload?.image);

    const response = await POST({
      url: `${ENDPOINTS.AV_AUTOMATION}/update`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  };

  const deleteAVAutomation = async (payload?: IAVAutomationDeletePayload) => {
    const transformedPayload = transformPayload<IAVAutomationDeletePayload>(payload);

    const response = await DELETE({
      url: `${ENDPOINTS.AV_AUTOMATION}/delete`,
      params: {
        token: transformedPayload,
      },
    });

    return response.data;
  };

  return {
    getAVAutomation,
    getSingleAVAutomation,
    createAVAutomation,
    updateAVAutomation,
    deleteAVAutomation,
  };
};
