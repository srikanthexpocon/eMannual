import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import Support from './Support'
import LogOut from './LogOut'


const FormLayouts = () => {
  return (
    <Fragment>
      {/* <Breadcrumbs breadCrumbTitle='Associate Member' breadCrumbParent='Form' breadCrumbActive='Associate Member' /> */}
      <Row>
        <Col sm='12'>
          <Support /> 
          <LogOut />       
        </Col>
      </Row>
    </Fragment>

    
  )
}
export default FormLayouts
