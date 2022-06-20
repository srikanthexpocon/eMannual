import { Info, User, Users, Copy, ExternalLink, Book, FileText, CreditCard, Settings } from 'react-feather'

export default [

    {
        header: 'Orders'
      },

      {
        id: 'all-orders',
        title: 'All Orders',
        icon: <Users size={20} />,
        navLink: '/orders/allorders'
      },

      {
        id: 'add-order',
        title: 'Add Order',
        icon: <Users size={20} />,
        navLink: '/orders/addorder'
      },
      {
        id: 'coupons',
        title: 'Coupons',
        icon: <Users size={20} />,
        navLink: '/orders/coupons'
      },
      {
        id: 'order-reports',
        title: 'Reports',
        icon: <Users size={20} />,
        navLink: '/orders/reports'
      },

      {
        id: 'orders-settings',
        title: 'Settings',
        icon: <Settings size={20} />,
        navLink: '/orders/settingsorders'
      }


    ]         