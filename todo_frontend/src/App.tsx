import {useGetTodos} from "./hooks/useTodo.ts";

function App() {
    const {isLoading, isSuccess, data: todos} = useGetTodos()
    if (isLoading){
        return <p>Ładowanie</p>
    }

    return (
    <>
        {
            isSuccess && todos.map(t=>{return <p>{t.title}</p>})
        }
    </>
    );
}

export default App
