import { requestApi } from 'utils';

export const getTodosApi = () => requestApi.get('todos');
