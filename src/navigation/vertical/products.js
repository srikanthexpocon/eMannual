import { Info, User, Users, Copy, ExternalLink, Book, FileText, CreditCard, Settings } from 'react-feather'

export default [

    {
        header: 'Products'
      },

      {
        id: 'all-products',
        title: 'All Products',
        icon: <Users size={20} />,
        navLink: '/products/allproducts'
      },

      {
        id: 'add-product',
        title: 'Add Product',
        icon: <Users size={20} />,
        navLink: '/products/addproduct'
      },
      {
        id: 'categoriess',
        title: 'Categories',
        icon: <Users size={20} />,
        navLink: '/products/categories'
      }
    
    ]         