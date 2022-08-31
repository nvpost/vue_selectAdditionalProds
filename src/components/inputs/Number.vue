<template>
  <div class="input_item">
    <h4>{{ question.id }}) {{ question.label }}</h4>
    {{ setMin(question.answ.values[0]) }}
    <input
      type="number"
      :id="'val' + question.id"
      :min="setMin(question.answ.values[0])"
      :max="setMax(question.answ.values[0])"
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
      return 0;
    },

    setMax(v) {
      console.log(v);
      if (v.max) {
        return v.max;
      }
      return 0;
    },
  },
};
</script>
