import { createApp } from 'vue';
import { createStore } from 'vuex';

const { createApp } = require('vue');

import { questions_data } from './data/questions.js';

import { fittingMethod } from './data/calculation.js';

const store = createStore({
  state: {
    dd: questions_data,
    answ: {
      qwe1: '0',
      qwe2: 28,
      qwe3: 4,
      qwe4: '0',
      qwe5: '0',
      qwe6: '0',
      qwe7: '1',
      qwe8: '0',
      qwe10: '0',
    },
    questions: questions_data,
    result_arr: ['ДТС'],
    result_sleeve: ['ГЗ', 0, 0, '1.1', 0],
    result_lug: ['Б', 0, '1.20х1,5'],
    result_cable: 'МКЭШ 3х0,5',
    default_vals: [],
    result_radially_Lx: 0,
    result_aslant_Lx: 0,
    result_radially_condition1: false,
    lx: 0,
    condition1: false,
  },
  mutations: {
    setDefaultAnsw(state) {
      state.answ = {
        qwe1: 0,
        qwe2: 28,
        qwe3: 4,
        qwe4: 0,
        qwe5: 0,
        qwe6: 0,
        qwe7: 1,
        qwe8: 0,
        qwe9: 5,
        qwe10: 0,
      };
      result_condition1: false;
    },
    addValue(state, payload) {
      // console.log(payload);
      state.answ[payload.id] = payload.value;

      this.commit('res');
      this.commit('result_sleeve');
      this.commit('result_lug');

      // расчет длины и условий из "Результат и рекомендации"

      //переписать на единую функцию

      // qwe1 = 0 или 1 - указатель на тип монтажа
      if (state.answ.qwe2 && state.answ.qwe3 && state.answ.qwe9) {
        let fitting_res = fittingMethod(
          state.answ.qwe1,
          state.answ.qwe2,
          state.answ.qwe3,
          state.answ.qwe9
        );

        state.lx = fitting_res['lx'];
        state.condition1 = fitting_res['c1'];
      }

      // if (state.answ.qwe2 && state.answ.qwe3 && state.answ.qwe9) {
      //   if (state.answ.qwe1 == 1) {
      //     state.result_radially = 0;
      //     let res_aslant = aslant(
      //       state.answ.qwe2,
      //       state.answ.qwe3,
      //       state.answ.qwe9
      //     );
      //     console.log('res_aslant', res_aslant);
      //     state.result_aslant_Lx = res_aslant['lx'];
      //     state.result_condition1 = res_aslant['c1'];
      //   } else {
      //     state.result_aslant = 0;
      //     let res_radially = radially(
      //       state.answ.qwe2,
      //       state.answ.qwe3,
      //       state.answ.qwe9
      //     );
      //     console.log('res_radially', res_radially);
      //     state.result_radially_Lx = res_radially['lx'];
      //     state.result_condition1 = res_radially['c1'];
      //   }
      //   console.log(state.result_aslant_Lx, state.result_radially_Lx);
      //   //console.log(state.result_condition1);

      //   // this.showNotConditionMessage(state.result_radially_condition1, 0);
      // }
      console.log(state.answ);
    },
    // showNotConditionMessage(c1, c2) {
    //   if (c1 > 1) {
    //   }
    // },
    res(state) {
      if (state.answ['qwe5'] == '0') {
        if (state.answ['qwe4'] == '0') {
          state.result_arr[1] = '035';
        } else {
          state.result_arr[1] = '045';
        }
      } else {
        if (state.answ['qwe4'] == '0') {
          state.result_arr[1] = '064';
        } else {
          state.result_arr[1] = '074';
        }
      }
      //чувствительный элемент
      if (state.answ['qwe6']) {
        state.result_arr[2] =
          state.questions[5].answ.values[0].options[state.answ['qwe6']];
      }
      //Класс допуска
      state.result_arr[3] =
        state.questions[6].answ.values[0].options[state.answ['qwe7']];
      //Схема соединения
      state.result_arr[4] =
        state.questions[7].answ.values[0].options[state.answ['qwe8']];
      // console.log(state.result_arr);

      //Длина монтажной части
      state.result_arr[5] = 'L1';
      //Расчет кабеля
      if (state.answ['qwe8'] == '1') {
        state.result_cable = 'МКЭШ 5х0,75';
      } else {
        state.result_cable = 'МКЭШ 3х0,5';
      }
    },

    result_sleeve(state) {
      if (state.answ['qwe4'] == '0') {
        state.result_sleeve[1] = '16';
      } else {
        state.result_sleeve[1] = '25';
      }
    },
    result_lug(state) {
      if (state.answ['qwe1'] == '0') {
        state.result_lug[1] = 'П';
      } else {
        state.result_lug[1] = 'У';
      }
      if (state.answ['qwe9']) {
        state.result_lug[3] = state.answ['qwe9'];
      }
      if (state.answ['qwe10']) {
        state.result_lug[4] = parseInt(state.answ['qwe10']) + 1;
      }
    },
  },
});

import App from './App.vue';

let app = createApp(App);
app.use(store);

app.mount('#app');
