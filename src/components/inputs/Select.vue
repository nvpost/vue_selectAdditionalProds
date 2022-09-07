<template>
  <div class="input_item">
    <h4>{{ question.id }}) {{ question.label }}</h4>

    <select :id="'val' + question.id" @change="setVal(question.id)">
      <option
        v-for="(option, option_index) in question.answ.values[0].options"
        :selected="question.answ.values[0].default_id == option_index"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: ['question'],
  methods: {
    setVal(id) {
      let val = document.querySelector('#val' + id).selectedIndex;
      this.$store.commit('addValue', { id: 'qwe' + id, value: val });
    },
  },
};
</script>
