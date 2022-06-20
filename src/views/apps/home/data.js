// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import axios from 'axios'
import { MoreVertical, Edit, FileText, Archive, Trash, Check, Eye, ArrowRightCircle, XCircle} from 'react-feather'
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Card, CardHeader, CardTitle, CardBody, CardText} from 'reactstrap'
import * as Icons from 'react-feather'
import { useState } from "react"
import checkgif from '@src/assets/images/icons8-ok.gif'
import alergif from '@src/assets/images/icons8-box-important.gif'
import cancelpng from '@src/assets/images/cancle.gif'
import deletegif from '@src/assets/images/deleteicon.gif'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom"

// ** Vars
const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']

const status = {
  1: { title: 'Active', color: 'light-success' },
  2: { title: 'Buliding', color: 'light-info' },
  3: { title: 'In-Active', color: 'light-danger' },
  4: { title: 'Delete', color: 'light-warning' },
  5: { title: 'Applied', color: 'light-info' }
}

export let data

// ** Get initial Data
axios.get('/api/datatables/initial-data').then(response => {
  data = response.data
})

// ** Table Zero Config Column
export const basicColumns = [
  {
    ID: 1,
    name: 'Serial.no',
    selector: 'id',
    sortable: true,
    maxWidth: '50px'
  },
  {
    name: 'Name',
    selector: 'full_name',
    sortable: true,
    minWidth: '225px'
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '310px'
  },
  {
    name: 'Contact no.',
    selector: 'contact',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Age',
    selector: 'age',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Salary',
    selector: 'salary',
    sortable: true,
    minWidth: '175px'
  }
]

// ** Expandable table component
const ExpandableTable = ({ data }) => {
  
  return (
    <div className='expandable-content p-2'>
      <p>
        <span className='font-weight-bold'>City:</span> {data.city}
      </p>
      <p>
        <span className='font-weight-bold'>Experience:</span> {data.experience}
      </p>
      <p className='m-0'>
        <span className='font-weight-bold'>Post:</span> {data.post}
      </p>
    </div>
  )
}

// ** Table Common Column
export const columns = [
  {
    name: 'Name',
    selector: 'full_name',
    sortable: true,
    minWidth: '250px',
    cell: row => (
      <div className='d-flex align-items-center'>
        {row.avatar === '' ? (
          <Avatar color={`light-${states[row.status]}`} content={row.full_name} initials />
        ) : (
          <Avatar img={require(`@src/assets/images/portrait/small/avatar-s-${row.avatar}`).default} />
        )}
        <div className='user-info text-truncate ml-1'>
          <span className='d-block font-weight-bold text-truncate'>{row.full_name}</span>
          <small>{row.post}</small>
        </div>
      </div>
    )
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Date',
    selector: 'start_date',
    sortable: true,
    minWidth: '150px'
  },

  {
    name: 'Salary',
    selector: 'salary',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Age',
    selector: 'age',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
    minWidth: '150px',
    cell: row => {
      return (
        <Badge color={status[row.status].color} pill>
          {status[row.status].title}
        </Badge>
      )
    }
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: row => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='pr-1' tag='span'>
              <MoreVertical size={20} />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <FileText size={15} />
                <span className='align-middle ml-50'>Details</span>
              </DropdownItem>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <Archive size={15} />
                <span className='align-middle ml-50'>Archive</span>
              </DropdownItem>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <Trash size={15} />
                <span className='align-middle ml-50'>Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Edit size={15} />
        </div>
      )
    }
  }
]

