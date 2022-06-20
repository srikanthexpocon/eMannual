// import { AlignCenter } from 'react-feather'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import { Card, CardHeader, CardTitle, CardBody, FormGroup, Row, Col, Input, Form, Button, Label, CustomInput } from 'reactstrap'


const colourOptions = [
  { value: 'select', label: 'Select' },
  { value: 'Active', label: 'Active' },
  { value: 'In-Active', label: 'In-Active' } 
]

const AddExibitiors = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h1'>Add Exibitior</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col md='12' sm='12'>
              <FormGroup>
                <Label for='nameMulti'>Name<span style={{color:'red', fontSize: 18}} >*</span></Label>
                <Input type='text' name='name' id='nameMulti' required/>
              </FormGroup>
            </Col>
            <Col md='12' sm='12'>
              <FormGroup>
                <Label for='email'>Email<span style={{color:'red', fontSize: 18}} >*</span></Label>
                <Input placeholder="Enter Your Email" id='email'/>
              </FormGroup>
            </Col>
            <Col md='12' sm='12'>
              <FormGroup>
                <Label for='Password'>Password<span style={{color:'red', fontSize: 18}} >*</span></Label>
                <Input type='password' name='password' id='password'/>
              </FormGroup>
            </Col>
            <Col>
            <CustomInput
            type='checkbox'
            className='custom-control-Primary'
            id='Primary'
            label='Auto Generate'
            
            inline
            />
            </Col>
            <br />
            <Col md='12' sm='12'>
              <FormGroup>
                <Label for='Password'>Contact No.<span style={{color:'red', fontSize: 18}} >*</span></Label>
                <Input type='phone' name='password' id='contact'/>
              </FormGroup>
            </Col>
            <br />
            <Col md='12' sm='12'>
              <FormGroup>
                <Label for='Password'>Stall No.<span style={{color:'red', fontSize: 18}} >*</span></Label>
                <Input type='phone' name='password' id='stall'/>
              </FormGroup>
            </Col>
            <br />
            <Col md='12' sm='12'>
            <FormGroup>
                <Label for='CountryMulti'>Status<span style={{color:'red', fontSize: 18}} >*</span></Label>
                {/* <Label>Basic</Label> */}
            <Select
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              defaultValue={colourOptions[0]}
              options={colourOptions}
              isClearable={false}
            />
              </FormGroup>
              
            </Col>
            <br />
            </Row>
            <br/>
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
        </Form>
      </CardBody>
    </Card>
  )
}
export default AddExibitiors
