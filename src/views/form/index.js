import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import CleaningForm from './CleaningForm'
import AdditionalFurniture from './AdditionalFurniture'
import ElectricityForm from './ElectricityForm'
import SellerNominatedBooth from './SellerNominatedBooth'
import FasciaForm from './FasciaForm'
import HostsAndHostesses from './HostsAndHostesses'
import PhotoGrapher from './PhotoGrapher'
import Security from './Security'
const FormLayouts = () => {
  return (
    <Fragment>
      {/* <Breadcrumbs breadCrumbTitle='Associate Member' breadCrumbParent='Form' breadCrumbActive='Associate Member' /> */}
      <Row>
        <Col sm='12'>
          <ElectricityForm />
          <CleaningForm />
          <AdditionalFurniture />
          <AvForm />
          <SellerNominatedBooth />
          <FasciaForm />
          <HostsAndHostesses />
          <PhotoGrapher />
          <Security />
        </Col>
      </Row>
    </Fragment>

    
  )
}
export default FormLayouts
