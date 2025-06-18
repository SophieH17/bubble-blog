<template>
  <el-space
    direction="vertical"
    class="menu-bar"
    alignment="start"
    size="large"
  >
    <router-link
      :to="item.path"
      v-for="item in navLinks"
      :key="item.path"
      class="menu-bar__item"
      ><el-space>
        <el-icon><component :is="item.icon" /></el-icon>
        <el-text><span>{{ item.name }}</span></el-text>
      </el-space>
    </router-link>
  </el-space>
</template>
<script setup lang="ts">
import { navLinks } from "../../utils/menu";
</script>
<style lang="scss" scoped>
.menu-bar {
  width: 120px;
  height: 100%;
  padding: 10px;
  position: fixed;
  top: 76px;
  left: 20px;

  &__item {
    // width: 100%;
    display: flex;
    height: 36px;
    background-color: var(--el-bg-color-overlay);
    border-radius: var(--el-border-radius-base);
    width: 120px;               
    padding: 0 20px;
    align-items: center;
    text-decoration: none;
    color: var(--el-text-color-secondary);
    .el-icon {
      font-size: 20px;
    }
    .el-text {
      font-size: 14px;
      font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
    }
    &:hover {
      background-color: var(--el-bg-color-hover);
      .el-icon, .el-text {
        color: var(--el-color-primary);
      }
    }
    
  }
  .router-link-active {
      background-color: var(--el-color-primary-light-8);
      .el-icon {
        color: var(--el-color-primary);
        font-weight: bold;
      }
      .el-text {
        color: var(--el-color-primary);
        font-weight: bold;
      }
    }
}
</style>
