import { Card as AntCard } from 'antd';
import styled from 'styled-components';

type CardProps = {
  $fullHeight?: boolean;
};
const Card = styled(AntCard)<CardProps>`
  background-color: #fff;
  height: ${({ $fullHeight }) => $fullHeight && '100%'};
`;

export default Card;
