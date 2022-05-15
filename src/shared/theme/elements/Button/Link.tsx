import { Link as ReactLink } from 'react-router-dom';
import styled from 'styled-components';

import { ButtonBaseStyles } from './ButtonBase';

export type CSSButtonProps = {
  variant?: 'primary' | 'outlined';
  $fullwidth?: boolean;
};
const Link = styled(ReactLink)<CSSButtonProps>`
  ${ButtonBaseStyles}
  border: 1px solid;
  &:hover {
    border: 1px solid;
  }
`;
Link.defaultProps = {
  variant: 'primary',
};
export default Link;
