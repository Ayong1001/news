  <template>
  <div class="homeMenu">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index='/home/a'>
        <el-icon>
          <wind-power />
        </el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index='/home/b'>
        <el-icon>
          <Watermelon />
        </el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index='/home/c'>
        <el-icon>
          <sunny />
        </el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index='/home/d'>
        <el-icon>
          <star />
        </el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

  <script>
import { defineComponent, ref } from 'vue'
import {
  WindPower,
  Watermelon,
  Sunny,
  Star
} from '@element-plus/icons'

export default defineComponent({
  components: {
    Watermelon,
    WindPower,
    Sunny,
    Star,
  },
  setup() {
    const isCollapse = ref(true)
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      isCollapse,
      handleOpen,
      handleClose,
    }
  },
})
</script>

  <style>
.homeMenu {
  background-color: white;
  width: 1100px;
  margin-left: 100px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>