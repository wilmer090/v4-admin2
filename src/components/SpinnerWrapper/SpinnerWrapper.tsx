import { SpinProps } from 'antd';
import { FC } from 'react';
import { Spinner } from 'shared/theme/elements';

interface Props extends SpinProps {
  position?: string;
}

const SpinnerWrapper: FC<Props> = ({ children, ...rest }) => {
  return <Spinner {...rest}>{children}</Spinner>;
};

export default SpinnerWrapper;
