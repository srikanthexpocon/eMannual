import { Info, User, CreditCard, Copy, ExternalLink, Book, FileText} from 'react-feather'

export default [

    {
        header: 'Forms'
      },

      {
        id: 'electricity-forms',
        title: 'Electricity Form',
        icon: <CreditCard size={20} />,
        navLink: '/form/electricityform'
      },

      {
        id: 'cleaning-form',
        title: 'Cleaning Form',
        icon: <CreditCard size={20} />,
        navLink: '/form/cleaningform'
      },

      {
        id: 'furniture-form',
        title: 'Additional Furniture Form',
        icon: <CreditCard size={20} />,
        navLink: '/form/additionalfurniture'
      },

      {
        id: 'av-form',
        title: 'Av Form',
        icon: <CreditCard size={20} />,
        navLink: '/form/avform'
      },

      {
        id: 'seller-form',
        title: 'Seller Nominated Booth Form',
        icon: <CreditCard size={20} />,
        navLink: '/form/sellernominatedbooth'
      },

      {
        id: 'fascia-form',
        title: 'Fascia Form',
        icon: <CreditCard size={20} />,
        navLink: '/form/fasciaform'
      },
      {
        id: 'man-power',
        title: 'Man-Power Service Form',
        icon: <CreditCard size={20} />,        
        children: [
          {
            id: 'hosts',
            title: 'Hosts And Hostesses',
            icon: <CreditCard size={12} />,
            navLink: '/form/hostsAndhostesses'
          },
          {
            id: 'photographer',
            title: 'Photographer',
            icon: <CreditCard size={12} />,
            navLink: '/form/photographer'
          },
          {
            id: 'security',
            title: 'Security',
            icon: <CreditCard size={12} />,
            navLink: '/form/security'
          }
          
        ]
      }


    ]         