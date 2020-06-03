const cpnC = Vue.extend({
  template: `
    <div>
      <h2>cpnC: fromA {{ fromA }}</h2>
    </div>
  `,
  inject: {
    forBC: {
      type: String
    }
  },
  data() {
    return {
      fromA: this.forBC
    }
  },
})

export default cpnC;