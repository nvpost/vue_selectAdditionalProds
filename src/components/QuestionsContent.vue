<template>
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
