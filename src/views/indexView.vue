<template>
  <div class="index-view">
    <menu-bar />
    <router-view class="router-content"/>
  </div>
</template>

<script setup lang="ts">
import MenuBar from "../components/bars/MenuBar.vue";
</script>

<style lang="scss" scoped>
.index-view {
  display: flex;
  padding: 20px 20px 20px 210px;
}
.router-content {
  width: 100%;     
}
</style>
