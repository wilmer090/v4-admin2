import { Checkbox } from 'antd';
import styled from 'styled-components';

export const LoginWrapper = styled.div`
  min-height: 100vh;
`;

export const LoginContainer = styled.div`
  width: 380px;
  margin: auto;
  padding: 8.5rem 0;
`;

export const LogoContainer = styled.div`
  padding: 0 2rem;
`;

export const LoginCard = styled.div`
  margin-top: 8rem;
`;
export const LoginCardHeader = styled.div`
  .header__title {
    border-bottom: ${({ theme }) => `1px solid ${theme.primaryColor}`};
    padding-bottom: 0.5rem;
  }
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RememberMeCheckbox = styled(Checkbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${({ theme }) => theme.primaryColor};
    border-color: ${({ theme }) => theme.primaryColor};
  }
`;

export const LoginForm = styled.form`
  > .form-space {
    width: 100%;
  }
`;
