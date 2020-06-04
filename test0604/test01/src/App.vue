<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path='/home' activeColor="#ff0">
        <i slot="item-icon" class="el-icon-s-home"></i>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <i slot="item-icon" class="el-icon-menu"></i>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <i slot="item-icon" class="el-icon-shopping-cart-2"></i>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <i slot="item-icon" class="el-icon-s-custom"></i>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  }
}

</script>
<style>
@import url(./assets/css/base.css);
</style>
