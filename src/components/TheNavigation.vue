<template>
  <div class="nav">
    <nav>
      <router-link id="logo" to="/">Vue School Travel App</router-link>
      <router-link
          v-for="destination in destinations"
          :key="destination.id"
          :to="{ name : 'destination.show', params: { id: destination.id, slug: destination.slug }}"
      >
        {{ destination.name }} |
      </router-link>
    </nav>
  </div>
</template>

<script>
import sourceData from '@/data.json'
export default {
  name: "TheNavigation",
  data() {
    return {
      destinations: sourceData.destinations
    }
  }
}
</script>

<style scoped>
</style>