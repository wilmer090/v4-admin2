import { useQuery } from 'react-query';
import { useProgramDao } from 'shared/dao/programDao';
import { IProgramRequestPayload, IProgramResponsePayload } from 'shared/interfaces/IProgram';

export const useProgramService = () => {
  const { getProgram: getProgramDao } = useProgramDao();

  const getProgram = (payload?: IProgramRequestPayload) => {
    const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery<IProgramResponsePayload, Error>(
      ['program', payload],
      () => getProgramDao(payload),
    );

    return {
      data,
      error,
      isLoading,
      isError,
      isFetching,
      isPreviousData,
    };
  };

  return {
    getProgram,
  };
};
