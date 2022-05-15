import { DefaultOptionType } from 'antd/lib/select';
import { SpinnerWrapper } from 'components/SpinnerWrapper';
import ProgramSetupView from 'pages/TV/ProgramSetup/ProgramSetupView';
import { useEffect, useState, useContext, useMemo } from 'react';
import { useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'shared/constants/ROUTES';
import { BreadcrumbContext } from 'shared/context/Breadcrumb';
import { IAuthor } from 'shared/interfaces/IAuthor';
import { IAVAutomationCreatePayload, IAVAutomationUpdatePayload } from 'shared/interfaces/IAVAutomation';
import { IChannel } from 'shared/interfaces/IChannel';
import { IProgram } from 'shared/interfaces/IProgram';
import { useAuthorService } from 'shared/services/authorService';
import { useAVAutomationService } from 'shared/services/avAutomationService';
import { useChannelService } from 'shared/services/channelService';
import { useProgramService } from 'shared/services/programService';
import { Alert } from 'shared/theme/elements';
import { useDebounce } from 'use-debounce';

const ProgramSetupContainer = () => {
  const { setAdditionalValue } = useContext(BreadcrumbContext);
  const timeSlots = [
    {
      id: 'monday',
      name: 'Monday',
    },
    {
      id: 'tuesday',
      name: 'Tuesday',
    },
    {
      id: 'wednesday',
      name: 'Wednesday',
    },
    {
      id: 'thursday',
      name: 'Thursday',
    },
    {
      id: 'friday',
      name: 'Friday',
    },
    {
      id: 'saturday',
      name: 'Saturday',
    },
    {
      id: 'sunday',
      name: 'Sunday',
    },
  ];
  const user = JSON.parse(localStorage.getItem('user') || '');

  const history = useHistory();
  const { state } = history.location as any;
  const queryClient = useQueryClient();

  const [selectedChannel, setSelectedChannel] = useState<string>();
  const [, setSelectedProgram] = useState<string>();

  const [authorSearchValue, setAuthorSearchValue] = useState<string>();
  const [authorKeyword] = useDebounce(authorSearchValue, 800);

  const [programSearchValue, setProgramSearchValue] = useState<string>();
  const [programKeyword] = useDebounce(programSearchValue, 800);

  const [channelSearchValue, setChannelSearchValue] = useState<string>();
  const [channelKeyword] = useDebounce(channelSearchValue, 800);

  const { createAVAutomation, getAVAutomations, updateAVAutomation } = useAVAutomationService();
  const { getAuthors } = useAuthorService();
  const { getChannel } = useChannelService();
  const { getProgram } = useProgramService();

  const { createMutation } = createAVAutomation();
  const { updateMutation } = updateAVAutomation();

  // AV Automation
  const {
    data: automationData,
    isLoading: isAutomationLoading,
    isFetching: isAutomationFetching,
  } = getAVAutomations(state?.id ? { _id: state?.id } : undefined);

  // Author
  const { data: authorData, isLoading: isAuthorLoading } = getAuthors({
    author_name: authorKeyword,
    is_parent: true,
    is_verified: true,
  });

  // Channel
  const { data: channelData, isLoading: isChannelLoading } = getChannel({
    media_source_name: 'video',
    channel_name: channelKeyword,
  });

  // Program
  const { data: programData, isLoading: isProgramLoading } = getProgram({
    channel_id: selectedChannel,
    program_name: programKeyword,
  });

  const handleOnSubmit = (payload: IAVAutomationCreatePayload | IAVAutomationUpdatePayload, image?: File) => {
    if (automationData?.data[0]) {
      updateMutation.mutateAsync(
        {
          data: { _id: automationData.data[0]._id, updated_by: user?._id, ...payload },
          image,
        },
        {
          onSuccess: () => {
            Alert.success('Program Setup Updated!');
            history.push(ROUTES.TV.PROGRAMSETUP.LIST);
          },
          onError: (error: any) => {
            Alert.error(error.response.data.server_response);
          },
        },
      );
    } else {
      createMutation.mutate(
        { data: { ...payload, created_by: user?._id }, image },
        {
          onSuccess: () => {
            Alert.success('Program Setup Created!');
            history.push(ROUTES.TV.PROGRAMSETUP.LIST);
          },
          onError: (error: any) => {
            Alert.error(error.response.data.server_response);
          },
        },
      );
    }
  };

  /**
   *
   * @param options list
   * @param initialValues from av automation setup (for update)
   * @returns options with initialValues included
   */
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

  const getAutomationData = useMemo(() => automationData?.data.shift(), [automationData?.data]);

  /**
   *
   * @returns Channel Options with Initial Values
   */
  const getChannelData = () => {
    let intialValues: DefaultOptionType[] | undefined = undefined;
    const channels = channelData?.data?.map(({ _id, channel_name }: IChannel) => ({ value: _id, label: channel_name }));

    if (getAutomationData) {
      const channel = getAutomationData?.channel_details;
      if (channel) {
        intialValues = [
          {
            value: channel._id,
            label: channel.channel_name,
          },
        ];
      }
    }

    return initializeOptions(channels, intialValues);
  };

  /**
   *
   * @returns Program Options with Initial Values
   */
  const getProgramData = () => {
    let intialValues: DefaultOptionType[] | undefined = undefined;
    const programs = programData?.data?.map(({ _id, program_name }: IProgram) => ({ value: _id, label: program_name }));

    if (getAutomationData) {
      const program = getAutomationData?.program_details;
      if (program) {
        intialValues = [
          {
            value: program._id,
            label: program.program_name,
          },
        ];
      }
    }

    return initializeOptions(programs, intialValues);
  };

  /**
   *
   * @returns Author Options with Initial Values
   */
  const getAuthorData = () => {
    let intialValues: DefaultOptionType[] | undefined = undefined;
    const authors = authorData?.data?.map(({ _id, author_name }: IAuthor) => ({
      value: _id,
      label: author_name,
    }));

    if (getAutomationData) {
      intialValues = getAutomationData?.anchors.map(({ _id, author_name }) => ({
        value: _id,
        label: author_name,
      }));
    }

    return initializeOptions(authors, intialValues);
  };

  const isLoading = useMemo(
    () => isAutomationFetching || isAutomationLoading || updateMutation.isLoading || createMutation.isLoading,
    [isAutomationFetching, isAutomationLoading, updateMutation.isLoading, createMutation.isLoading],
  );

  useEffect(() => {
    queryClient.invalidateQueries('av_automation');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (getAutomationData) {
      setAdditionalValue(
        `${getAutomationData?.channel_details.channel_name} - ${getAutomationData?.program_details.program_name}`,
      );
    }

    return () => {
      setAdditionalValue(undefined);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [automationData]);

  return (
    <div>
      <SpinnerWrapper spinning={isLoading} position="top">
        <ProgramSetupView
          automationData={getAutomationData}
          channelData={getChannelData()}
          programData={getProgramData()}
          authorData={getAuthorData()}
          timeSlots={timeSlots}
          onSubmit={handleOnSubmit}
          onChannelSelect={(channelId) => setSelectedChannel(channelId)}
          onProgramSelect={(programId) => setSelectedProgram(programId)}
          onAuthorSearch={(value) => setAuthorSearchValue(value)}
          onChannelSearch={(value) => setChannelSearchValue(value)}
          onProgramSearch={(value) => setProgramSearchValue(value)}
          isLoading={isAutomationLoading}
          isAuthorLoading={isAuthorLoading}
          isChannelLoading={isChannelLoading}
          isProgramLoading={isProgramLoading}
          isUpdate={getAutomationData ? true : false}
        />
      </SpinnerWrapper>
    </div>
  );
};

export default ProgramSetupContainer;
