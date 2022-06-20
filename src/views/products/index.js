import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import AddProduct from './AddProduct'
import Categories from './Categories'
import AllProducts from './AllProducts'


const FormLayouts = () => {
  return (
    <Fragment>
      {/* <Breadcrumbs breadCrumbTitle='Associate Member' breadCrumbParent='Form' breadCrumbActive='Associate Member' /> */}
      <Row>
        <Col sm='12'>
          <AddProduct />
          <AllProducts />
          <Categories />        
        </Col>
      </Row>
    </Fragment>

    
  )
}
export default FormLayouts
