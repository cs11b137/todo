import { createTodo, getTodos, removeTodo, updateTodo } from "../../api/todos";

const state = () => {
  return {
    todos: [],
  };
};

const getters = {
  allTodos(state) {
    return state.todos;
  },
  activeTodos(state) {
    return state.todos.filter((todo) => !todo.done);
  },
  doneTodos(state) {
    return state.todos.filter((todo) => todo.done);
  },
};

const actions = {
  async initTodos({ commit }) {
    const todos = await getTodos();
    commit("setTodos", todos);
  },

  async updateOne({ commit }, todo) {
    await updateTodo(todo.id, todo);
    commit("setTodosUpdate", todo);
  },

  async removeOne({ commit }, id) {
    await removeTodo(id);
    commit("setTodosRemove", id);
  },

  async addTodo({ commit }, todo) {
    const data = await createTodo(todo);
    commit("setAddTodo", data);
  },

  async deleteAll({ commit }) {
    commit("setDeleteAll");
  },
};

const mutations = {
  setTodos(state, todos) {
    state.todos = todos;
  },

  setTodosUpdate(state, newTodo) {
    state.todos = state.todos.map((todo) => {
      return todo.id === newTodo.id ? newTodo : todo;
    });
  },

  setTodosRemove(state, id) {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },

  setAddTodo(state, todo) {
    state.todos = state.todos.concat(todo);
  },

  setDeleteAll(state) {
    state.todos = [];
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
