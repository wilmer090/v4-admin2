import { useQuery } from 'react-query';
import { useMultiplierDao } from 'shared/dao/multiplierDao';
import { IMultiplierRequestPayload, IMultiplierResponsePayload } from 'shared/interfaces/IMultiplier';

const { getMultipliers: getMultipliersDao } = useMultiplierDao();
export const useMultiplierService = () => {
  const getMultipliers = (payload?: IMultiplierRequestPayload) => {
    const { data, isLoading, isError, error, isFetching, isPreviousData } = useQuery<IMultiplierResponsePayload, Error>(
      ['multipliers', payload],
      () => getMultipliersDao(payload),
    );
    return {
      data,
      isLoading,
      isError,
      error,
      isFetching,
      isPreviousData,
    };
  };

  return {
    getMultipliers,
  };
};
