<template>
  <div>
    点击次数：{{ counter }}
    <button @click="handleAdd()">+ 1</button>
    <button @click="handleAdd(9999)">+ 10</button>
  </div>
</template>
<script>
import { setTimeout } from "timers";
import { log } from "util";
export default {
  name: "watch",
  data: function() {
    return {
      counter: 0,
    };
  },
  methods: {
    handleAdd: function(count) {
      console.log(event);
      count = count || 1;
      console.log(count);

      // this指向当前 Vue实例app
      this.counter += count;
    },
  },
};
</script>
