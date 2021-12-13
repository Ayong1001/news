<template>
  <div class="navBar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <img src="~images/navBarImg/news.jpg" alt class="navImg" />
      <el-menu-item @click="homeClick(home)" index="1">主页</el-menu-item>
      <el-menu-item @click="submitClick(submit)" index="2">在线投稿</el-menu-item>
      <el-menu-item @click="cooperationClick(cooperation)" index="3">联系我们</el-menu-item>

      <div style="margin-top: 10px ;margin-left: 300px;width: 230px;">
        <el-input placeholder="Please input">
          <template #append>
            <el-button circle>
              <el-icon>
                <Search />
              </el-icon>
            </el-button>
          </template>
        </el-input>
      </div>

      <el-dropdown>
        <span class="el-dropdown-link">
          丶阿勇
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-avatar>
        <img src="~images/navBarImg/1.jpg" alt />
      </el-avatar>
    </el-menu>
  </div>
</template>

<script>
import { Search, ArrowDown } from '@element-plus/icons'
export default {
  data() {
    return {
      activeIndex: 'home'
    }
  },
  components: {
    Search,
    ArrowDown
  },
  methods: {
    homeClick(){
      this.$router.replace('home')
    },
    submitClick(){
      this.$router.replace('submit')
    },
    cooperationClick(){
      this.$router.replace('cooperation')
    }
  },
}
</script>

<style scoped>
.navBar {
  position: relative;
  margin-left: 100px;
  margin-right: 100px;
}
.navImg {
  overflow: hidden;
  padding: 5px;
  height: 50px;
  width: 150px;
}
.el-dropdown {
  position: absolute;
  right: 0;
  top: 20px;
}
.el-avatar {
  position: absolute;
  right: 75px;
  top: 10px;
}
</style>