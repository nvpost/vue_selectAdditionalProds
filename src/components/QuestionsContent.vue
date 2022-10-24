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
  name: 'QuestionsContent',
  props: ['questions'],
  components: {
    Radio,
    Number,
    Select,
  },
};
</script>
