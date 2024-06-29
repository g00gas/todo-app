import {Button, Flex, Heading, Spacer, useDisclosure} from "@chakra-ui/react";
import CreateTodoModal from "../CreateTodoModal/CreateTodoModal.tsx";



const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <CreateTodoModal isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
            <Flex as="nav" padding="1.5rem" marginBottom="1rem" width="100%" backgroundColor="brand.800" color="brand.900" justifyContent="space-between">
            <Heading as="h1" size="lg">
                Witaj w aplikacji Todo
            </Heading>
            <Spacer />
            <Flex style={{gap: "10px"}}>
                <Button colorScheme="brand" onClick={onOpen} >
                    Utwórz zadanie
                </Button>
                <Button colorScheme="brand" onClick={onOpen} >
                    O projekcie
                </Button>
            </Flex>
        </Flex>
        </>
    );
};

export default Navbar;
