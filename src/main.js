import { createApp } from 'vue';
import { createStore } from 'vuex';

const { createApp } = require('vue');

const store = createStore({
  state: {
    answ: {
      qwe5:0,
      qwe4:0
    },
    result_arr: ['ДТС'],
    default_vals:[]
  },
  mutations: {
    addValue(state, payload) {
      state.answ[payload.id] = payload.value;
      console.log(state.answ);
      this.commit('res');
    },
    res(state) {
      if (state.answ['qwe5'] && state.answ['qwe5'] == '0') {
        if (state.answ['qwe4'] && state.answ['qwe4'] == '1') {
          state.result_arr[1] = '045';
        } else {
          state.result_arr[1] = '035';
        }
      }
      console.log(state.result_arr);
    },
  },
});

import App from './App.vue';

let app = createApp(App);
app.use(store);

app.mount('#app');
