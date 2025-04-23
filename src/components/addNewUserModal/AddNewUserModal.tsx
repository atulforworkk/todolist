import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Input } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

type Props = {}

const AddNewUserModal = (props: Props) => {
  const navigate =useNavigate();
    const [opened, { open, close }] = useDisclosure(true);
  return (
    <div>
    <Modal opened={opened} onClose={close} title="Add User" centered >
      <div>
        <label> Name</label>
        <Input placeholder='name'/>
        </div>
        <div>
        <label> Email-id</label>
        <Input placeholder='Email id'/>
        </div>
        <div>
        <label> Designation</label>
        <Input placeholder='Email id'/>
        </div>
        <Button onClick={()=>{
          close();
          navigate("/home");
          
        }}>
          Add user
        </Button>
      </Modal>

      {/* <Button variant="default" onClick={open}>
        Open modal
      </Button> */}
      </div>
  )
}

export default AddNewUserModal