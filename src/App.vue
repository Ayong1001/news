<template>
  <div id="app">
    <el-header>
    <nav-bar-vue></nav-bar-vue>
    </el-header>
    <el-main class="main">
      <router-view></router-view>
    </el-main>
    <el-footer>
      <footer-vue></footer-vue>
    </el-footer>
  </div>
</template>

<script>
import NavBarVue from "./views/nav/NavBar.vue"
import FooterVue from "./views/footer/Footer.vue"

export default {
  components: {
    NavBarVue,
    FooterVue
  },
  mounted() {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0)
    })
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.main {
  background-color: #f7f9ff;
}
</style>
