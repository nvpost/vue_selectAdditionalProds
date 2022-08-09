<template>
  <div class="input_item_value">
    <input type="Radio" :id="id" :name="id" :checked="checked" />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'RadioItemValue',
  props: ['id', 'label', 'checked'],
};
</script>
