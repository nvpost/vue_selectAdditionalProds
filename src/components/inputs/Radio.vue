<template>
  <div class="input_item">
    <h4>{{ question.id }}) {{ question.label }}</h4>

    <template v-for="(val, val_index) in question.answ.values[0].options">
      <div class="input_item_value">
        <input
          type="Radio"
          :id="'val' + question.id"
          :name="'val' + question.id"
          :checked="
            val_index == question.answ.values[0].default_id ? 'checked' : false
          "
          @change="$store.commit('addValue', {id: 'qwe'+question.id, value: val})"
        />
        <label :for="'val' + question.id">{{ val }}</label>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  props: ['question'],
  methods: {
    addAnsw(q) {
      console.log(q);
    },
  },
};
</script>

<style scoped>
.input_item {
  border-bottom: 1px solid;
}
</style>
