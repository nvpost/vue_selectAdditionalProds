<template>
  <div class="hello">
    <div v-for="(q, q_index) in questions">
      <Radio :question='q' v-if="q.answ.type=='radio'">
    </div>
  </div>
</template>

<script>
import Radio from './inputs/Radio.vue';

export default {
  name: 'Main',
  components: {
    Radio,
  },
  props: ['mes', 'questions'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
