<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home">
        <i class="el-icon-s-home" slot="item-icon"></i>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <i class="el-icon-menu" slot="item-icon"></i>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="yellow">
        <i class="el-icon-shopping-cart-1" slot="item-icon"></i>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#f300f3">
        <i class="el-icon-s-custom" slot="item-icon"></i>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import TabBar from "./components/TabBar";
import TabBarItem from "./components/TabBarItem";

Vue.use(ElementUI);

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>
