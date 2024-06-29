import {Button, Checkbox, Text, Card, CardBody, CardHeader, CardFooter, useDisclosure} from '@chakra-ui/react';

import {Todo} from "../../types/todo.ts";
import {useDeleteTodo} from "../../hooks/useTodo.ts";
import CreateTodoModal from "../CreateTodoModal/CreateTodoModal.tsx";
import dayjs from "dayjs";

type Props = {
    todo: Todo;
};

const TodoItem = ({ todo }: Props) => {
    const deleteTodo = useDeleteTodo();

    const handleDelete = () => {
        deleteTodo.mutate(todo.id!);
    };
    console.log(todo)
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <CreateTodoModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} todoId={todo.id}/>
            <Card variant="outline" borderColor="brand.700" mb={4} width="20rem">
                <CardHeader>
                    <Text fontSize="xl" fontWeight="bold">{todo.title}</Text>
                </CardHeader>
                <CardBody>
                    <Text mb={2}>{todo.content}</Text>
                    <Text fontSize="sm" color="gray.500">Autor: {todo.author}</Text>
                    <Text fontSize="sm" color="gray.500">Data utworzenia: {dayjs(todo.creationDate, "DD-MM-YYYY").toString()}</Text>
                    <Checkbox isChecked={todo.completed} mt={2}>Zrobiono</Checkbox>
                </CardBody>
                <CardFooter gap="1rem">
                    <Button colorScheme="red" onClick={onOpen}>Edytuj</Button>
                    <Button colorScheme="red" onClick={handleDelete}>Usuń</Button>
                </CardFooter>
            </Card>
        </>
    );
};

export default TodoItem;
