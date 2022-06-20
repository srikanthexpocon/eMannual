import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label,
  CustomInput,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import { User, Mail, Users, Lock, Calendar, Edit2 } from 'react-feather'
import checkImg from '@src/assets/images/icons8-ok.gif'
import cancelImg from '@src/assets/images/icons8-close-64.png'
// import { Select } from '@mui/material'
import Select from 'react-select'
import {useState} from 'react'
import { selectThemeColors } from '@utils'


const colourOptions = [
  { value: 'Active', label: 'Active' },
  { value: 'In-Active', label: 'In-Active' } 
]

const VerticalFormIcons = () => {
  const [dropdownOpen, setDropDownOpen] = useState(false)
  
  return (
    // <img src={checkImg}></img>
    // <img src={cancelImg}></img>
    
        <Form>          
          <Row>
            <Col>          
            </Col>
            <Col sm='12'>            
              <Label for='nameVerticalIcons'>Name</Label>             
              <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                  <InputGroupText>
                    <Edit2 size={15} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='name' id='nameVerticalIcons' placeholder='Name' />
              </InputGroup>
            </Col>
            
            <Col sm='12'>
            <FormGroup>
                <Label for='CountryMulti'>Status<span style={{color:'red', fontSize: 18}} >*</span></Label>
                {/* <Label>Basic</Label> */}
            <Select
              theme={selectThemeColors}
              className='react-select'
             
              defaultValue={colourOptions[0]}
              options={colourOptions}
              isClearable={false}
            />
              </FormGroup>
            </Col>
          </Row>
        </Form>
  )
}
export default VerticalFormIcons