import { requestApi } from 'utils';

export const getTodoApi = (id) => requestApi.get(`/todos/${id}`);
export const getTodosApi = () => requestApi.get('/todos');
export const deleteTodoApi = (id) => requestApi.delete(`/todos/${id}`);
export const createTodoApi = (body) => requestApi.post(`/todos`, body);
