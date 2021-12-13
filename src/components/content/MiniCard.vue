<template>
  <div class="card" @click="newsClick">
    <div class="cardLeft">
      <div class="image">
        <img
          :src=message.src
          style="border-radius:3px; width: 100%;height: 100%; "
        />
      </div>
    </div>
    <div class="cardRight">
      <div class="content">
        <div style="font-size: 10px;-webkit-text-size-adjust:none; height: 20%;width: 100%;text-align: center;font-weight: bold;">{{message.title}}</div>
        <div style="font-size: 7px;-webkit-text-size-adjust:none;overflow: hidden; width: 100%;height: 70%;">&emsp;&emsp;{{message.content}}</div>
        <div style="font-size: 5px;-webkit-text-size-adjust:none;color: #999999; width: 100%;height: 20%;"><span>{{message.time}}</span>&emsp;&emsp;<span>{{message.media}}</span></div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  props:{
    message:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods: {
    newsClick(){
      this.$router.push(this.message.url)
    }
  },
}
</script>

<style scoped>
.card {
  height: 100%;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.cardLeft {
  float: left;
  width: 40%;
  height: 100%;
}
.image {
  margin-top: 8%;
  margin-left: 5%;
  width: 90%;
  height: 80%;
}
.cardRight {
  float: left;
  width: 60%;
  height: 100%;
}
.content {
  margin-top: 5.5%;
  margin-left: 2%;
  padding-bottom: 5.5%;
  width: 96%;
  height: 80%;
}
</style>