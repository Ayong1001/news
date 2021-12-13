<template>
  <div class="home">
    <home-swiper-vue></home-swiper-vue>
    <div class="left">
      <el-scrollbar max-height="1150px" style="border-radius:5px;margin-right: 20px;">
        <div v-for="item in messages" style="width: 96%;height: 250px;margin-bottom: 30px;">
          <card-vue :message='item'></card-vue>
        </div>
      </el-scrollbar>
    </div>
    <div class="right">
      <CalendarVue></CalendarVue>
      <time-line-vue></time-line-vue>
      <aggregate-card-vue></aggregate-card-vue>
    </div>
  </div>
</template>

<script>
import HomeSwiperVue from "./HomeSwiper.vue"
import HomeMenuVue from "components/content/HomeMenu.vue"
import TimeLineVue from "components/common/TimeLine.vue"
import CalendarVue from "components/common/Calendar.vue"
import CardVue from "components/common/Card.vue"
import AggregateCardVue from "components/content/AggregateCard.vue"
export default {
  name: 'Home',
  
  data() {
    return {
      messages: [
        {
          url:'news1',
          src: require('images/homeImg/message/1.jpg'),
          title: '冷冷冷！新一轮冷空气发力',
          content: '中国天气网讯 12月9日夜间至12日，新一轮冷空气将陆续影响我国大部，局地累计降温超16℃，前期大幅偏暖的格局将被扭转，气温降至正常水平或略偏低；同时西北地区东部、西南地区东部至黄淮、江淮、江南北部一带降水增多，雨雪加冷空气双重打压下，多地气温将刷新今冬以来新低。',
          time: '2021年12月10日',
          media: '中国天气网'
        },
        {
          url:'news2',
          src: require('images/homeImg/message/2.jpg'),
          title: '沈阳一楼盘降价被要求回收房源',
          content: '据人民网“领导留言板”12月8日消息，针对网民反映沈阳祥联·大河原著开发商降价卖房的留言，沈阳市沈北新区委书记8日回复称，房产局工作人员已告知开发商禁止低于备案价大幅降价销售。',
          time: '2021年12月10日',
          media: '澎湃新闻'
        },
        {
          url:'news3',
          src: require('images/homeImg/message/3.jpg'),
          title: '80岁的市委原书记被缺席审判',
          content: '12月9日上午，最高检举行“积极适用违法所得没收程序，促进反腐败国际追逃追赃”新闻发布会。发布会提到了外逃贪官程三昌，称“河南省郑州市人民检察院首次适用缺席审判程序对潜逃境外的贪污犯罪嫌疑人程三昌提起公诉”。',
          time: '2021年12月10日',
          media: '北京青年报政知道'
        },
        {
          url:'news4',
          src: require('images/homeImg/message/4.jpg'),
          title: '陕西一交警中队指导员被起诉',
          content: '41岁的李磊（化名）当上了汉滨分局交通管理大队某交警中队指导员，2018年7月底，他开始主持该中队日常工作。在此后的两年多时间里，李磊利用职务之便，指使下属采取重复检测、伪造检测报告单、毁灭血样及放弃调查职责的手段，将杨某某等四人醉驾刑事案件改为饮酒驾驶行政案件，并以此收受钱财。',
          time: '2021年12月09日',
          media: '九派新闻'
        },
        {
          url:'news5',
          src: require('images/homeImg/message/5.jpg'),
          title: '美军抵近侦查！，原因曝光',
          content: '环球网昨晚（12月8日）报道显示，中国海军055型驱逐舰最近在黄海水域进行反潜、海峡要道封锁等实战课目演习。文章披露，该演习引起美国军方注意。连续两天，美军派出海军P-8A反潜巡逻机、空军RC-135S导弹监视机抵近055驱逐舰演习区域侦查。',
          time: '2021年12月09日',
          media: '北京青年报政知道'
        },
        {
          url:'news6',
          src: require('images/homeImg/message/6.jpg'),
          title: '比尔盖茨：大多数虚拟会议将转向元宇宙',
          content: '在近日发布的一封年终信中，微软联合创始人、亿万富翁比尔 盖茨（Bill Gates）不仅回顾了“最不寻常和艰难的2021年”，同时也对2022年及以后充满乐观——包括一个 “更加数字化的未来”。他预测元宇宙的兴起将极大地改变未来的工作。',
          time: '2021年12月10日',
          media: '财联社'
        },
      ]
    }
  },
  components: {
    HomeSwiperVue,
    HomeMenuVue,
    TimeLineVue,
    CalendarVue,
    CardVue,
    AggregateCardVue
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.left {
  width: 62%;
  height: 100%;
  float: left;
  margin-left: 100px;
}
.right {
  width: 25%;
  height: 100%;
  float: left;
}
</style>
