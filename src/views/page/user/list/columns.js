// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { getUser, deleteUser } from '../store/action'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Card, CardHeader, CardTitle, CardBody, CardText} from 'reactstrap'
import { Slack, User, Settings, Database, Edit, Edit2, MoreVertical, FileText, Trash, Archive, Check, Eye, XCircle} from 'react-feather'
import * as Icons from 'react-feather'
import checkgif from '@src/assets/images/icons8-ok.gif'
import alergif from '@src/assets/images/icons8-box-important.gif'
import cancelpng from '@src/assets/images/cancle.gif'
// import deletegif from '@src/assets/images/deleteicon.gif'
import deleteimg from '@src/assets/images/deleteimg.gif'
import { useState } from "react"

// ** Renders Client Columns
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  // if (row.avatar.length) {
  //   return <Avatar className='mr-1' img={row.avatar} width='32' height='32' />
  // } else {
  //   return <Avatar color={color || 'primary'} className='mr-1' content={row.fullName || 'John Doe'} initials />
  // }
}

// ** Renders Role Columns
// const renderRole = row => {
//   const roleObj = {
//     subscriber: {
//       class: 'text-primary',
//       icon: User
//     },
//     maintainer: {
//       class: 'text-success',
//       icon: Database
//     },
//     editor: {
//       class: 'text-info',
//       icon: Edit2
//     },
//     author: {
//       class: 'text-warning',
//       icon: Settings
//     },
//     admin: {
//       class: 'text-danger',
//       icon: Slack
//     }
//   }

//   const Icon = roleObj[row.role] ? roleObj[row.role].icon : Edit2

//   return (
//     <span className='text-truncate text-capitalize align-middle'>
//       <Icon size={18} className={`${roleObj[row.role] ? roleObj[row.role].class : ''} mr-50`} />
//       {row.role}
//     </span>
//   )
// }

const statusObj = {
  // pending: 'light-secondary',
  active: 'light-success',
  Inactive : 'light-warning'
}

export const columns = [
  {
    name: 'Id',
    minWidth: '10px',
    maxWidth:'15%',
    selector: 'id',
    sortable: true
    // cell: row => renderRole(row)
  },
  {
    name: 'User',
    minWidth: '297px',
    selector: 'full_name',
    sortable: true,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        {renderClient(row)}
        <div className='d-flex flex-column'>
          <Link
            to={`/apps/user/view/${row.id}`}
            className='user-name text-truncate mb-0'
            onClick={() => store.dispatch(getUser(row.id))}
          >
            <span className='font-weight-bold'>{row.fullName}</span>
          </Link>
          {/* <small className='text-truncate text-muted mb-0'>@{row.username}</small> */}
        </div>
      </div>
    )
  },
  // {
  //   name: 'Stall No.',
  //   minWidth: '150px',
  //   selector: 'stall_no',
  //   sortable: true
  //   // cell: row => renderRole(row)
  // },
  // {
  //   name: 'Email',
  //   minWidth: '320px',
  //   selector: 'email',
  //   sortable: true,
  //   cell: row => row.email
  // },
  // {
  //   name: 'Password',
  //   minWidth: '200px',
  //   selector: 'password',
  //   sortable: true,
  //   cell: row => row.password
  // },
 
  // {
  //   name: 'Contact',
  //   minWidth: '138px',
  //   selector: 'contact',
  //   sortable: true,
  //   cell: row => <span className='text-capitalize'>{row.contact}</span>
  // },
  {
    name: 'Status',
    minWidth: '138px',
    selector: 'status',
    sortable: true,
    cell: row => (
      <Badge className='text-capitalize' color={statusObj[row.status]} pill>
        {row.status}
      </Badge>
    )
  },
  {
    name: 'Actions',
    minWidth: '100px',
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
        {/* <div><a className='btn' style={{color:"white", backgroundColor:"red"}} onClick={() => setBasicModal(!basicModal)}>Delete</a></div> */}
        <UncontrolledDropdown>
            <DropdownToggle className='pr-1' tag='span'>
              <Edit size={20} />
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
          </UncontrolledDropdown>
          {/* <Edit  size={15} /> */}
          {/* <Edit onClick={() => setBasicModal(!basicModal)}  size={20}  /> */}
          <Eye  size={20} />
        </div>
        
        <Row>
     <Col md="12"   style={{display: 'flex', justifyContent: 'right', bottom:'12px'}}>
     <>
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
          <img width={150}  style={{display:'block', margin:'auto'}}  src={deleteimg}></img>
          <h3 style={{color:'red', fontWeight:600}}>Deleted</h3>
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

