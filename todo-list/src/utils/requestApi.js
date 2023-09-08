import axios from "axios";

export const requestApi = axios.create({
  baseUrl: "https://jsonplaceholder.typicode.com/",
});
