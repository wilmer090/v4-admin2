import { Layout, Spin } from 'antd';
import styled from 'styled-components';

const { Content } = Layout;
export const LayoutWrapper = styled(Layout)`
  min-height: 100vh;
`;
export const Main = styled(Content)`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
`;

export const MainWrapper = styled(Layout)`
  padding: 3rem 1.5rem;
  flex: auto;
  position: relative;
`;

export const FallbackSpinner = styled(Spin)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
