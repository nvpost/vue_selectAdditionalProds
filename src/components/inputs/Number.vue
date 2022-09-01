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

    <button @click="setVal(question.id)">Установить</button>
  </div>
</template>
<script>
export default {
  name: 'Number',
  props: ['question'],
  methods: {
    setVal(id) {
      let val = document.querySelector('#val' + id).value;
      this.$store.commit('addValue', { id: 'qwe' + id, value: val });
    },
    setMin(v) {
      if (v.min) {
        return v.min;
      }
      if (v.case1) {
        return v.case1.min;
        if (this.$store.state.answ['qwe1'] == 'Наклонно') {
          return v.case2.min;
        }
      }
    },

    setMax(v) {
      if (v.max) {
        return v.max;
      }
      if (v.case1) {
        return v.case1.max;
        if (this.$store.state.answ['qwe1'] == 'Наклонно') {
          return v.case2.max;
        }
      }
    },

    setDefault(v) {
      if (v.default) {
        return v.default;
      } else if (v.case1) {
        return v.case1.step;
        if (this.$store.state.answ['qwe1'] == 'Наклонно') {
          return v.case2.step;
        }
      } else {
        return this.setMin(v);
      }
    },

    setStep(v) {
      if (v.step) {
        return v.step;
      } else if (v.case1) {
        return v.case1.step;
        if (this.$store.state.answ['qwe1'] == 'Наклонно') {
          return v.case2.step;
        }
      }
    },
  },
};
</script>
