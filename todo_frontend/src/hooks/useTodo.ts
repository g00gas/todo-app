import {createTodo, deleteTodo, getTodo, getTodos, updateTodo} from "../api/todos.ts";
import {useMutation, useQuery, useQueryClient, UseQueryResult} from "@tanstack/react-query";
import {Todo} from "../types/todo.ts";

interface UpdateTodoParams {
    id: number;
    todo: Partial<Todo>;
}

export const useGetTodos = (): UseQueryResult<Todo[], Error>  => {
    return useQuery({queryKey:['todos'], queryFn: getTodos})
}

export const useGetTodo = (id: number, enabled: boolean) => {
    return useQuery({queryKey:["todo", id], queryFn: ()=> getTodo(id), enabled: enabled})
}

export const useDeleteTodo = () => {
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationFn:(id: number)=>{
                return deleteTodo(id)
            },
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey:['todos']})
            }
        }
    )
}

export const useCreateTodo = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (todo: Todo) => createTodo(todo),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
    });
};
export const useUpdateTodo = () => {
    const queryClient = useQueryClient()
    return useMutation({
            mutationFn: ({id, todo}: UpdateTodoParams) => updateTodo(id, todo)
            ,
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey:["todos"]})
            }
        }
    )
}
