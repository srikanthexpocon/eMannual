import { lazy } from 'react'

const SupportRoutes = [
  // Dashboards
  {
    path: '/support/Support',
    component: lazy(() => import('../../views/support/Support'))
  }
    
]

export default SupportRoutes