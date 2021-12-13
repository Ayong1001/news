<template>
  <div class="block">
    <el-carousel>
      <el-carousel-item v-for="item,index in imgs" :key="index" >
        <div>
          <div class="message">{{ item.message }}</div>
          <img :src="item.src" alt @click="itemclick(item)" style="width: 100%;height: 100%;position: relative;" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        {
          url: 'swiperNews1',
          src: require('images/homeImg/swiperImg/1.jpg'),
          message: '20年了，还是周杰伦'
        },
        {
          url: 'swiperNews2',
          src: require('images/homeImg/swiperImg/2.jpg'),
          message: '紫光集团重整方尘埃落定：阿里巴巴出局 智路建广联合体胜出'
        },
        {
          url: 'swiperNews3',
          src: require('images/homeImg/swiperImg/3.jpg'),
          message: '立陶宛外长正式提交辞呈，任职期间在台湾等问题上不断挑衅中国'
        },
        {
          url: 'swiperNews4',
          src: require('images/homeImg/swiperImg/4.jpg'),
          message: '央视新闻里戴“绿鱼头套”的男孩找到了，才上小学五年级！'
        }
      ]
    }
  },
  methods: {
    itemclick(item) {
      this.$router.push(item.url)
      // console.log(item.url);
    }
  },
}
</script>

<style scoped>
.block {
  width: 85%;
  margin-top: 20px;
  margin-left: 100px;
  margin-bottom: 40px;
}
.message {
  height: 10%;
  width: 80%;
  left: 9%;
  top: 85%;
  padding: 1%;
  z-index: 999;
  position: absolute;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
}
.el-carousel {
  width: 100%;
  height: 400px;
}
.el-carousel__item {
  width: 100%;
  height: 400px;
}
</style>