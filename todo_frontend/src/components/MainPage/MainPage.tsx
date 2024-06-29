import {useGetTodos} from "../../hooks/useTodo.ts";
import { Flex} from "@chakra-ui/react";
import TodoCard from "../TodoCard/TodoCard.tsx";



const MainPage = () => {
    const {isLoading, isSuccess, data: todos} = useGetTodos()
    if (isLoading){
        return <p>Ładowanie</p>
    }

    return (
        <Flex flexDirection="row" padding="1.5rem" gap="4rem">
            {
                isSuccess && todos.map(t=><TodoCard key={t.id} todo={t}/>)
            }
        </Flex>
    );
}

export default MainPage