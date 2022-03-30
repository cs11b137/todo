<template>
  <ul class="todos">
    <li class="todo" v-for="todo in todos" :key="todo.id">
      <Todo :todo="todo" />
    </li>
  </ul>
</template>

<script>
import Todo from "./Todo.vue";

export default {
  name: "Todos",
  components: {
    Todo,
  },
  props: ["todos"],
};
</script>

<style scoped>
.todos {
  padding: 0;
}
.todo {
  display: flex;
  align-items: center;
}
</style>
