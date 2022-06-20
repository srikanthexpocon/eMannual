import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import AddOrder from './AddOrder'
import Reports from './Reports'
import AllOrders from './AllOrders'
import SettingsOrders from './SettingsOrders'

const FormLayouts = () => {
  return (
    <Fragment>
      {/* <Breadcrumbs breadCrumbTitle='Associate Member' breadCrumbParent='Form' breadCrumbActive='Associate Member' /> */}
      <Row>
        <Col sm='12'>
          <AddOrder />
          <AllOrders />
          <Reports />
          <SettingsOrders />
        </Col>
      </Row>
    </Fragment>

    
  )
}
export default FormLayouts
