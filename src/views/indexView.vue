<template>
    <h1>Bubble Blog</h1>
    <nav>
      <router-link to="/overview">Overview</router-link> |
      <router-link to="/posts">Posts</router-link>
    </nav>
    <div>
      <router-view />
    </div>
</template>

<script setup lang="ts">
</script>