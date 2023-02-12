import { Button, Container, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useToast } from "@chakra-ui/react"
import { useState } from "react";

export default function AddUserModal({ isOpen, setIsopen,AddUser}) {
    const [FName,setFName] = useState('');
    const [LName,setLName] = useState('');
    const [age,setAge] = useState('');
    const [phone,setPhone] = useState('');
    const Toast = useToast( );

    const onClose = () => {
        setIsopen(false)
    };

    const handleAdd = (FName,LName,age,phone) =>{
        if(!FName || !LName || !age || !phone)
        {
            Toast({title : 'Enter the required Data'})
        }

        else
        {
            const payload = {
                firstName : FName,
                lastName : LName,
                age,
                phoneNumber : phone
            }
            AddUser(payload)
        }
    }


    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} className='TotalModal' size="lg">
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <Container>
                        <ModalBody padding='20px'>
                            <Text>Add User</Text>
                            <FormControl>
                                <FormLabel mt='15px'>First Name</FormLabel>
                                <Input type='text' placeholder="First Name" value={FName} onChange={(e)=>setFName(e.target.value)}/>

                                <FormLabel mt='15px'>Last Name</FormLabel>
                                <Input type='text' placeholder="Last Name" value={LName} onChange={(e)=>setLName(e.target.value)}/>


                                <FormLabel mt='15px'>Age</FormLabel>
                                <Input type='number' placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)}/>


                                <FormLabel mt='15px'>Phone</FormLabel>
                                <Input type='number' placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                            </FormControl>

                            <Flex float='right' mt='10px' marginBottom='20px' gap='5px'>
                                <Button onClick={onClose} size='sm'>Cancel</Button>
                                <Button size='sm' colorScheme=' #1890FF' bg=' #1890FF' onClick={( ) => handleAdd(FName,LName,age,phone)}>Add</Button>
                            </Flex>

                        </ModalBody>
                    </Container>
                </ModalContent>
            </Modal>
        </>
    )
}