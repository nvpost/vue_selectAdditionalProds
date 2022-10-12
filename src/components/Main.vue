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
  <span> {{ $store.state.condition1 }}, {{ $store.state.condition2 }} </span>
  <QuestionsContent :questions="questions" />
</template>

<script>
import ConditionMessage1 from './interface/ConditionMessage1.vue';
import ConditionMessage2 from './interface/ConditionMessage2.vue';

import QuestionsContent from './QuestionsContent.vue';

export default {
  name: 'Main',
  components: {
    // Radio,
    // Number,
    // Select,
    ConditionMessage1,
    ConditionMessage2,
    QuestionsContent,
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
