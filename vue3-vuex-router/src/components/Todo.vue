<template>
  <input type="checkbox" v-model="checked" @change="handleDoneClick" />
  <p class="content" :class="todo.done ? 'done' : ''">{{ todo.body }}</p>
  <span class="remove" @click="removeOne(todo.id)">X</span>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Todo",
  props: ["todo"],
  data() {
    return {
      checked: this.todo.done,
    };
  },
  methods: {
    ...mapActions(["updateOne", "removeOne"]),
    handleDoneClick() {
      const newTodo = {
        ...this.todo,
        done: this.checked,
      };
      this.updateOne(newTodo);
    },
  },
};
</script>

<style scoped>
.content {
  margin: 0;
  font-size: 16px;
}
.remove {
  font-size: 16px;
  color: #999;
  cursor: pointer;
}
.done {
  text-decoration: line-through;
}
</style>
