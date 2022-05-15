import styled from 'styled-components';

export const Backdrop = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;
