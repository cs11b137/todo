<template>
  <div class="add">
    <input
      class="add-input"
      type="text"
      placeholder="What TODO?"
      v-model="body"
    />
    <button class="add-button" @click="handleAddClick">Add TODO</button>
  </div>
</template>

<script>
export default {
  name: "Add",
  data() {
    return {
      body: "",
    };
  },
  methods: {
    handleAddClick() {
      const todo = {
        body: this.body,
        done: false,
      };
      this.$store.dispatch("addTodo", todo);
      this.body = "";
    },
  },
};
</script>

<style scoped>
.add {
  display: flex;
  align-items: center;
  margin: 15px 0;
}
.add-input,
.add-button {
  margin-right: 15px;
  border: 1px solid #aaa;
  padding: 4px 16px;
  font-size: 16px;
  background: #fff;
  outline: 0;
}
</style>
