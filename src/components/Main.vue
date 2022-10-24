<template>

  <span> {{ $store.state.condition1 }}, {{ $store.state.condition2 }} </span>
  <div class="app_container">
 
    <div class="questionsContent">
      <QuestionsContent :questions="questions" />
    </div>
    <div class="messages_field">
      <div class="messages">
        <Messages />
      </div>

      <div class="results_block">
        <Results />
      </div>

    </div>

  </div>

</template>

<script>

import QuestionsContent from './QuestionsContent.vue';
import Messages from './interface/Messages.vue'

import Results from './interface/Results.vue';


export default {
  name: 'Main',
  components: {
    QuestionsContent,
    Messages,
    Results,
},
  props: ['mes', 'questions'],
  created() {
    this.$store.commit('setDefaultAnsw');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.input_item {
  border-bottom: 1px solid;
}
.hello {
  margin-bottom: 180px;
}
.app_container{
  display: flex;
  max-width: 1200px;
  margin-left: auto;

}


</style>
