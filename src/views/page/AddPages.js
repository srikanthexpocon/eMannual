// import { AlignCenter } from 'react-feather'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import { Card, CardHeader, CardTitle, CardBody, FormGroup, Row, Col, Input, Form, Button, Label, CustomInput } from 'reactstrap'


const colourOptions = [
  { value: 'select', label: 'Select' },
  { value: 'Active', label: 'Active' },
  { value: 'In-Active', label: 'In-Active' } 
]

const AddPages = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h1'>Add Pages</CardTitle>
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
                <Label for='CountryMulti'>Catagiors<span style={{color:'red', fontSize: 18}} >*</span></Label>
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
            <Col md='12' sm='12'>
              <FormGroup>
                <Label for='nameMulti'>Discription<span style={{color:'red', fontSize: 18}} >*</span></Label>
                <Input type='textarea' name='name' id='nameMulti' required/>
              </FormGroup>
            </Col>
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
export default AddPages
