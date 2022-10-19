<template>
  <div
    class="condition_message"
    v-if="$store.state.condition1"
  >
    <ConditionMessage1 />
  </div>

  <div
    class="condition_message"
    v-if="$store.state.condition2 != 0"
  >
    <ConditionMessage2 />
  </div>

</template>


<script>
import ConditionMessage1 from './ConditionMessage1.vue'
import ConditionMessage2 from './ConditionMessage2.vue'

export default{
    name: 'Messages',
    components:{
        ConditionMessage1,
        ConditionMessage2,
    }
}

</script>