<template>
  <div>
    <div class="blank">
      <img src="~images/cooperationImg/1.jpg" alt style="height: 100%;width: 100%;" />
    </div>

    <div id="nav">
      <div class="w1000 m_center p_rel">
        <div class="column">
          <img src="~images/cooperationImg/3.jpg" />
        </div>

        <div class="tab_lm">
          <ul class="donate_title">
            <li class="donate_sel" id="donate_tab_1">阿勇新闻网</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="clear"></div>
    <div class="w1000 m_center">
      <div id="donate_content_1">
        <div class="contactdiv" style="margin-right: 20px;">
          <img style="width: 490px;height: 160px;"
            src="~images/cooperationImg/2.jpg"
          />
          <div class="txt">
            昵称：程序勇
            <br />ID：weixin_51527799
            <br />网址：https://blog.csdn.net/weixin_51527799?spm=1001.2014.3001.5343
            <!-- 地址：xxxxxxx -->
            <!-- <br />邮编：xxxx -->
            <!-- <br />电话：xxxx -->
          </div>
        </div>

        <div class="contactdiv" style="margin-right:0px;">
          <img style="width: 490px;height: 160px;"
            src="~images/cooperationImg/4.jpg"
          />
          <div class="txt">
            昵称：Ayong1001
            <br />主体项目：移动端
            <br />项目主体框架：Vue
            <br />网址：https://github.com/Ayong1001
            <!-- 地址：xxxxxxx -->
            <!-- <br />邮编：xxxx -->
            <!-- <br />电话：xxxx -->
          </div>
        </div>

        <div class="clear"></div>
      </div>
    </div>

    <div class="clear"></div>

    <div id="pagebottom">
      <div class="w1000 m_center">
        <div class="left">
          地址：四川省成都市龙泉驿区
          <br />邮编：646200
          <br />
        </div>
        <div class="right">
          <div class="ewm">
            <p>微信</p>
            <img style="height: 95px;width: 95px;" src="~images/cooperationImg/6.jpg" />
          </div>

          <div class="ewm">
            <p>QQ</p>
            <img style="height: 95px;width: 95px;" src="~images/cooperationImg/7.jpg" />
          </div>

          <div class="ewm">
            <p>支付宝</p>
            <img style="height: 95px;width: 95px;" src="~images/cooperationImg/5.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.m_center {
  margin: 0 auto;
}
.p_rel {
  position: relative;
}
.blank {
  margin-top: 20px;
  margin-left: 100px;
  width: 85%;
  height: 400px;
}

.w1000 {
  width: 1000px;
}
.column {
  width: 240px;
  height: 140px;
  position: absolute;
  left: 0;
  top: -80px;
}

#pagebottom .left {
  float: left;
  width: 270px;
  line-height: 24px;
  margin-top: 90px;
  font-size: 14px;
  color: rgb(0, 0, 0);
  text-align: left;
}
#pagebottom .right {
  float: right;
  height: 148px;
  margin-top: 40px;
}
#pagebottom .right .ewm {
  float: right;
  width: 95px;
  height: 148px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  color: rgb(0, 0, 0);
  margin-left: 38px;
}

.tab_lm {
  margin-left: 240px;
}
.donate_title {
  height: 60px;
}
.donate_title .donate_sel {
  float: left;
  font-size: 14px;
  text-align: center;
  width: 150px;
  height: 59px;
  line-height: 59px;
  color: #e24746;
  text-align: center;
  border: 1px solid #e24746;
  border-bottom: none;
  background: #fff;
}
#donate_content_1 {
  overflow: hidden;
  padding-bottom: 30px;
  border-top: 1px dashed rgb(233, 227, 227);
}
#donate_content_2 {
  display: none;
  overflow: hidden;
  padding-bottom: 30px;
  min-height: 600px;
}

.contactdiv {
  width: 490px;
  height: 302px;
  float: left;
  margin-top: 36px;
  margin-right: 20px;
}
.contactdiv .txt {
  width: 460px;
  padding: 20px 14px;
  border: 1px solid #eaeaea;
  border-top: none;
  font-size: 14px;
  line-height: 30px;
  text-align: left;
}
</style>