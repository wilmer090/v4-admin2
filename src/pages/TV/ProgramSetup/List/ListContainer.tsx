import { Modal } from 'antd';
import { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'shared/constants/ROUTES';
import { usePagination } from 'shared/hooks/usePagination';
import { IAVAutomation } from 'shared/interfaces/IAVAutomation';
import { IChannel } from 'shared/interfaces/IChannel';
import { IProgram } from 'shared/interfaces/IProgram';
import { useAVAutomationService } from 'shared/services/avAutomationService';
import { useChannelService } from 'shared/services/channelService';
import { useProgramService } from 'shared/services/programService';
import { Alert } from 'shared/theme/elements';
import { useDebounce } from 'use-debounce';

import ListView from './ListView';

const { confirm } = Modal;

const ListContainer = () => {
  const queryClient = useQueryClient();
  const history = useHistory();

  const channelState = useState<string>();
  const [selectedChannel, setSelectedChannel] = channelState;
  const [selectedProgram, setSelectedProgram] = useState<string>();

  const { getChannel } = useChannelService();
  const { getProgram } = useProgramService();

  const [programSearchValue, setProgramSearchValue] = useState<string>();
  const [programKeyword] = useDebounce(programSearchValue, 800);

  const [channelSearchValue, setChannelSearchValue] = useState<string>();
  const [channelKeyword] = useDebounce(channelSearchValue, 800);

  const { data: channelData, isLoading: isChannelLoading } = getChannel({
    media_source_name: 'video',
    channel_name: channelKeyword,
  });

  // Program
  const { data: programData, isLoading: isProgramLoading } = getProgram({
    channel_id: selectedChannel,
    program_name: programKeyword,
  });

  const { page, pageSize, handlePageChange, handlePageSizeChange } = usePagination();
  const { getAVAutomations, deleteAVAutomation } = useAVAutomationService();
  const { data: avAutomationData, isLoading: avAutomationDataLoading } = getAVAutomations({
    page: page,
    limit: pageSize,
    sort: '',
    channel_obj_id: selectedChannel,
    program_obj_id: selectedProgram,
  });

  const deleteSetup = (id: string) => {
    const { deleteMutation } = deleteAVAutomation();

    return new Promise((resolve, reject) => {
      deleteMutation.mutateAsync(
        { _id: id },
        {
          onSuccess: () => {
            resolve(true);
            Alert.success('Program Setup Deleted!');
            queryClient.invalidateQueries('av_automation');
          },
          onError: (error: any) => {
            reject();
            Alert.error(error.response.data.server_response);
          },
        },
      );
    });
  };

  const handleOnEdit = (id: string) => {
    history.push(ROUTES.TV.PROGRAMSETUP.EDIT, {
      id,
    });
  };

  const handleOnDelete = (
    id: string,
    channel: Pick<IAVAutomation, 'channel_details'>['channel_details'],
    program: Pick<IAVAutomation, 'program_details'>['program_details'],
  ) => {
    confirm({
      centered: true,
      title: 'Delete Program Setup',
      content: `Are you sure you want to delete '${program.program_name}' on '${channel.channel_name}' channel`,
      onOk: async () => await deleteSetup(id),
      okButtonProps: {
        danger: true,
        size: 'large',
        style: { borderRadius: '4px', fontSize: '14px' },
      },
      cancelButtonProps: {
        size: 'large',
        style: { borderRadius: '4px', fontSize: '14px' },
      },
      okText: 'Delete',
    });
  };

  const handleOnFilter = (channelId?: string, programId?: string) => {
    setSelectedChannel(channelId);
    setSelectedProgram(programId);
  };

  const handleOnFilterClear = () => {
    setSelectedChannel(undefined);
    setSelectedProgram(undefined);
  };

  const getFilterSelectData = (filter: string) => {
    switch (filter) {
      case 'channel':
        return channelData?.data?.map(({ _id, channel_name }: IChannel) => ({ value: _id, label: channel_name }));
      case 'program':
        return programData?.data?.map(({ _id, program_name }: IProgram) => ({ value: _id, label: program_name }));
      default:
        return undefined;
    }
  };

  useEffect(() => {
    queryClient.invalidateQueries('av_automation');
  }, [queryClient]);

  return (
    <ListView
      data={avAutomationData}
      isLoading={avAutomationDataLoading}
      handlePageChange={handlePageChange}
      handlePageSize={handlePageSizeChange}
      onDelete={handleOnDelete}
      onEdit={handleOnEdit}
      onFilter={handleOnFilter}
      onFilterClear={handleOnFilterClear}
      onChannelSearch={(value) => setChannelSearchValue(value)}
      onProgramSearch={(value) => setProgramSearchValue(value)}
      channelData={{
        data: getFilterSelectData('channel'),
        isLoading: isChannelLoading,
      }}
      programData={{
        data: getFilterSelectData('program'),
        isLoading: isProgramLoading,
      }}
    ></ListView>
  );
};

export default ListContainer;
