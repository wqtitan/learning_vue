<template>
  <div class="tab-bar-item" :style="activeStyle" @click="itemClick">
    <div><slot name="item-icon"></slot></div>
    <div><slot name="item-text"></slot></div>
  </div>
</template>

<script>


export default {
  name: "TabBarItem",
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
</style>