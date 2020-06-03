import cpnB from "./cpnB.js"

const cpnA = Vue.extend({
  methods: {
    repeatCpnB(fromb) {
      console.log("from cpnB: " + fromb)
    },
    itemclick(index) {
      this.currentIndex = index;
      
    }
  },
  template: `
    <div>
      <h2>cpnA say: {{ msgA }}</h2>
      <ul>
      <!-- 点击标签时变红 -->
        <li v-for="(item, index) in movies" @click="itemclick(index)" :class="{active: currentIndex===index}">{{item}}</li>
      </ul>
      <cpn-b :fromA="msgA" @cpnBClicked="repeatCpnB"></cpn-b>
    </div>
  `,
  data() {
    return {
      msgA: "I'm cpnA.",
      movies: ["aaa", "bbb", "ccc"],
      currentIndex: 0,
    }
  },
  provide: {
    forBC: "for BC."
  }
})

Vue.component("cpn-b", cpnB)


export default cpnA;