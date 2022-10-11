<template>
  <div class="message_block error" v-if="$store.state.condition1 > 1">
  <div class="close" @click="$store.state.condition1=false">&#128473;</div>
    <p>
      Коэффициент погружения датчика больше единицы, скорее всего диаметр
      трубопровода слишком мал.
    </p>
    <p>
      При возможности попробуйте поменять входные параметры, влияющие на глубину
      погружения:
    
    <ul>
      <li>Пункт 1. Установить тип монтажа Наклонный</li>
      <li>
        Пункт 2. Увеличить внутренний диаметр, использовав расширитель на трубопроводе
      </li>
    </ul>
    </p>
    Коэффициент погружения: {{ $store.state.condition1 }}
  </div>
  <div class="message_block success c1" v-if="$store.state.condition1 < 1">
    Условие 1. Рассчитано. <span>&#128504;</span>
  </div>
</template>

<script>
export default {
  name: 'ConditionMessage1',
};
</script>

<style scoped>

</style>
