import { lazy } from 'react'

const ProductsRoutes = [
  // Dashboards
  {
    path: '/products/AllProducts',
    component: lazy(() => import('../../views/products/AllProducts'))
  },
  {
    path: '/products/AddProduct',
    component: lazy(() => import('../../views/products/AddProduct'))
  },
  {
    path: '/products/Categories',
    component: lazy(() => import('../../views/products/Categories'))
  }
  
  
]

export default ProductsRoutes