import cpnA from "./cpnA.js"

new Vue({
  data: {
    msg: "hello",
  },
  components: {
    "cpn-a": cpnA
  }
}).$mount("#app");