import { LoginPage } from 'pages/LoginPage';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import { ROUTES } from 'shared/constants/ROUTES';
const Routes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
    </RouterRoutes>
  );
};

export default Routes;
