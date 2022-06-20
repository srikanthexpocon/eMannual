import { lazy } from 'react'

const PageRoutes = [
  // Dashboards
  {
    path: '/page/AllPages',
    component: lazy(() => import('../../views/page/AllPages'))
  },
  {
    path: '/page/AddPages',
    component: lazy(() => import('../../views/page/AddPages'))
  },
  {
    path: '/page/user/list',
    component: lazy(() => import('../../views/page/user/list'))
  }
  // {
  //   path: '/page/Categories',
  //   component: lazy(() => import('../../views/page/Categories'))
  // }
  
]

export default PageRoutes