<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheNavigation from "@/components/TheNavigation.vue";
</script>

<template>
    <TheNavigation />
    <div class="container">
      <router-view v-slot="{Component}">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path"></component>
        </transition>
      </router-view>

    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
