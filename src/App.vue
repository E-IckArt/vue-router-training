<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="nav">
      <nav>
        <RouterLink to="/">Home </RouterLink>
        <RouterLink to="/brazil">Brazil </RouterLink>
        <RouterLink to="/hawaii">Hawaii </RouterLink>
        <RouterLink to="/jamaica">Jamaica </RouterLink>
        <RouterLink to="/panama">Panama </RouterLink>
      </nav>
    </div>
    <div class="container">
      <RouterView />
    </div>
</template>

<style scoped>

</style>
