import cpnC from "./cpnC.js"

const cpnB = Vue.extend({
  data() {
    return {
      msg: "I'm cpnB.",
      forBCFromA: this.forBC
    }
  },
  methods: {
    cpnBClick() {
      // console.log(this);
      
      this.$emit("cpnBClicked", this.msg)
    }
  },
  template: `
    <div>
      <h2>cpnB from cpnA: {{ fromA }} And {{forBCFromA}}</h2>
      <button @click="cpnBClick">cpnB</button>
      <cpn-c></cpn-c>
    </div>
  `,
  props: {
    fromA: {
      type: String,
    }
  },
  inject: {
    forBC: {
      type: String
    }
  }
})

Vue.component("cpn-c", cpnC)


export default cpnB;