import { Info, User, Users, Copy, ExternalLink, Book, FileText, CreditCard, Settings } from 'react-feather'

export default [

    {
        header: 'Pages'
      },

      {
        id: 'all-pages',
        title: 'All Pages',
        icon: <Users size={20} />,
        navLink: '/page/allpages'
      },

      {
        id: 'add-page',
        title: 'Add Page',
        icon: <Users size={20} />,
        navLink: '/page/addpages'
      },
      {
        id: 'page-users',
        title: 'Categories',
        icon: <CreditCard size={20} />,
        navLink: '/page/user/list'
      }

      // {
      //   id: 'categories',
      //   title: 'Categories',
      //   icon: <Users size={20} />,
      //   navLink: '/page/categories'
      // }

    ]         