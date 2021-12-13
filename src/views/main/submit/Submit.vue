<template>
  <div class="submit">
    <div style="width: 45%;margin-left: 26%;">
      <h3 style="text-align: center;padding-left: 15%;padding-top: 2%;padding-right: 15%;">
        您的个人信息受法律保护
        <br />个人著作权不容他人侵犯
      </h3>
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item label="投稿主题：" label-width="auto">
          <el-input v-model="form.main" placeholder="请输入主题"></el-input>
        </el-form-item>
        <el-form-item label="投稿人姓名：">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="联系方式：">
          <el-input v-model="form.phone" placeholder="请输入联系方式"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱：">
          <el-input v-model="form.email" placeholder="请输入电子邮箱"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-upload
      ref="upload"
      class="upload-demo"
      :auto-upload="false"
      style="margin-left: 0; text-align: center;"
    >
      <template #trigger>
        <el-button size="small" type="success" plain>选择文件</el-button>
      </template>
      <el-button style="margin-left: 10px" size="small" type="warning" plain>上传文件</el-button>
      <template #tip>
        <div class="el-upload__tip">请选择小于10MB的文件上传</div>
      </template>
    </el-upload>
    <el-button type="primary" @click="submitClick" style="margin: 1%;margin-left: 46%;">提交</el-button>

    <!--投稿须知等-->
    <div style="width: 80%;margin-left: 9%;">
      <div class="notice_tit">投稿须知</div>
      <div class="notice_con">
        <p>1、来稿请写明提供者、E-mail以及联系电话：文献最好以word文件格式 发送给本刊。</p>
        <p>3、本刊收到稿件后，在1-3个工作日内把本刊对稿件的意见通知给作者。</p>
      </div>
      <div class="notice_tit">投稿注意事项</div>
      <div class="notice_con">
        <p>投稿邮件标题格式：姓名 - 投稿名 - 日期。</p>
        <p>如：张三--“xxx地发生xxx事”</p>
        <p>（请务必投搞稿邮件标题格式来投稿，否则不给予处理)</p>
      </div>
      <div class="notice_tit">稿件要求</div>
      <div class="notice_con">
        <p>1、选题观点明确，内容充实，语言精炼，资料可靠。对于热点内容，将优先发表，稿酬从优。</p>
        <p>2、文稿书写格式及要求。来稿请按如下顺序撰写：标题、投稿者姓名、摘要（不超过200字）、关键词。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        main: '',
        name: '',
        phone: '',
        email: '',
      }
    }
  },
  methods: {
    submitClick(){
      alert('提交成功！')
    }
  },
}
</script>

<style scoped>
.submit {
  width: 80%;
  margin-left: 130px;
  background-color: #fff;
  font-size: 18px;
  line-height: normal;
  border-radius: 5px;

}
.notice_tit {
  padding: 22px 0 14px;
  color: #c23036;
  font-weight: bold;
}
p {
  color: #666;
  line-height: 25px;
  font-size: 12px;
}

</style>