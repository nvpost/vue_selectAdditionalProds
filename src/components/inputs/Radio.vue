<template>
  <div class="input_item">
    {{ question.label }}
  </div>
</template>

<script>
export default {
  name: 'Radio',
  props: ['question'],
};
</script>

<style scoped>
.input_item {
  border-bottom: 1px solid;
}
</style>
