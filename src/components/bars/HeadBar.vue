<template>
  <div class="head-bar">
  <div class="logo-container" @click="backHome">
    <img src="../../assets/bubble-blog.svg" class="logo" />
    <span class="title">Bubble Blog</span>
  </div>

    <div class="right-actions">
      <!-- <el-icon><Message /></el-icon> -->
      <el-tooltip content="Notifications" placement="bottom">
        <el-button circle text>
          <el-icon :size="20">
            <Message />
          </el-icon>
        </el-button>
      </el-tooltip>
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <el-tooltip
        :content="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        placement="bottom"
      >
        <el-button @click="toggleTheme" circle text>
          <el-icon :size="22">
            <Moon v-if="!isDark" />
            <Sunny v-else />
          </el-icon>
        </el-button>
      </el-tooltip>
      <el-button
        type="primary"
        class="logout-button"
        @click="$router.push('/login')"
      >
        Logout
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { Moon, Sunny } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

const router = useRouter();
const backHome = () => {
  router.push("/");
};

const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
};

onBeforeMount(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  }
});
</script>

<style lang="scss" scoped>
.head-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: var(--el-bg-color-overlay);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
}

.logo-link {
  display: flex;
  text-decoration: none;      
  align-items: center;
  gap: 10px;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 8px 12px;
  transition: all 0.3s ease;
}
.right-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  font-family: "Arial", sans-serif;
}
</style>
