<template>
  <Header />
  <Todos :todos="allTodos" v-if="isAll" />
  <Todos :todos="activeTodos" v-if="isActive" />
  <Todos :todos="doneTodos" v-if="isDone" />
  <Add />
  <div class="show">
    <span>Show:</span>
    <Button
      class="show-button"
      :class="isAll ? 'show-button--active' : ''"
      @click="setAll"
      >All</Button
    >
    <Button
      class="show-button"
      :class="isActive ? 'show-button--active' : ''"
      @click="setActive"
      >Active</Button
    >
    <Button
      class="show-button"
      :class="isDone ? 'show-button--active' : ''"
      @click="setCompleted"
      >Completed</Button
    >
  </div>
  <Button @click="deleteAll">Delete All Completed</Button>
  <div class="todos-left">TODOs left:{{ activeTodos.length }}</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "./components/Header.vue";
import Button from "./components/Button.vue";
import Todos from "./components/Todos.vue";
import Add from "./components/Add.vue";

export default {
  name: "App",
  components: {
    Header,
    Button,
    Todos,
    Add,
  },
  data() {
    return {
      isAll: true,
      isActive: false,
      isDone: false,
    };
  },
  computed: mapGetters(["allTodos", "activeTodos", "doneTodos"]),
  methods: {
    ...mapActions(["deleteAll"]),
    setAll() {
      this.isAll = true;
      this.isActive = false;
      this.isDone = false;
    },
    setActive() {
      this.isAll = false;
      this.isActive = true;
      this.isDone = false;
    },
    setCompleted() {
      this.isAll = false;
      this.isActive = false;
      this.isDone = true;
    },
  },
  created() {
    this.$store.dispatch("initTodos");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #2c3e50;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.show {
  display: flex;
  align-items: center;
}
.show,
.todos-left {
  margin: 15px 0;
  font-size: 16px;
}
.show-button {
  margin-right: 15px;
}
.show-button--active {
  font-weight: 700;
}
</style>
