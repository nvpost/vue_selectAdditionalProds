<template>
    <div class="results">
      <strong>Результат</strong>
      <p>
        <b>Датчик:</b> {{ $store.state.result_arr.join('.') }}
        {{ doSensor($store.state.result_arr) }}
      </p>
      <p><b>Гильза:</b> {{ $store.state.result_sleeve.join('.') }}</p>
      <p><b>Бобышка:</b> {{ $store.state.result_lug.join('.') }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Results',
    methods: {
      doSensor(sensor_arr) {
        console.log(sensor_arr);
        sensor_arr.forEach((i) => {
          // console.log(i);
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .results {
    position: fixed;
    background-color: #e4f5d4;
    width: 100%;
    bottom: 0px;
    padding: 10px;
    border-top: 1px solid #ccc;
  }
  </style>
  