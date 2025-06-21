<template>
  <el-space direction="vertical" size="xl" fill>
    <top-title title="Overview" :is-search="false">
      <!-- <template #custom><el-button>aaaaa</el-button></template> -->
    </top-title>
    <gather />
  </el-space>
</template>

<script setup lang="ts">
import TopTitle from "../components/bars/TopTitle.vue";
import gather from "../components/overview/gather.vue";
// import { ref } from 'vue'

// const searchResult = ref('')

// 处理子组件发出的 search 事件
// const onSearch = (searchKeyword: string) => {
//   console.log('收到搜索关键词:', searchKeyword)
//   searchResult.value = `正在搜索: ${searchKeyword}`
//   performSearch(searchKeyword)
// }
// const performSearch = (keyword: string) => {
//   // 搜索逻辑
// }
</script>
