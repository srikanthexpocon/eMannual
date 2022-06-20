import { lazy } from 'react'

const OrdersRoutes = [
  // Dashboards
  {
    path: '/orders/AllOrders',
    component: lazy(() => import('../../views/orders/AllOrders'))
  },
  {
    path: '/orders/AddOrder',
    component: lazy(() => import('../../views/orders/AddOrder'))
  },
  {
    path: '/orders/Coupons',
    component: lazy(() => import('../../views/orders/Coupons'))
  },
  {
    path: '/orders/Reports',
    component: lazy(() => import('../../views/orders/Reports'))
  },
  {
    path: '/orders/SettingsOrders',
    component: lazy(() => import('../../views/orders/SettingsOrders'))
  }
  
]

export default OrdersRoutes