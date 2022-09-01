import { createApp } from 'vue';
import { createStore } from 'vuex';

const { createApp } = require('vue');

const store = createStore({
  state: {
    answ: {},
  },
  mutations: {
    addValue(state, payload) {
      state.answ[payload.id] = payload.value;
      console.log(state.answ);
    },
  },
});

import App from './App.vue';

let app = createApp(App);
app.use(store);

app.mount('#app');
