<template>
  <div class="tab-bar-item" @click="itemClick" :style="activeStyle">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
    <slot name="item-img"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  methods: {
    itemClick() {
      console.log(this.isActive);
      
      this.$router.replace(this.path).catch(err => err);
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
}
</style>