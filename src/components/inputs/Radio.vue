<template>
  <div class="input_item">
    <h4>{{ question.id }}) {{ question.label }}</h4>
    <template v-for="(val, val_index) in question.answ.values[0].options">
      <div class="input_item_value">
        <input
          type="Radio"
          :id="'val' + question.id + '_' + val_index"
          :name="'val' + question.id"
          :checked="
            val_index == question.answ.values[0].default_id ? 'checked' : false
          "
          @change="
            $store.commit('addValue', {
              id: 'qwe' + question.id,
              value: val_index,
            })
          "
        />
        <label :for="'val' + question.id + '_' + val_index">{{ val }}</label>
      </div>
    </template>

    <div
      v-if="
        $store.state.answ['qwe5'] &&
        $store.state.answ['qwe5'] == 'Кабельный вывод' &&
        question.addition
      "
    >
      <Number :question="question.addition" />
    </div>
  </div>
</template>

<script>
import Number from './Number.vue';
export default {
  name: 'Radio',
  components: {
    Number,
  },
  props: ['question'],
};
</script>
qwe5
<style scoped>
.input_item {
  border-bottom: 1px solid;
}
</style>
