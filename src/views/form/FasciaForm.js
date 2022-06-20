import { Card, CardHeader, CardTitle, CardBody, FormGroup, Row, Col, Input, Form, Button, Label} from 'reactstrap'

const FasciaForm = () => { 
    return ( 
      <> 
      <Card>
      <CardHeader>
        <CardTitle><p>Please enter below the Exhibitor name, which you require, on the fascia. This will be provided in block letters, white standard
      English Alphabet (maximum 30 letters).</p> </CardTitle>
      </CardHeader>
      

      <CardBody>
        <Form>
          <Row>
            <Col md='12' sm='12'>
              <FormGroup>
                <Label for='nameMulti'>FASCIA NAME<span style={{color:'red', fontSize: 18}} >*</span></Label>
                <Input type='text' name='name' id='nameMulti' required/>
              </FormGroup>
            </Col>
            </Row>
            <br/>
          
              
        </Form>
      </CardBody>
    </Card>
      </>
        )
      }
  export default FasciaForm