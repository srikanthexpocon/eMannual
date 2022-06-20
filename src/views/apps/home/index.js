import {
     CardText, Badge, CardTitle, Input, Row, Col, Card, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap'
import {
    Calendar,
  Plus,
  Search,
  Users,
  ArrowRightCircle
} from 'react-feather'
import { useState } from 'react'
import Popup from './Popup'
import classnames from 'classnames'
import Avatar from '@components/avatar'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom"
  import Dream from "./AIOC-LOGO.png"
  import Pune from "./56th.jpg"
  import Edited from "./edited.jpg"
  // import TableMultilingual from "./basic/TableMultilingual"
  import Table from "./user/list/Table"
  

const Home = () => {
    const [basicModal, setBasicModal] = useState(false)
    const avatarArr = [
        {
          img: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
          imgHeight: 34,
          imgWidth: 34
        },
        {
          content: 'PI',
          color: 'light-danger'
        },
        {
          img: require('@src/assets/images/portrait/small/avatar-s-14.jpg').default,
          imgHeight: 34,
          imgWidth: 34
        },
        {
          img: require('@src/assets/images/portrait/small/avatar-s-7.jpg').default,
          imgHeight: 34,
          imgWidth: 34
        },
        {
          content: 'AL',
          color: 'light-secondary'
        }
      ]
    
      const designPlanningArr = [
        {
          title: 'Start Date',
          subtitle: '12 June, 21',
          time: '8:00 AM'
        },
        {
            title: 'End Date',
            subtitle: '22 June, 21',
            time: '4:00 PM'
          }
      ]
    return (
      <>
        <div id='dashboard-ecommerce'>
            <Row style={{margin:' 0px 20px'}}>
                <Col md='6'>
                <Col className='d-flex align-items-center justify-content-end mt-1' md='6' sm='12'>
                  <Label className='mr-1' for='search-input'>
                  <Search size={30}/>
                  </Label>
                  <Input
                    className='mb-50'
                    type='text'
                    bsSize='sm'
                    id='search-input'
                    placeholder='Search Events'
                  />
                </Col>
                </Col>
                <Col md='6' style={{justifyContent:"right", width:'100%', display:'flex'}}><Popup/></Col>
            </Row>
            <Row className="pt-3" style={{margin:'20px 20px', backgroundColor: "white"}}>
          <Col md='3'>
          <Card className='card-app-design'>
      <CardBody>
        {/* <Badge color='light-primary'>03 Sep, 20</Badge> */}
        <div className='d-flex'>
        <img width="35%" height="30%"  className='img-fluid' src={Dream} alt='Logo' />
        <div>
        <CardTitle className='mt-1 mb-75'>AIOC 2022</CardTitle>
        <CardText className='font-small-2 mb-2'>
          <span  className='section-label'>VENUE: </span>
          Jio World Centre 3V78+6MG, G Block, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra
          AIOC 2022 - Mumbai
        </CardText>
        </div>        
        </div>
        <div className='d-flex'>
        <div className='design-group mb-2 mt-2 pt-50'>
          <h6 className='section-label'>Event Status</h6>
          <Badge className='mr-1' color='success'>
          Active 
          </Badge>
        </div>
        <div className='design-group mb-2 ml-2 mt-2 pt-50'>
          <h6 className='section-label'>Event Code</h6>
          <Badge className='mr-1' style={{ backgroundColor : "black" }}>
          A1BZ3S
          </Badge>
        </div>
        </div>
        
        <h6 className='section-label'>Time Line</h6>
        <div className='design-planning-wrapper mb-2 py-75'>
          {designPlanningArr.map(item => (
            <div key={item.title} className='design-planning'>
              <CardText className='mb-25'>{item.title}</CardText>
              <h6 className='mb-0'>{item.subtitle}</h6>
               {/* <Badge style={{marginTop:'10px'}} color='light-primary'>{item.time}</Badge> */}
            </div>
          ))}
        </div>
        <Link to='/apps/mydashboard'>
      <Button.Ripple color='primary' block>
        <span className='pr-1' size={10}><ArrowRightCircle /></span>View Event
      </Button.Ripple>
      </Link>      
      </CardBody>
    </Card>
          </Col>
          <Col md='3'>
          <Card className='card-app-design'>
      <CardBody>
        {/* <Badge color='light-primary'>03 Sep, 20</Badge> */}
        <div className='d-flex'>
        <img width='25%' className='img-fluid' src={Pune} alt='Logo' />
        <div>
        <CardTitle className='mt-1 ml-1 mb-75'>56th IOC conference 2022</CardTitle>
        <CardText className='font-small-2 ml-1 mb-2'>
          <span  className='section-label'>VENUE: </span>
          Bharati Vidyapeeth Campus Bharati Vidyapeeth Campus, Pune, Maharashtra
          56th IOC conference 2022 - Pune
        </CardText>
        </div>        
        </div>
        <div className='d-flex'>
        <div className='design-group mb-2 mt-2 pt-50'>
          <h6 className='section-label'>Event Status</h6>
          <Badge className='mr-1' color='success'>
          Active 
          </Badge>
        </div>
        <div className='design-group mb-2 ml-2 mt-2 pt-50'>
          <h6 className='section-label'>Event Code</h6>
          <Badge className='mr-1' style={{ backgroundColor : "black" }}>
          C1NBK3
          </Badge>
        </div>
        </div>
        <h6 className='section-label'>Time Line</h6>
        <div className='design-planning-wrapper mb-2 py-75'>
          {designPlanningArr.map(item => (
            <div key={item.title} className='design-planning'>
              <CardText className='mb-25'>{item.title}</CardText>
              <h6 className='mb-0'>{item.subtitle}</h6>
          {/* <Badge style={{marginTop:'10px'}} color='light-primary'>{item.time}</Badge> */}
            </div>
          ))}
        </div>
        <Link to='/apps/mydashboard'>
          <Button.Ripple color='primary' block>
            <span className='pr-1' size={10}><ArrowRightCircle /></span>View Event
          </Button.Ripple>
        </Link>      
        </CardBody>
        </Card>
          </Col>
          <Col md='3'>
          <Card className='card-app-design'>
      <CardBody>
      <div className='d-flex'>
        <img width='25%' className='img-fluid' src={Edited} alt='Logo' />
        <div>
        <CardTitle className='mt-1 ml-1 mb-75'>HSICON 2022</CardTitle>
        <CardText className='font-small-2 ml-1 mb-2'>
          <span  className='section-label'>VENUE: </span>
          Birla Auditorium - Jaipur Birla Auditorium, Jaipur, Rajasthan
          HSICON 2022 - Jaipur
        </CardText>
        </div>        
        </div>
        <div className='d-flex'>
        <div className='design-group mb-2 mt-2 pt-50'>
          <h6 className='section-label'>Event Status</h6>
          <Badge className='mr-1' color='success'>
          Active 
          </Badge>
        </div>
        <div className='design-group mb-2 ml-2 mt-2 pt-50'>
          <h6 className='section-label'>Event Code</h6>
          <Badge className='mr-1' style={{ backgroundColor : "black" }}>
          B2SR1I
          </Badge>
        </div>
        </div>
        <h6 className='section-label'>Time Line</h6>
        <div className='design-planning-wrapper mb-2 py-75'>
          {designPlanningArr.map(item => (
            <div key={item.title} className='design-planning'>
              <CardText className='mb-25'>{item.title}</CardText>
              <h6 className='mb-0'>{item.subtitle}</h6>
              {/* <Badge style={{marginTop:'10px'}} color='light-primary'>{item.time}</Badge> */}
            </div>
          ))}
        </div>
        <Link to='/apps/mydashboard'>
          <Button.Ripple color='primary' block>
            <span className='pr-1' size={10}><ArrowRightCircle /></span>View Event
          </Button.Ripple>
        </Link>      
              </CardBody>
            </Card>
          </Col>
          <Col md='3'>
          <Card className='card-app-design'>
      <CardBody>
      <div className='d-flex'>
        <img width='25%' className='img-fluid' src={Edited} alt='Logo' />
        <div>
        <CardTitle className='mt-1 ml-1 mb-75'>HSICON 2022</CardTitle>
        <CardText className='font-small-2 ml-1 mb-2'>
          <span  className='section-label'>VENUE: </span>
          Birla Auditorium - Jaipur Birla Auditorium, Jaipur, Rajasthan
          HSICON 2022 - Jaipur
        </CardText>
        </div>        
        </div>
        <div className='d-flex'>
        <div className='design-group mb-2 mt-2 pt-50'>
          <h6 className='section-label'>Event Status</h6>
          <Badge className='mr-1' color='success'>
          Active 
          </Badge>
        </div>
        <div className='design-group mb-2 ml-2 mt-2 pt-50'>
          <h6 className='section-label'>Event Code</h6>
          <Badge className='mr-1' style={{ backgroundColor : "black" }}>
          A2X58H
          </Badge>
        </div>
        </div>
        <h6 className='section-label'>Time Line</h6>
        <div className='design-planning-wrapper mb-2 py-75'>
          {designPlanningArr.map(item => (
            <div key={item.title} className='design-planning'>
              <CardText className='mb-25'>{item.title}</CardText>
              <h6 className='mb-0'>{item.subtitle}</h6>
              {/* <Badge style={{marginTop:'10px'}} color='light-primary'>{item.time}</Badge> */}
            </div>
          ))}
        </div>
        <Link to='/apps/mydashboard'>
          <Button color='primary' block>
            <span className='pr-1' size={10}><ArrowRightCircle /></span>View Event
          </Button>
        </Link>      
              </CardBody>
            </Card>
          </Col>
          </Row>
      </div>
      {/* <Col sm='12'>
          <TableMultilingual />
          
      </Col> */}
        <Col sm='12'>      
        <Table />
        </Col>
      </>
    )
}
export default Home


//////////////
