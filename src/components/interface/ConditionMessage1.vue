<template>
  <div class="message_block error" v-if="!$store.state.condition1">
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
  </div>
  <div class="message_block success c1" v-if="$store.state.condition1">
    Условие 1. Рассчитано. <span>&#128504;</span>
  </div>
</template>

<script>
export default {
  name: 'ConditionMessage1',
};
</script>

<style scoped>

.message_block {
  border: 1px solid;
  padding: 10px;
  position: relative;
  margin: 10px;
}
.error {
  background-color: #ffcdd2;
}
.success {
  background-color: #81c784;
}
.success span {
  line-height: 0;
  font-size: 26px;
}
.close {
  position: absolute;
  right: 15px;
  top: 6px;
  cursor: pointer;
}
</style>
