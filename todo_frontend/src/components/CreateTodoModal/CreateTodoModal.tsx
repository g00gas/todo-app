import {
    Button, Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay, Textarea, VStack,
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {useCreateTodo, useGetTodo, useUpdateTodo} from "../../hooks/useTodo.ts";
import {Todo} from "../../types/todo.ts";


interface ModalProps {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
    todoId?: number
}

const CreateTodoModal = (props: ModalProps) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [author, setAuthor] = useState("")
    const {data: todo, isLoading} = useGetTodo(props.todoId as number, !!props.todoId)
    const createTodoMutation = useCreateTodo()
    const updateTodoMutation = useUpdateTodo()


     const handleSave = () => {
        const updateTodoRequest: Partial<Todo> = { title, content, author };
         const newTodoRequest: Todo = {
             title,
             content,
             author,
             creationDate: new Date().toISOString(),
             completed: false,
         };
         if (props.todoId !== undefined) {
             updateTodoMutation.mutate({ id: props.todoId, todo: updateTodoRequest }, {onSuccess: () => {props.onClose()}});
         }  else {
            createTodoMutation.mutate(newTodoRequest, {
                onSuccess: () => {
                    props.onClose()
                },
            });
        }
    };


    useEffect(() => {
        if (todo) {
            setTitle(todo.title);
            setContent(todo.content);
            setAuthor(todo.author);
        }
    }, [todo]);

    return(
        <Modal  isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{title ? title : "Stwórz Zadanie"}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack spacing={4}>
                        <Input placeholder="Tytuł" value={title} onChange={(e) => setTitle(e.target.value)} isDisabled={isLoading}/>
                        <Textarea placeholder="Treść" value={content} onChange={(e) => setContent(e.target.value)} isDisabled={isLoading} />
                        <Input placeholder="Autor" value={author} onChange={(e) => setAuthor(e.target.value)} isDisabled={isLoading} />
                    </VStack>
                </ModalBody>

                <ModalFooter>
                    <Button mr={3} onClick={handleSave}>
                        Zapisz
                    </Button>
                    <Button mr={3} onClick={props.onClose}>
                        Anuluj
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default  CreateTodoModal