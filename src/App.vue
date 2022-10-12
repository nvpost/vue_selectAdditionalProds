<template>
  <div id="app">
    <Main :questions="questions" />
  </div>
</template>

<script>
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    Main,
  },
  created() {
    this.$store.commit('res');
  },
  data() {
    return {
      questions: this.$store.state.questions,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.input_item {
  border-bottom: 1px solid;
  padding-bottom: 5px;
}
.input_item .input_item {
  border-bottom: 0px;
}
</style>
