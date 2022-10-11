<template>
  <div
    class="condition_message"
    id="condition_message"
    v-if="$store.state.condition1"
  >
    <ConditionMessage1 />
  </div>

  <div
    class="condition_message"
    id="condition_message"
    v-if="$store.state.condition2 === false"
  >
    <ConditionMessage2 />
  </div>
  {{ $store.state.condition1 }}, {{ $store.state.condition2 }}
  <div class="results">
    <strong>Результат</strong>
    <p><b>Датчик:</b> {{ $store.state.result_arr.join('.') }}</p>
    <p><b>Гильза:</b> {{ $store.state.result_sleeve.join('.') }}</p>
    <p><b>Бобышка:</b> {{ $store.state.result_lug.join('.') }}</p>
  </div>
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

import ConditionMessage1 from './interface/ConditionMessage1.vue';
import ConditionMessage2 from './interface/ConditionMessage2.vue';

export default {
  name: 'Main',
  components: {
    Radio,
    Number,
    Select,
    ConditionMessage1,
    ConditionMessage2,
  },
  props: ['mes', 'questions'],
  created() {
    this.$store.commit('setDefaultAnsw');
  },
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
.hello {
  margin-bottom: 180px;
}
.results {
  position: fixed;
  background-color: #fff;
  width: 100%;
  bottom: 0px;
  padding: 10px;
  border-top: 1px solid #ccc;
}

.message_block {
  border: 1px solid;
  padding: 10px;
  position: relative;
}
.error {
  background-color: #ffcdd2;
}
.success {
  background-color: #81c784;
}
.success span {
  line-height: 0;
  font-size: 26px;
}
.close {
  position: absolute;
  right: 15px;
  top: 6px;
  cursor: pointer;
}
</style>
