import { Button, Container, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useToast } from "@chakra-ui/react"
import { useState } from "react";

export default function EditModal({ isOpen, setIsopen,EditUserData,ID}) {
    const [select,setSelect] = useState('');
    const [edit,setEdit] = useState('');
    const Toast = useToast();

    const onClose = () => {
        setIsopen(false)
    };

    const EditData = (select,edit) =>{
        if(!select || !edit)
        {
            Toast({title : 'Enter the required User Info', status : 'error', position : 'top'})
        }
        
        else{
            const payload = { };
            payload[select] = edit;
            EditUserData(payload,ID);
            setEdit('');
            setSelect('');
            setIsopen(false);
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
                                <FormLabel>Select What to Edit</FormLabel>
                                <select value={select} onChange={(e)=>setSelect(e.target.value)}>
                                    <option value="--">-</option>
                                    <option value="firstName">First Name</option>
                                    <option value="lastName">Last Name</option>
                                    <option value="age">Age</option>
                                    <option value="phoneNumber">Phone</option>
                                </select>

                                <FormLabel mt='15px'>Enter New Info</FormLabel>
                                <Input type='text' placeholder="New Info" value={edit} onChange={(e)=>setEdit(e.target.value)}/>
                            </FormControl>

                            <Flex float='right' mt='10px' marginBottom='20px' gap='5px'>
                                <Button onClick={onClose} size='sm'>Cancel</Button>
                                <Button size='sm' colorScheme=' #1890FF' bg=' #1890FF' onClick={( )=> EditData(select,edit)}>Edit</Button>
                            </Flex>

                        </ModalBody>
                    </Container>
                </ModalContent>
            </Modal>
        </>
    )
}