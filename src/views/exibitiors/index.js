import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Allexibitiors from './Allexibitiors'

import AddExibitiors from './AddExibitiors'

const FormLayouts = () => {
  return (
    <Fragment>
      {/* <Breadcrumbs breadCrumbTitle='Associate Member' breadCrumbParent='Form' breadCrumbActive='Associate Member' /> */}
      <Row>
        <Col sm='12'>
          <Allexibitiors />
          <AddExibitiors />
        </Col>
      </Row>
    </Fragment>

    
  )
}
export default FormLayouts
