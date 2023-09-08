import axios from "axios";

export const requestApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
