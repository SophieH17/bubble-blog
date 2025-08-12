<template>
  <el-space class="gather">
    <el-space
      v-for="(item, index) in gathers"
      :key="index"
      class="gather__item"
      :style="{ backgroundColor: item.bgColor }"
    >
      <el-space direction="vertical" size="s">
        <el-text type="default" size="large">{{ item.name }}</el-text>
        <span class="text-large font-600 mr-3">{{ item.total }}</span>
      </el-space>
      <el-button
        v-if="index > 0"
        size="xl"
        type="secondary"
        class="square-button"
        text
        bg
        ><el-icon><Plus /></el-icon
      ></el-button>
    </el-space>
  </el-space>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { overLink } from "../../utils/menu";
import { overviewData } from "../../mock/data";

const gathers = ref(overLink);
const keys = ["file", "article", "gallery", "diary"];
const drawGatherData = () => {
  let data = overviewData.data;
  for (let i = 0; i < gathers.value.length; i++) {
    gathers.value[i].total = data[keys[i]];
  }
};
onMounted(() => {
  drawGatherData();
});
</script>
<style lang="scss" scoped>
.square-button {
  width: 36px;
  height: 36px;
  border-radius: 8px;
}
.gather {
  width: 100%;

  :deep(> .el-space__item) {
    flex: 1;
  }

  &__item {
    background-color: var(--el-color-primary-light-9);
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
