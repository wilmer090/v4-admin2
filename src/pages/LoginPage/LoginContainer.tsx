import React from 'react';
import { useClientService } from 'shared/services/clientService';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.primaryColor};
`;

const LoginContainer: React.FC = () => {
  const { getClients } = useClientService();
  const { data, isLoading } = getClients();
  console.log('error', data);

  return (
    <div>
      <Title>{isLoading}</Title>
      <pre>{JSON.stringify(data, null, 0)}</pre>
    </div>
  );
};

export default LoginContainer;
