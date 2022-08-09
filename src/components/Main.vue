<template>
  <div class="hello">
    <div class="input_item" v-for="(q, q_index) in questions">
      {{ q.id }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: ['mes', 'questions'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input_item {
  border-bottom: 1px solid;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
