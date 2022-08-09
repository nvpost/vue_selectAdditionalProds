<template>
  <div class="input_item">
    <h4>{{ question.id }}) {{ question.label }}</h4>
    {{ question.answ.values.options }}
    <template v-for="(val, val_index) in question.answ.values[0].options">

    <RadioItemValue :id="'val' + question.id" 
    :label="val"
    :checked="val_index == question.answ.values[0].default_id ? 'checked': false"
    >
    </template>
  </div>
</template>

<script>
import RadioItemValue from './RadioItemValue';

export default {
  name: 'Radio',
  components: {
    RadioItemValue
  },
  props: ['question'],
};
</script>

<style scoped>
.input_item {
  border-bottom: 1px solid;
}
</style>
