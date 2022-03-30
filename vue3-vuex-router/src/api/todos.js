import axios from "axios";
import { baseUrl } from "./constants";

export const getTodos = async () => {
  const res = await axios.get(`${baseUrl}/todos`);
  return res.data;
};

export const createTodo = async (newTodo) => {
  const res = await axios.post(`${baseUrl}/todos`, newTodo);
  return res.data;
};

export const getTodo = async (id) => {
  const res = await axios.get(`${baseUrl}/todos/${id}`);
  return res.data;
};

export const updateTodo = async (id, newTodo) => {
  const res = await axios.put(`${baseUrl}/todos/${id}`, newTodo);
  return res.data;
};

export const removeTodo = async (id) => {
  await axios.delete(`${baseUrl}/todos/${id}`);
};
