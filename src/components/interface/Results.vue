<template>
    <div class="results">
      <strong>Результат</strong>
      <p>
        <b>Датчик:</b> {{ doSensor($store.state.result_arr) }}
      </p>
      <p><b>Гильза:</b> {{ $store.state.result_sleeve.join('.') }}</p>
      <p><b>Бобышка:</b> {{ $store.state.result_lug.join('.') }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Results',
    data() {
      return{
        sensor_marks: ['', '', '-', '.', '', '.', '/'],
      }
      
    },
    methods: {
      doSensor(sensor_arr) {
        let sensor_res = ''
        sensor_arr.forEach((i, idx) => {
          sensor_res+=this.sensor_marks[idx]+i
        })
        console.log(sensor_res)
        //Выполняем только если есловия 2 расчитано
        // this.getPriceData(sensor_res)
        
        return sensor_res
      },

      getPriceData(sensor){
        let url = 'https://owen.ru/upl_files/modules/price_getter/get.php?articles='+sensor
        fetch(url)
        .then(res=>res.json())
        .then(data=>{console.log(data)})
      }
    },
  };
  </script>
  
  <style scoped>
  </style>
  