<template>
<h1>Greetings {{ username }}</h1>
  <button @click="logout" class="btn">Log out</button>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Protected",
    data() {
        return {
            username: window.user,
        }
    },
    methods: {
        logout() {
            window.user = null
            this.$router.push({ path: '/' })
        }
    }

}
</script>

<style scoped>

</style>