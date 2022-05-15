import { Button as AntButton } from 'antd';
import styled from 'styled-components';

import { ButtonBaseStyles } from './ButtonBase';

const Button = styled(AntButton)`
  ${ButtonBaseStyles}
`;
Button.defaultProps = {
  variant: 'primary',
};

export default Button;
