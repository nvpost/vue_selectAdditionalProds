<template>
<div class="message_block error">
  <div class="close" @click="$store.state.condition2=0">&#128473;</div>
    <p>
      Рекомендация минимальной длины погружения в {{$store.state.answ.answ7?75:80}} мм для класса допуска {{$store.state.answ.answ7?'В':'А'}} не проходит.
    </p>
    <p>
      При возможности попробуйте поменять входные параметры, влияющие на глубину погружения:
    <ul>
      <li>Пункт 1. Установить тип монтажа {{$store.state.answ.answ1?'Наклонный':'Радиально'}}Наклонный</li>
      <li>
        Пункт 2. Увеличить внутренний диаметр, использовав расширитель на трубопроводе
      </li>
      <li>Пункт 3. Увеличить коэффициент погружения</li>
      <li>Пункт 4. Установить другую длину бобышки</li>
    </ul>
    </p>
</div>
</template>
<script>
export default {
  name: 'ConditionMessage2',
};
</script>
