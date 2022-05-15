import { useState, createContext, FC, useMemo } from 'react';

type BreadcrumbAdditionalValueType = ReturnType<typeof BreadcrumbAdditionalValue>;

const BreadcrumbAdditionalValue = () => {
  const [additionalValue, setAdditionalValue] = useState<string | undefined>();

  return {
    additionalValue,
    setAdditionalValue,
  };
};

export const BreadcrumbContext = createContext<BreadcrumbAdditionalValueType>({} as BreadcrumbAdditionalValueType);

export const BreadcrumbProvider: FC = ({ children }) => {
  const value = BreadcrumbAdditionalValue();
  const memoizedValue = useMemo(() => value, [value]);
  return <BreadcrumbContext.Provider value={memoizedValue}>{children}</BreadcrumbContext.Provider>;
};
