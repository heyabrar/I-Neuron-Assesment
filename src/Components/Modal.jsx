import { Button, Container, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useToast } from "@chakra-ui/react"
import { useState } from "react";

export default function AddUserModal({ isOpen, setIsopen}) {
    //Modal close function
    const onClose = () => {
        setIsopen(false)
    };
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} className='TotalModal' size="lg">
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <Container>
                        <ModalBody padding='20px'>
                            <Text>Add Song</Text>
                            <FormControl>
                                <FormLabel mt='15px'>Song Name</FormLabel>
                                <Input type='text' placeholder="Song Name" />

                                <FormLabel mt='15px'>Song Link</FormLabel>
                                <Input type='text' placeholder="Song URL" />


                                <FormLabel mt='15px'>Song Source</FormLabel>
                                <Input type='text' placeholder="Song Source" />


                                <FormLabel mt='15px'>Add Profile Thubmnail URL</FormLabel>
                                <Input type='text'  name='avatar' />
                            </FormControl>

                            <Flex float='right' mt='10px' marginBottom='20px' gap='5px'>
                                <Button onClick={onClose} size='sm'>Cancel</Button>
                                <Button size='sm' colorScheme=' #1890FF' bg=' #1890FF'>Add</Button>
                            </Flex>
                        </ModalBody>
                    </Container>
                </ModalContent>
            </Modal>
        </>
    )
}