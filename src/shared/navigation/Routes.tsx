import { ClientsPage } from 'pages/AdminPage/Clients';
import { EditClientPage, EditKeywordsPage, MailerPage } from 'pages/AdminPage/Clients/ClientAction';
import { ManagePlanPage } from 'pages/AdminPage/Clients/ClientAction/ManagePlan';
import { AuthorsPage } from 'pages/Authors';
import { AddAuthorPage } from 'pages/Authors/AddAuthor';
import { LoginPage } from 'pages/Login';
import { NotFoundPage } from 'pages/NotFound';
import { UrlListPage } from 'pages/Online/List';
import { OnlineNewsPage } from 'pages/Online/OnlineNews';
import { UrlCheckerPage } from 'pages/Online/UrlChecker';
import { PrintDownloadPage } from 'pages/Print/Download';
import { EditPrintPage } from 'pages/Print/EditPrint';
import { PrintAdsPage } from 'pages/Print/PrintAds';
import { PrintMediaPage } from 'pages/Print/PrintMedia';
import { UnverifiedAdsPage } from 'pages/Print/UnverifiedAds';
import { Publication, PublicationList } from 'pages/Publications';
import { RadioAdsPage } from 'pages/Radio/RadioAds/List';
import { CreateRadioPage } from 'pages/Radio/RadioClips/Create';
import { EditRadioPage } from 'pages/Radio/RadioClips/Edit';
import { RadioClipPage } from 'pages/Radio/RadioClips/List';
import { ProgramSetupPage } from 'pages/TV/ProgramSetup';
import { ProgramSetupList } from 'pages/TV/ProgramSetup/List';
import { TvPage } from 'pages/TV/TV';
import { TvAdsPage } from 'pages/TV/TvAds/List';
import { TvClipsFormPage } from 'pages/TV/TvClips/Create';
import { TvClipsPage } from 'pages/TV/TvClips/List';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from 'shared/constants/ROUTES';

import AdminRoute from './AdminRoute';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.LOGIN} component={LoginPage} />
      {/* Admin */}
      <AdminRoute exact path={ROUTES.ADMIN.CLIENTS} component={ClientsPage} />
      <AdminRoute exact path={ROUTES.ADMIN.EDITCLIENT} component={EditClientPage} />
      <AdminRoute exact path={ROUTES.ADMIN.MAILER} component={MailerPage} />
      <AdminRoute exact path={ROUTES.ADMIN.EDITKEYWORDS} component={EditKeywordsPage} />
      <AdminRoute exact path={ROUTES.ADMIN.MANAGEPLAN} component={ManagePlanPage} />
      <AdminRoute exact path={ROUTES.PUBLICATIONS.LIST.LIST} component={PublicationList} />
      <AdminRoute exact path={ROUTES.PUBLICATIONS.LIST.CREATE} component={Publication} />
      <AdminRoute exact path={ROUTES.PUBLICATIONS.LIST.EDIT} component={Publication} />
      <AdminRoute exact path={ROUTES.AUTHORS.LIST.LIST} component={AuthorsPage} />
      <AdminRoute exact path={ROUTES.AUTHORS.LIST.CREATE} component={AddAuthorPage} />
      <AdminRoute exact path={ROUTES.AUTHORS.LIST.EDIT} component={AddAuthorPage} />
      <AdminRoute exact path={ROUTES.ONLINE.LIST} component={UrlListPage} />
      <AdminRoute exact path={ROUTES.ONLINE.URLCHECKER} component={UrlCheckerPage} />
      <AdminRoute exact path={ROUTES.ONLINE.CREATE} component={OnlineNewsPage} />
      <AdminRoute exact path={ROUTES.ONLINE.EDIT} component={OnlineNewsPage} />
      <AdminRoute exact path={ROUTES.PRINT.PRINTMEDIA} component={PrintMediaPage} />
      <AdminRoute exact path={ROUTES.PRINT.PRINTADS} component={PrintAdsPage} />
      <AdminRoute exact path={ROUTES.PRINT.DOWNLOAD} component={PrintDownloadPage} />
      <AdminRoute exact path={ROUTES.PRINT.UNVERIFIEDADS} component={UnverifiedAdsPage} />
      <AdminRoute exact path={ROUTES.PRINT.EDIT} component={EditPrintPage} />
      <AdminRoute exact path={ROUTES.RADIO.RADIOCLIPS} component={RadioClipPage} />
      <AdminRoute exact path={ROUTES.RADIO.RADIOADS} component={RadioAdsPage} />
      <AdminRoute exact path={ROUTES.RADIO.CREATE} component={CreateRadioPage} />
      <AdminRoute exact path={ROUTES.RADIO.EDIT} component={EditRadioPage} />
      <AdminRoute exact path={ROUTES.TV.PROGRAMSETUP.LIST} component={ProgramSetupList} />
      <AdminRoute exact path={ROUTES.TV.PROGRAMSETUP.CREATE} component={ProgramSetupPage} />
      <AdminRoute exact path={ROUTES.TV.PROGRAMSETUP.EDIT} component={ProgramSetupPage} />
      <AdminRoute exact path={ROUTES.TV.TVCLIPS.LIST} component={TvClipsPage} />
      <AdminRoute exact path={ROUTES.TV.TVCLIPS.CREATE} component={TvClipsFormPage} />
      <AdminRoute exact path={ROUTES.TV.TVCLIPS.EDIT} component={TvClipsFormPage} />
      <AdminRoute exact path={ROUTES.TV.TVADS.LIST} component={TvAdsPage} />
      <AdminRoute exact path={ROUTES.TV.TVADS.CREATE} component={TvPage} />

      <Route exact path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
