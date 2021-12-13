<template>
  <div style="height: 100vh;width: 100vh;">
    <div style="width: 1000px;height: 600px; background-color:#fff;">
      <div class="left">
        <div>欢迎回来</div>
        <el-input placeholder="手机/用户名" clearable />
        <el-input placeholder="密码" show-password />
        <el-button type="primary" plain>登录</el-button>
        <div>
          <span>
            没有账号？
            <a href>立即注册</a>
          </span>
          <i>/</i>
          <span>
            <a href>找回密码</a>
          </span>
        </div>
      </div>
      <div class="right">
        <img src alt />
      </div>
      <div class="bottom">
        <div>
          Copyright @
          <a href="index.htm">阿勇的个人网站</a>.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
.left {
  background-color: darkcyan;
  width: 40%;
  height: 80%;
}
.right {
  background-color: darkgoldenrod;
  width: 60%;
  height: 80%;
}
.bottom {
  background-color: darkkhaki;
  width: 100%;
  height: 20%;
}
</style>