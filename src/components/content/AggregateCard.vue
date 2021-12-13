<template>
  <div style="width: 100%;height: 310px; border-radius:3px;">
    <div style="text-align:center;padding:10px">
      <h3>精选</h3>
    </div>
    <div v-for="item in messages" style="width: 100%;height: 100px;margin-bottom: 10px;">
      <mini-card-vue :message="item"></mini-card-vue>
    </div>
  </div>
</template>

<script>
import MiniCardVue from './MiniCard.vue'
export default {
  data() {
    return {
      messages: [
        {
          src: require('images/homeImg/message/4.jpg'),
          title: '陕西一交警中队指导员被起诉',
          content: '41岁的李磊（化名）当上了汉滨分局交通管理大队某交警中队指导员，2018年7月底，他开始主持该中队日常工作。在此后的两年多时间里，李磊利用职务之便，指使下属采取重复检测、伪造检测报告单、毁灭血样及放弃调查职责的手段，将杨某某等四人醉驾刑事案件改为饮酒驾驶行政案件，并以此收受钱财。',
          time: '2021年12月09日',
          media: '九派新闻'
        },
        {
          src: require('images/homeImg/message/1.jpg'),
          title: '冷冷冷！新一轮冷空气发力',
          content: '中国天气网讯 12月9日夜间至12日，新一轮冷空气将陆续影响我国大部，局地累计降温超16℃，前期大幅偏暖的格局将被扭转，气温降至正常水平或略偏低；同时西北地区东部、西南地区东部至黄淮、江淮、江南北部一带降水增多，雨雪加冷空气双重打压下，多地气温将刷新今冬以来新低。',
          time: '2021年12月10日',
          media: '中国天气网'
        },
        {
          src: require('images/homeImg/message/2.jpg'),
          title: '沈阳一楼盘降价被要求回收房源',
          content: '据人民网“领导留言板”12月8日消息，针对网民反映沈阳祥联·大河原著开发商降价卖房的留言，沈阳市沈北新区委书记8日回复称，房产局工作人员已告知开发商禁止低于备案价大幅降价销售。',
          time: '2021年12月10日',
          media: '澎湃新闻'
        },
      ]
    }
  },
  components: {
    MiniCardVue
  }
}
</script>

<style scoped>
</style>