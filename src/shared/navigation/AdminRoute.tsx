import { Layout } from 'components';
import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { ROUTES } from 'shared/constants/ROUTES';
import { authService } from 'shared/services/authService';

type Props = {
  component: React.FC;
  exact?: boolean;
  path: string;
};
const { getProfile } = authService();
const AdminRoute: React.FC<Props> = ({ component: Component, path, exact }) => {
  const profile = getProfile();
  const history = useHistory();
  useEffect(() => {
    if (!profile) {
      history.push(ROUTES.LOGIN);
    }
  }, [profile, history]);
  return (
    <Layout>
      <Route path={path} exact={exact} render={() => <Component />} />
    </Layout>
  );
};

export default AdminRoute;
