<template>
  <div id="app">
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <div><button @click="addition">+</button></div>
    <div><button @click="addCounter(5)">+5</button></div>
    <vuex-test/>
  </div>
</template>

<script>
import VuexTest from './components/VuexTest'
export default {
  name: "App",
  data() {
    return {
      message: "App"
    }
  },
  components: {
    VuexTest
  },
  methods: {
    addition() {
      this.$store.commit('increment');
    },
    addCounter(number) {
      this.$store.commit('incrementCount', number)
    }
  },
  
}
</script>
<style>

</style>
