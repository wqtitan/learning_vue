import cpnB from "./cpnB.js"

const cpnA = Vue.extend({
  methods: {
    repeatCpnB(fromb) {
      
      
      console.log("from cpnB: " + fromb)
    }
  },
  template: `
    <div>
      <h2>cpnA say: {{ msgA }}</h2>
      <cpn-b :fromA="msgA" @cpnBClicked="repeatCpnB"></cpn-b>
    </div>
  `,
  data() {
    return {
      msgA: "I'm cpnA.",
    }
  },
  provide: {
    forBC: "for BC."
  }
})

Vue.component("cpn-b", cpnB)


export default cpnA;