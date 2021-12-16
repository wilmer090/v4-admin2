import { LoginPage } from 'pages/LoginPage';
import { ClientsPage } from 'pages/AdminPage/Clients';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import { ROUTES } from 'shared/constants/ROUTES';
const Routes: React.FC = () => {
  return (
    <RouterRoutes>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      {/* Admin */}
      <Route path={ROUTES.ADMIN.CLIENTS} element={<ClientsPage />} />
    </RouterRoutes>
  );
};

export default Routes;
