import { Card, CardHeader, CardTitle, CardBody, FormGroup, Row, Col, Input, Form, Button, Label, CustomInput} from 'reactstrap'
import React from 'react'
import Isnt from '@src/assets/images/company-name.JPG'
import graphics from '@src/assets/images/4a.JPG'
import fascia from '@src/assets/images/fascia5.JPG'
import fascias from '@src/assets/images/fas.JPG'
import dummy from '@src/assets/images/dummy.JPG'
import './forms.css'

const FasciaForm = () => { 

  const [message, setMessage] = React.useState('')

  const handleChange = event => {
    const result = event.target.value.toUpperCase()

    setMessage(result)
  }
    return ( 
      <> 
      <Card>
      
      <CardHeader>
        <CardTitle><h3 className='heading-color'>FASCIA NAME - SHELL SCHEME PACKAGE</h3> </CardTitle>
      </CardHeader>
      <CardHeader>
        <CardTitle><p>Please enter below the Exhibitor name, which you require, on the fascia. This will be provided in block letters, white standard
      English Alphabet (maximum 30 letters).</p> </CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col md='12' sm='12'>
              <FormGroup>
              <CardTitle className='heading-color'><span>1. </span>FASCIA NAME</CardTitle>
                <Input type='text' name='name' id='nameMulti' value={message}
                onChange={handleChange} required/>
              </FormGroup>
            </Col>
            
            </Row>
            <br/>             
        </Form>
       
        <CardTitle className='heading-color'><span>2. </span>CUSTOMIZE FASCIA</CardTitle>
          <h5>A customized fascia can be ordered additional (at Exhibitor's expense). The Ready to print file of size 48” (W) x 12” (H) can be sent for processing.</h5>
          <br />
          <br />
          <h5>If you wish to have fascia customized, please send a sample with this Form, for quotation by the Official Shell Scheme contractor, PARAS ART STUDIO and tick the box below:</h5>
          <br />
          <Col>
            <CustomInput
            type='checkbox'
            className='custom-control-Primary'
            id='Primary'
            label='Please send us a quotation based on our attached logo (Tick if required)'           
            inline
            />
            </Col>
            <br />
            <br />
            <Col>
              <FormGroup className='d-flex justify-content-center' >
                <Button.Ripple  className='mr-1' color='primary' type='submit'>
                  Submit
                </Button.Ripple>
                <Button.Ripple outline color='secondary' type='reset'>
                  Reset
                </Button.Ripple>
              </FormGroup>
            </Col>
            <hr />
            <div>
            <CardTitle className='heading-color'><span>3. </span>SHELL SCHEME PACKAGE</CardTitle>
            <h5>Fascia Board : Backlit Fascia with Trans lite Size 48” x 12”</h5>
            <br />
            <h5>Carpet Color : Blue Color</h5>
            <br />
            <br />
            </div>
            <div>
            <CardTitle className='heading-color'><span>4. </span>DRAWINGS / DIAGRAMS (3m x 3m Standard Shell Scheme Booth)</CardTitle>
            <p>The perspective, side and elevation views of the Standard Shell Scheme are here as below:</p>
            <img className='img-fluid' style={{margin:'auto', display:'block'}} src={Isnt} alt='Logo' />
            </div>
            <div>
            <CardTitle className='heading-color'><span>4a. </span> DIMENSIONS OF BRANDING AND GRAPHICSOF BOOTH SIZE : 3m x 3m</CardTitle>
            <p>The Dimensions of Branding and Graphics of the Standard Shell Scheme booth are here as below:</p>
            <img className='img-fluid' style={{margin:'auto', display:'block'}} src={graphics} alt='Logo' />
            </div>
            <div>
            <CardTitle className='heading-color'><span>5. </span>. DRAWINGS / DIAGRAMS (3m x 3m Standard Shell Scheme Booth)</CardTitle>
            <p>The perspective, side and elevation views of the Standard Shell Scheme are here as below:</p>
            <img className='img-fluid' style={{margin:'auto', display:'block'}} src={fascia} alt='Logo' />
            <br />
            <img className='img-fluid' style={{margin:'auto', display:'block'}} src={fascias} alt='Logo' />
            <br />
            <img className='img-fluid' style={{margin:'auto', display:'block'}} src={dummy} alt='Logo' />
            </div>
      </CardBody>
    </Card>
      </>
        )
      }
  export default FasciaForm