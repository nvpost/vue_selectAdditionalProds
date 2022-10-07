<template>
  <div class="error">
    <p>
      Коэффициент погружения датчика больше единицы, скорее всего диаметр
      трубопровода слишком мал.
    </p>
    <p>
      При возможности попробуйте поменять входные параметры, влияющие на глубину
      погружения:
    
    <ul>
      <li>П1 Установить тип монтажа Наклонный</li>
      <li>
        П2 Увеличить внутренний диаметр, использовав расширитель на трубопроводе
      </li>
    </ul>
    </p>
    Коэффициент погружения: {{ $store.state.condition1 }}
  </div>
</template>

<script>
export default {
  name: 'ConditionMessage1',
};
</script>

<style scoped>

.error{
  border: 1px solid;
  background-color: #ffcdd2;
  /* color: #fff; */
  padding: 10px;
}
</style>
