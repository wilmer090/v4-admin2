export const ROUTES = {
  LOGIN: '/',
  ADMIN: {
    CLIENTS: '/admin/clients',
    EDITCLIENT: '/admin/clients/edit-client',
    MAILER: '/admin/clients/mailer',
    EDITKEYWORDS: '/admin/clients/edit-keywords',
    MANAGEPLAN: '/admin/clients/manage-plan',
  },
  ONLINE: {
    URLCHECKER: '/url-checker',
    LIST: '/url-list',
    CREATE: '/url-list/create',
    EDIT: '/url-list/edit',
  },
  PUBLICATIONS: {
    LIST: {
      LIST: '/publications/list',
      CREATE: '/publications/list/create',
      EDIT: '/publications/list/edit',
    },
    TIME_SLOTS: '/publications/time-slot',
  },
  PRINT: {
    DOWNLOAD: '/print-download',
    PRINTMEDIA: '/print-media',
    PRINTADS: '/print-ads',
    UNVERIFIEDADS: '/unverified-ads',
    EDIT: '/edit',
  },
  RADIO: {
    RADIOCLIPS: '/radio-clips',
    RADIOADS: '/radio-ads',
    CREATE: '/create-radio',
    EDIT: '/edit-radio',
  },
  TV: {
    PROGRAMSETUP: {
      LIST: '/tv/program-setup',
      CREATE: '/tv/program-setup/create',
      EDIT: '/tv/program-setup/edit',
    },
    TVCLIPS: {
      LIST: '/tv-clips/list',
      CREATE: '/tv-clips/list/create',
      EDIT: '/tv-clips/list/edit',
    },
    TVADS: {
      LIST: '/tv-ads',
      CREATE: '/tv-ads/create',
    },
  },
  AUTHORS: {
    LIST: {
      LIST: '/authors',
      CREATE: '/authors/create',
      EDIT: '/authors/edit',
    },
  },
};
