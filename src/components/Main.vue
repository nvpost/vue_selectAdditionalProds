<template>
  <div class="hello">
    <div v-for="(q, q_index) in questions" :key="q_index">
      <Radio :question="q" v-if="q.answ.type == 'radio'" />
      <Number :question="q" v-if="q.answ.type == 'number'" />
      <Select :question="q" v-if="q.answ.type == 'select'" />
    </div>
  </div>
</template>

<script>
import Radio from './inputs/Radio.vue';
import Number from './inputs/Number.vue';
import Select from './inputs/Select.vue';

export default {
  name: 'Main',
  components: {
    Radio,
    Number,
    Select,
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

.input_item {
  border-bottom: 1px solid;
}
</style>
