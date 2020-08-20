<template>
  <div class="nav">
    <img class="logo" src="./images/logo.jpg" />
    <ul class="menu">
      <li class="select">
        <a href="javascript:;" :class="{on: '/msite'===$route.path}" @click="goTo('/msite')">首页</a>
      </li>
      <li>
        <a href="javascript:;">关于我们</a>
      </li>
      <li>
        <a href="javascript:;">新闻中心</a>
      </li>
      <li>
        <a href="javascript:;">解决方案</a>
      </li>
      <li>
        <a href="javascript:;">产品中心</a>
      </li>
      <li>
        <a href="javascript:;">服务与支持</a>
      </li>
      <li>
        <a href="javascript:;">联系我们</a>
      </li>
    </ul>
    <div class="em1">
      <em>CN</em>
      <em>EN</em>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    goTo(path){
      this.$router.replace(path);
    }
  }
}
</script>
<style>
body,
a,
ul,
li,
em,
i {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style-type: none;
  font-style: normal;
}
.nav {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  margin-top: 10px;
}
.nav .logo {
  width: 264px;
  height: 84px;
  display: inline-block;
}
.nav .menu {
  position: absolute;
  left: 340px;
  top: 30px;
}
.nav .menu li {
  display: inline-block;
  margin: 18px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}
.nav .menu li a {
  color: rgba(0, 0, 0, 0.9);
}
.nav .menu .select .on{
  color : royalblue;
}
.nav .em1 {
  position: absolute;
  right: 20px;
  bottom: 10px;
  display: inline-block;
}
.nav .em1 em {
  display: inline-block;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  background-color: gainsboro;
}
</style>