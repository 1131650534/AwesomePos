<template>
  <div id="app">
    <LeftNav></LeftNav>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
document.addEventListener("DOMContentLoaded", () => {
  // 获取html宽度 浏览器兼容 苹果5默认html font-size 16px
  let htmlWidth =
    document.documentElement.clientWidth || document.body.clientWidth;
  // 获取html对象
  let htmlDom = document.getElementsByTagName("html")[0];
  // 页面宽度固定不能大于750
  if (htmlWidth > 750) {
    htmlWidth = 750;
  }
  // 网易的方案
  // 苹果6 物理375px 设计稿750px  375/3.75=100  1rem=100px  375/7.5=100 1rem = 50px
  htmlDom.style.fontSize = htmlWidth / 7.5 + "px";
});
import LeftNav from './components/common/LeftNav';
export default {
  name:'app',
  components:{
    LeftNav
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.main{
  float: left;
  width: 95%;
  height: 100%;
  background-color: #EFF2F7;
  overflow: hidden;//溢出隐藏
}
</style>
