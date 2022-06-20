import { lazy } from 'react'

const FromsRoutes = [
  // Dashboards
  {
    path: '/form/ElectricityForm',
    component: lazy(() => import('../../views/form/ElectricityForm'))
  },
  {
    path: '/form/CleaningForm',
    component: lazy(() => import('../../views/form/CleaningForm'))
  },
  {
    path: '/form/AdditionalFurniture',
    component: lazy(() => import('../../views/form/AdditionalFurniture'))
  },
  {
    path: '/form/AvForm',
    component: lazy(() => import('../../views/form/Av Form'))
  },
  {
    path: '/form/SellerNominatedBooth',
    component: lazy(() => import('../../views/form/SellerNominatedBooth'))
  },
  {
    path: '/form/FasciaForm',
    component: lazy(() => import('../../views/form/FasciaForm'))
  },
  {
    path: '/form/HostsAndHostesses',
    component: lazy(() => import('../../views/form/HostsAndHostesses'))
  },
  {
    path: '/form/PhotoGrapher',
    component: lazy(() => import('../../views/form/PhotoGrapher'))
  },
  {
    path: '/form/Security',
    component: lazy(() => import('../../views/form/Security'))
  }
  
]

export default FromsRoutes