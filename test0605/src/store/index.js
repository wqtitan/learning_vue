import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 100,
    numbers: [1, 22, 6, 4, 6, 10],
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    incrementCount(state, number) {   //接收参数
      state.counter += number;
    }
  },
  actions: {
  },
  getters: {  //类似computed
    doubleCounter(state) {
      return 2 * state.counter ;
    },
    numberFilter(state) {   // 返回函数以接收参数
      return (number) => state.numbers.filter(n => n > number);
    }
  },
  modules: {
  }
})
