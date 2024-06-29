import {Todo} from "../types/todo.ts";
import apiClient from "./apiClient.ts";

export const getTodos = async (): Promise<Todo[]> => {
    const res = await apiClient.get('/todo')
    return res.data
}

export const getTodo = async (id: number): Promise<Todo> => {
    const res = await apiClient.get(`/todo/${id}`)
    return res.data
}

export const createTodo = async (newRecord: Todo): Promise<Todo> => {
    const res = await apiClient.post('/todo', newRecord)
    return res.data
}

export const updateTodo = async (id: number, newRecord: Partial<Todo>): Promise<Todo> => {
    const res = await apiClient.patch(`/todo/${id}`, newRecord)
    return res.data
}

export const deleteTodo = async (id: number): Promise<void>=>{
    const res = await apiClient.delete(`/todo/${id}`)
    return res.data
}