<template>
  <div class="input_item">
    <h4>{{ question.id }}) {{ question.label }}</h4>
    {{ setMin(question.answ.values[0]) }}
    <input
      type="number"
      :id="'val' + question.id"
      :min="setMin(question.answ.values[0])"
      :max="setMax(question.answ.values[0])"
      :value="setDefault(question.answ.values[0])"
      :step="setStep(question.answ.values[0])"
    />
    {{ setMax(question.answ.values[0]) }}
  </div>
</template>
<script>
export default {
  name: 'Number',
  props: ['question'],
  methods: {
    setMin(v) {
      console.log(v);
      if (v.min) {
        return v.min;
      }
    },

    setMax(v) {
      if (v.max) {
        return v.max;
      }
    },

    setDefault(v) {
      if (v.default) {
        return v.default;
      }
    },

    setStep(v) {
      if (v.step) {
        return v.step;
      }
    },
  },
};
</script>