// ** Table Intl Column
export const multiLingColumns = [
  {
    name: 'Sl. no.',
    selector: 'id',
    sortable: true,
    minWidth: '150px',
    maxWidth: '5%'
  },
  {
    name: 'Event Name',
    selector: 'full_name',
    sortable: true,
    minWidth: '300px'
   
  },
  // {
  //   name: 'Position',
  //   selector: 'post',
  //   sortable: true,
  //   minWidth: '250px'
  // },
  {
    name: 'Event Code',
    selector: 'stall_no',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Start Date',
    selector: 'start_date',
    sortable: true,
    minWidth: '150px'
  },
  // {
  //   name: 'Date',
  //   selector: 'start_date',
  //   sortable: true,
  //   minWidth: '150px'
  // },

  // {
  //   name: 'Salary',
  //   selector: 'salary',
  //   sortable: true,
  //   minWidth: '150px'
  // },
  {
    name: 'End Date',
    selector: 'end_date',
    sortable: true,
    minWidth: '150px'
  },

  {
    name: 'Status',
    selector: 'status',
    sortable: true,
    minWidth: '150px',
    cell: row => {
      return (
        <Badge color={status[row.status].color} pill>
          {status[row.status].title}
        </Badge>
      )
    }
  },
  // {
  //   name: 'Status',
  //   selector: 'status',
  //   sortable: true,
  //   minWidth: '150px',
  //   cell: row => {
  //     return (
  //       <Badge color={status[row.status].color} pill>
  //         {status[row.status].title}
  //       </Badge>
  //     )
  //   }
  // },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: row => {
      const [inactive, setInactive] = useState(false)
      const [eventdelete, setEventDelete] = useState(false)
      const [successin, setSuccessin] = useState(false)
      const [deletesuccess, setDeleteSuccess] = useState(false)
      const [areYouSure, setAreYouSure] = useState(false)
      const [cancelModal, setCancelModal] = useState(false)
      const [successModal, setSuccessModal] = useState(false)
      const [basicModal, setBasicModal] = useState(false)
      return (
        <>
        <div className='d-flex'>
        <Link to='/apps/mydashboard'>
          
            <span className='pr-1' size={10}><ArrowRightCircle /></span>
          
          </Link> 
        {/* <div><a className='btn' style={{color:"white", backgroundColor:"red"}} onClick={() => setBasicModal(!basicModal)}>Delete</a></div> */}
        {/* <UncontrolledDropdown>
            <DropdownToggle className='pr-1' tag='span'>
              <ArrowRightCircle style={{color: "#5d67f7"}} size={25} />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem className='w-100' onClick={() => {
              setAreYouSure(!areYouSure)
          }} >
                <Check size={15} />
                <span className='align-middle ml-50' >Activate</span>
              </DropdownItem>
              <DropdownItem  className='w-100' onClick={ () => { setInactive(!inactive) } } >
                <XCircle size={15} />
                
                <span className='align-middle ml-50'>In-Active</span>
              </DropdownItem>
              <DropdownItem className='w-100' onClick={ () => { setEventDelete(!eventdelete) } }>
                <Trash size={15} />
                <span className='align-middle ml-50'>Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
          {/* <Edit  size={15} /> */}
          {/* <Edit onClick={() => setBasicModal(!basicModal)}  size={20}  /> */}
          {/* <Eye  size={20} /> */}
        </div>
        
        <Row>
     <Col md="12"   style={{display: 'flex', justifyContent: 'right', bottom:'12px'}}>
     <>
     {/* <Button
        className="ml-2"
        color="primary"
        onClick={() => setAddElection(!addElection)}
      >
        <Plus size={15} />
        <span className="align-middle ml-50">Add Announcement</span>
      </Button> */}
      {/* <Modal isOpen={addElection} toggle={() => setAddElection(!addElection)}>
        <ModalHeader toggle={() => setAddElection(!addElection)}>
          Create an Announcement
        </ModalHeader>
        <ModalBody>
          
        </ModalBody>
        <ModalFooter style={{display:'flex', width:'100', justifyContent:'space-between'}}>
          <Button color="success" onClick={() => {
              setAreYouSure(!areYouSure)
            setTimeout(() => {
              setAddElection(!addElection)
            }, 200)
          }}>
            Create New Announcement!
          </Button>
          <Button.Ripple  color="danger" type="reset" onClick={() => {
              setAddElection(!addElection)
          }} >
            Cancel
          </Button.Ripple>
        </ModalFooter>
      </Modal> */}
      {/* areyousure */}
      <Modal isOpen={areYouSure} toggle={() => setAreYouSure(!areYouSure)}>
        <ModalHeader toggle={() => setAreYouSure(!areYouSure)}>
        </ModalHeader>
        <ModalBody style={{textAlign:'center', display:'flex', flexDirection:'column', gap:'10px'}}>
          <img width={85} height={85} style={{display:'block', margin:'auto'}}  src={alergif}></img>
          <h3>Are you sure?</h3>
          <p>You won't be able to revert this!</p>
        </ModalBody>
        <ModalFooter style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
          <Button color="success" onClick={() => {
            setSuccessModal(!successModal)
            setTimeout(() => {
              setAreYouSure(!areYouSure)
            }, 200)
          }}>
            Yes, Activate.
          </Button>
          <Button.Ripple outline color="primary" type="reset" onClick={() => {
              setCancelModal(!cancelModal)
              setTimeout(() => {
                setAreYouSure(!areYouSure)
              }, 200)
          }}>
            Cancel
          </Button.Ripple>
        </ModalFooter>
      </Modal>
       {/* are you sure */}
       {/* Cancelmodal */}
       <Modal isOpen={cancelModal} toggle={() => setCancelModal(!cancelModal)}>
        <ModalBody style={{textAlign:'center', display:'flex', flexDirection:'column', gap:'10px'}}>
          <img width={150} height={120} style={{display:'block', margin:'auto'}}  src={cancelpng}></img>
          <h3>Cancelled</h3>
          <p>Re-Create New Election Next Time</p>
        </ModalBody>
        <ModalFooter>
          <Button style={{display:'block', margin:'auto'}} color="primary" onClick={() => {
            setCancelModal(!cancelModal)
           
            }}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
        {/* Cancelmodal */}
        {/* sucessmodal */}
       <Modal isOpen={successModal} toggle={() => setSuccessModal(!successModal)}>
        <ModalBody style={{textAlign:'center', display:'flex', flexDirection:'column', gap:'10px'}}>
          <img width={85} height={85} style={{display:'block', margin:'auto'}}  src={checkgif}></img>
          <h3>Activated</h3>
          <p>Your Event has been Activated</p>
        </ModalBody>
        <ModalFooter>
          <Button style={{display:'block', margin:'auto'}} color="primary" onClick={() => {
            setSuccessModal(!successModal)
            }}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
        {/* sucessmodal */}
    </>
     </Col>
      
    </Row>
     <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
    <ModalHeader toggle={() => setBasicModal(!basicModal)}>Delete</ModalHeader>
    <ModalBody className='d-flex justify-content-center'>
     <div style={{color:'red'}} ><Icons.AlertCircle size={70}/></div> <br /> <br /> 
    </ModalBody>
    <div className='d-flex justify-content-center'><h2>Are You Sure</h2></div>
    <div className='d-flex justify-content-center'><p>You won't be able to revert this!</p></div>
     
    <ModalFooter>
    <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
      
     <Button.Ripple className='d-flex justify-content-center delete' style={{color:"white"}} outline onClick={() => setBasicModal(!basicModal)}>
       Yes, delete it!
     </Button.Ripple>
     <Button.Ripple className='d-flex justify-content-center' color='primary' outline onClick={() => setBasicModal(!basicModal)} >
       Cancle
     </Button.Ripple>

     </div>
    
    </ModalFooter>
  </Modal> 
    {/* In-active */}
      <Modal isOpen={inactive} toggle={() => setInactive(!inactive)}>
        <ModalHeader toggle={() => setInactive(!inactive)}>
        </ModalHeader>
        <ModalBody style={{textAlign:'center', display:'flex', flexDirection:'column', gap:'10px'}}>
          <img width={85} height={85} style={{display:'block', margin:'auto'}}  src={alergif}></img>
          <h3>Are you sure?</h3>
          <p>You won't be able to revert this!</p>
        </ModalBody>
        <ModalFooter style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
          <Button color="warning" onClick={() => {
            setSuccessin(!successin)
            setTimeout(() => {
              setInactive(!inactive)
            }, 200)
          }}>
            Yes, In-Activate.
          </Button>
          <Button.Ripple outline color="primary" type="reset" onClick={() => {
              setCancelModal(!cancelModal)
              setTimeout(() => {
                setInactive(!inactive)
              }, 200)
          }}>
            Cancel
          </Button.Ripple>
        </ModalFooter>
      </Modal>
      {/* In-active */}
          {/* sucessmodal In-active */}
       <Modal isOpen={successin} toggle={() => setSuccessin(!successin)}>
        <ModalBody style={{textAlign:'center', display:'flex', flexDirection:'column', gap:'10px'}}>
          <img width={85} height={85} style={{display:'block', margin:'auto'}}  src={checkgif}></img>
          <h3>In-Activated</h3>
          <p>Your Event has been In-Activated</p>
        </ModalBody>
        <ModalFooter>
          <Button style={{display:'block', margin:'auto'}} color="primary" onClick={() => {
            setSuccessin(!successin)
            }}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
        {/* sucessmodal In-active */}

        {/* Delete */}
      <Modal isOpen={eventdelete} toggle={() => setEventDelete(!eventdelete)}>
        <ModalHeader toggle={() => setEventDelete(!eventdelete)}>
        </ModalHeader>
        <ModalBody style={{textAlign:'center', display:'flex', flexDirection:'column', gap:'10px'}}>
          <img width={85} height={85} style={{display:'block', margin:'auto'}}  src={alergif}></img>
          <h3>Are you sure?</h3>
          <p>You won't be able to revert this!</p>
        </ModalBody>
        <ModalFooter style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
          <Button color="danger" onClick={() => {
            setDeleteSuccess(!successin)
            setTimeout(() => {
              setEventDelete(!eventdelete)
            }, 200)
          }}>
            Yes, Delete.
          </Button>
          <Button.Ripple outline color="primary" type="reset" onClick={() => {
              setCancelModal(!cancelModal)
              setTimeout(() => {
                setEventDelete(!eventdelete)
              }, 200)
          }}>
            Cancel
          </Button.Ripple>
        </ModalFooter>
      </Modal>
      {/* Delete */}

      {/* sucessmodal Delete */}
      <Modal isOpen={deletesuccess} toggle={() => setDeleteSuccess(!deletesuccess)}>
        <ModalBody style={{textAlign:'center', display:'flex', flexDirection:'column', gap:'10px'}}>
          <img width={150} height={120} style={{display:'block', margin:'auto'}}  src={deletegif}></img>
          <h3>Deleted</h3>
          <p>Your Event has been Deleted</p>
        </ModalBody>
        <ModalFooter>
          <Button style={{display:'block', margin:'auto'}} color="primary" onClick={() => {
            setDeleteSuccess(!deletesuccess)
            }}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
        {/* sucessmodal Delete */}

        </>
      )
    }
  }
]

