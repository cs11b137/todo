import { createStore } from "vuex";
import todos from "./modules/todos";

const store = createStore(todos);

export default store;
