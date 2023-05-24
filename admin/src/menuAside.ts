import {
  mdiAccountCircle,
  mdiMonitor,
  mdiLock,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiBookMultipleOutline,
} from '@mdi/js'
import { MenuAsideItem } from './interfaces'

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard',
  },
  {
    label: 'Tables',
    icon: mdiTable,
    menu: [
      {
        href: '/coursesTables',
        label: 'Courses table',
        icon: mdiTable,
      },
      {
        href: '/newsTables',
        label: 'News table',
        icon: mdiTable,
      },
    ],
  },
  {
    label: 'Add',
    icon: mdiViewList,
    menu: [
      {
        href: '/courses',
        label: 'Courses',
        icon: mdiSquareEditOutline,
      },
      {
        href: '/news',
        label: 'News',
        icon: mdiSquareEditOutline,
      },
      {
        label: 'Categories',
        icon: mdiBookMultipleOutline,
        menu: [
          {
            href: '/courseCategories',
            label: 'Course',
            icon: mdiSquareEditOutline,
          },
          {
            href: '/newsCategories',
            label: 'News',
            icon: mdiSquareEditOutline,
          },
        ],
      },
    ],
  },

  // {
  //   href: '/news',
  //   label: 'News',
  //   icon: mdiSquareEditOutline,
  // },
  // {
  //   href: '/categories',
  //   label: 'Categories',
  //   icon: mdiSquareEditOutline,
  // },
  // {
  //   href: '/courses',
  //   label: 'Courses',
  //   icon: mdiSquareEditOutline,
  // },
  // {
  //   href: '/ui',
  //   label: 'UI',
  //   icon: mdiTelevisionGuide,
  // },
  // {
  //   href: '/responsive',
  //   label: 'Responsive',
  //   icon: mdiResponsive,
  // },
  // {
  //   href: '/',
  //   label: 'Styles',
  //   icon: mdiPalette,
  // },
  {
    href: '/profile',
    label: 'Profile',
    icon: mdiAccountCircle,
  },
  {
    href: '/login',
    label: 'Login',
    icon: mdiLock,
  },
  // {
  //   href: '/error',
  //   label: 'Error',
  //   icon: mdiAlertCircle,
  // },
]

export default menuAside