// ** Table Server Side Column
// export const serverSideColumns = [
//   {
//     name: 'Full Name',
//     selector: 'full_name',
//     sortable: true,
//     minWidth: '225px'
//   },
//   {
//     name: 'Email',
//     selector: 'email',
//     sortable: true,
//     minWidth: '250px'
//   },
//   {
//     name: 'Position',
//     selector: 'post',
//     sortable: true,
//     minWidth: '250px'
//   },
//   {
//     name: 'Office',
//     selector: 'city',
//     sortable: true,
//     minWidth: '150px'
//   },
//   {
//     name: 'Start Date',
//     selector: 'start_date',
//     sortable: true,
//     minWidth: '150px'
//   },
//   {
//     name: 'Salary',
//     selector: 'salary',
//     sortable: true,
//     minWidth: '150px'
//   }
// ]

// ** Table Adv Search Column
// export const advSearchColumns = [
//   {
//     name: 'Name',
//     selector: 'full_name',
//     sortable: true,
//     minWidth: '200px'
//   },
//   {
//     name: 'Email',
//     selector: 'email',
//     sortable: true,
//     minWidth: '250px'
//   },
//   {
//     name: 'Post',
//     selector: 'post',
//     sortable: true,
//     minWidth: '250px'
//   },
//   {
//     name: 'City',
//     selector: 'city',
//     sortable: true,
//     minWidth: '150px'
//   },
//   {
//     name: 'Date',
//     selector: 'start_date',
//     sortable: true,
//     minWidth: '150px'
//   },

//   {
//     name: 'Salary',
//     selector: 'salary',
//     sortable: true,
//     minWidth: '100px'
//   }
// ]

export default ExpandableTable

//////////////////////////////////////////////////////
