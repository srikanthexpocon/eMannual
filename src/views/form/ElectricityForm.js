import { Card, CardHeader, CardTitle, CardBody, FormGroup, Row, Col, Input, Form, Button, Label, CustomInput} from 'reactstrap'
import React from 'react'
import './forms.css'

const ElectricityForm = () => { 

  const [message, setMessage] = React.useState('')

  const handleChange = event => {
    const result = event.target.value.toUpperCase()

    setMessage(result)
  }
    return ( 
      <> 
    <Card>
        <CardHeader>
          <CardTitle className="heading-color">ADDITIONAL Electricity REQUIREMENT</CardTitle>
        </CardHeader>
        <CardHeader><CardTitle><h4 className='mandatory-heading'>This is mandatory for the Raw Space (Bare Space) Exhibition Booths</h4></CardTitle></CardHeader>
        
        <CardBody>
          <Form> 
            <FormGroup row>
              <Label sm='3' for='Email'>
              Qty
              </Label>
              <Col sm='9'>
                <Input type='text' placeholder='Qty' />
              </Col>
            </FormGroup> 
            <FormGroup row>
              <Label sm='3' for='mobile'>
              Cost (INR)
              </Label>
              <Col sm='9'>
                <Input type='number' name='mobile' id='mobile' value='1500' readOnly/>
              </Col>
            </FormGroup>
            <FormGroup className='mb-0' row>
              <Col className='d-flex' md={{ size: 9, offset: 3 }}>
                <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                  Submit
                </Button.Ripple>
                <Button.Ripple outline color='secondary' type='reset'>
                  Reset
                </Button.Ripple>
              </Col>
            </FormGroup>
          </Form>
          <br />
          <br />
          <hr />
          <h3 className='heading-color'>Terms & Conditions</h3>
          <br />
         <div ><h5><span>1. </span>Power Supply per KW Rs. 5500</h5></div>
         <br />
         <div ><h5><span>2. </span>Connection Charges (by PARAS ART STUDIO)per unit (220v,Single Phase 50hz) Rs. 1500</h5></div>
         <br />
         <div ><h5><span>3. </span>The Connection Charges is mandatory to pay for all Raw Space Exhibitors.</h5></div>
         <br />
         <div ><h5><span>4. </span>In The Shell Scheme Only includes two (3) 60W Spot Lights, One 5/15AMP plug point and 1 KVA Electrical Power for every Booths.</h5></div>
         <br />
         <div ><h5><span>5. </span>For services not stated below, please contact the Official Contractor for a quotation.</h5></div>
         <br />
         <div ><h5><span>6. </span>The supply available is 220V Single Phase 50Hz AC (1-5 KVA only)</h5></div>
         <br />
         <div ><h5><span>7. </span>400V Three Phase 50Hz AC can be provided on additional charges – please email if you require 3 phase power to the above mentioned email address</h5></div>
         <br />
        </CardBody>
      </Card>
      </>
        )
      }
  export default ElectricityForm