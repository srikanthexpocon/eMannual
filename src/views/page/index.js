import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import AllPages from './AllPages'
import Categories from './Categories'
import AddPages from './AddPages'

const FormLayouts = () => {
  return (
    <Fragment>
      {/* <Breadcrumbs breadCrumbTitle='Associate Member' breadCrumbParent='Form' breadCrumbActive='Associate Member' /> */}
      <Row>
        <Col sm='12'>
          <AllPages />
          <AddPages />
          <Categories />
        </Col>
      </Row>
    </Fragment>

    
  )
}
export default FormLayouts
