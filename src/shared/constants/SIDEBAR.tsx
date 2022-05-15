import { MdLanguage, MdLibraryBooks, MdOutlineComputer, MdRadio, MdTv } from 'react-icons/md';
import { SidebarMenuProps } from 'shared/interfaces/utils/ISidebar';

import { ROUTES } from './ROUTES';

export const SIDEBAR_MENU_LIST: SidebarMenuProps[] = [
  {
    title: 'Admin',
    Icon: <MdOutlineComputer />,
    children: [
      {
        title: 'Clients',
        to: ROUTES.ADMIN.CLIENTS,
      },
    ],
  },
  {
    title: 'Print',

    Icon: <MdRadio />,
    children: [
      {
        title: 'Download',
        to: ROUTES.PRINT.DOWNLOAD,
      },
      {
        title: 'Print Media',
        to: ROUTES.PRINT.PRINTMEDIA,
      },
      {
        title: 'Print Ads',
        to: ROUTES.PRINT.PRINTADS,
      },
      {
        title: 'Unverified Ads',
        to: ROUTES.PRINT.UNVERIFIEDADS,
      },
    ],
  },
  {
    title: 'TV',
    Icon: <MdTv />,
    children: [
      {
        title: 'Program Setup',
        to: ROUTES.TV.PROGRAMSETUP.LIST,
      },
      {
        title: 'TV Clips',
        to: ROUTES.TV.TVCLIPS.LIST,
      },
      {
        title: 'TV Ads',
        to: ROUTES.TV.TVADS.LIST,
      },
    ],
  },
  {
    title: 'Radio',
    Icon: <MdRadio />,
    children: [
      {
        title: 'Radio Clips',
        to: ROUTES.RADIO.RADIOCLIPS,
      },
      {
        title: 'Radio Ads',
        to: ROUTES.RADIO.RADIOADS,
      },
    ],
  },
  {
    title: 'Online',
    Icon: <MdLanguage />,
    children: [
      {
        title: 'URL Checker',
        to: ROUTES.ONLINE.URLCHECKER,
      },
      {
        title: 'Online News List',
        to: ROUTES.ONLINE.LIST,
      },
    ],
  },
  {
    title: 'Publications',
    Icon: <MdLibraryBooks />,
    children: [
      {
        title: 'List',
        to: ROUTES.PUBLICATIONS.LIST.LIST,
      },
      {
        title: 'Time Slots',
        to: ROUTES.PUBLICATIONS.TIME_SLOTS,
      },
    ],
  },
  {
    title: 'Authors',
    Icon: <MdLibraryBooks />,
    children: [
      {
        title: 'List',
        to: ROUTES.AUTHORS.LIST.LIST,
      },
    ],
  },
];
