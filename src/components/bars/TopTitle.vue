<template>
  <div class="page-title">
    <el-space
      ><span class="text-large font-600">{{ props.title }}</span>
    </el-space>

    <el-space>
      <slot name="custom"></slot>
      <div v-if="props.isSearch" class="mt-4">
        <el-input
          v-model="SearchQuery"
          style="max-width: 600px"
          placeholder="Please input"
          clearable
          class="input-with-select"
          @keyup.enter="handleSearch"
        >
          <template #append>
            <el-button :icon="Search" @click="handleSearch" />
          </template>
        </el-input>
      </div>
    </el-space>
  </div>
</template>

<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";
const SearchQuery = ref("");
type titleProps = {
  title: string;
  isSearch?: boolean;
};
const props = withDefaults(defineProps<titleProps>(), {
  title: "Title",
  isSearch: false,
});

const emit = defineEmits(["search"]);
const handleSearch = () => {
  emit("search", SearchQuery.value);
};
</script>

<style scoped lang="scss">
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
.text-large {
  font-size: 24px;
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.page-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 40px;
  width: 100%;
  background-color: var(--el-fill-color-blank);
}
</style>
