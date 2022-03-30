<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style scoped>
.button {
  border: 1px solid #aaa;
  padding: 2px 8px;
  background: #fff;
  outline: 0;
  cursor: pointer;
}
</style>
