import {Button, Flex, Heading, Spacer, useDisclosure} from "@chakra-ui/react";
import CreateTodoModal from "../CreateTodoModal/CreateTodoModal.tsx";
import {Link as ReactRouterLink, useLocation} from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'



const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const location = useLocation()
    return (
        <>
            <CreateTodoModal isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
            <Flex as="nav" padding="1.5rem" marginBottom="1rem" width="100%" backgroundColor="brand.800" color="brand.900" justifyContent="space-between">
            <ChakraLink as={ReactRouterLink} to="/">
            <Heading as="h1" size="lg">
                Aplikacja Todo
            </Heading>
            </ChakraLink>
            <Spacer />
                {location.pathname === "/" ? <Flex style={{gap: "10px"}}>
                    <Button colorScheme="brand" onClick={onOpen}>
                        Utwórz zadanie
                    </Button>
                    <ChakraLink as={ReactRouterLink} to="/about">
                        <Button colorScheme="brand">
                            O projekcie
                        </Button>
                    </ChakraLink>
                </Flex> : <></>}
        </Flex>
        </>
    );
};

export default Navbar;
