// ** Routes Imports
import AppRoutes from './Apps'
import FormRoutes from './Forms'

import PageRoutes from './Page'
import FormsRoutes from './Form'
import SupportRoutes from './Support'
import PagesRoutes from './Pages'
import TablesRoutes from './Tables'
import ChartMapsRoutes from './ChartsMaps'
import DashboardRoutes from './Dashboards'
import UiElementRoutes from './UiElements'
import ExtensionsRoutes from './Extensions'
import PageLayoutsRoutes from './PageLayouts'
import OrdersRoutes from './Orders'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/apps/mydashboard'

// ** Merge Routes
const Routes = [
  ...DashboardRoutes,
  ...AppRoutes,

  ...PageRoutes,
  ...FormsRoutes,
  ...OrdersRoutes,
  ...SupportRoutes,
  ...PagesRoutes,
  ...UiElementRoutes,
  ...ExtensionsRoutes,
  ...PageLayoutsRoutes,
  ...FormRoutes,
  ...TablesRoutes,
  ...ChartMapsRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
