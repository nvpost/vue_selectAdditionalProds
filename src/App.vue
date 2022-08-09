<template>
  <div id="app">
    <Main :mes="mes" :questions="questions" />
  </div>
</template>

<script>
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    Main,
  },
  data() {
    return {
      mes: 'hi',
      questions: [
        // 1
        {
          id: 1,
          label:
            'Укажите как вы планируете осуществлять монтаж датчика. (ГОСТ 8.586.5-2005 пункт 6.3.4)',
          answ: {
            type: 'radio',
            values: ['Радиально', 'Наклонно'],
          },
        },

        // 2
        {
          id: 2,
          label:
            'Укажите внутренний диаметр трубопровода в месте установки датчика в миллиметрах',
          answ: { type: 'number', values: [{ min: 28, max: 160 }] },
        },
        // 3
        {
          id: 3,
          label:
            'Укажите глубину погружения в трубопровод.  (ГОСТ 8.586.5-2005 пункт 6.3.2 и 6.3.3)',
          answ: {
            type: 'select',
            values: [{ default_id: 4, options: [0.3, 0.4, 0.5, 0.6, 0.7] }],
          },
        },
        // 4
        {
          id: 4,
          label: 'Укажите давление рабочей среды',
          answ: {
            type: 'select',
            values: [
              {
                default_id: 0,
                options: [
                  'до 16Мпа(160атм)',
                  'от 16Мпа(160атм) до 25Мпа(250атм)',
                ],
              },
            ],
          },
        },
        //5
        {
          id: 5,
          label: 'Датчик с кабельным выводом или коммутационной головкой',
          answ: {
            type: 'select',
            values: [
              {
                default_id: 0,
                options: ['Коммутационная головка', 'Кабельный вывод'],
              },
            ],
          },
          addition: {
            id: 5.1,
            label: 'Какой длины кабельный вывод в метрах?',
            answ: {
              type: 'number',
              values: [{ default: 0.2, min: 0.2, max: 20, step: 0.5 }],
            },
          },
        },
        // 6
        {
          id: 6,
          label: 'Укажите тип чувствительного элемента',
          answ: {
            type: 'select',
            values: [
              {
                default_id: 0,
                options: [
                  '50М',
                  'РТ100',
                  '100М',
                  'Рт1000',
                  'Рт500',
                  '100П',
                  '50П',
                ],
              },
            ],
          },
        },
        // 7
        {
          id: 7,
          label: 'Укажите класс допуска чувствительного элемента ДТС',
          answ: {
            type: 'radio',
            values: [{ default_id: 1, options: ['А', 'В'] }],
          },
        },
        // 8
        {
          id: 8,
          label: 'Укажите схему соединения',
          answ: { type: 'radio', values: [{ default_id: 0, options: [3, 4] }] },
        },
        // 9
        {
          id: 9,
          label: 'Укажите требуемую длину бобышки в миллиметрах',
          answ: {
            type: 'number',
            values: [
              {
                case1: { min: 25, max: 100, default: 25, step: 5 },
                case2: { min: 40, max: 100, default: 40, step: 5 },
              },
            ],
          },
        },
        // 10
        {
          id: 10,
          label: 'Укажите материал бобышки.',
          answ: {
            type: 'radio',
            values: [
              {
                default_id: 0,
                options: ['Сталь 20', 'Нержавеющая сталь AISI304'],
              },
            ],
          },
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
