<template>
<div class="login">
    <form class="form" @submit.prevent="login">
        <h1>Login</h1>
        <label for="username">Username</label>
        <input v-model="username" name="username" type="text" class="input">
        <label for="password">Password</label>
        <input v-model="password" name="password" type="text" class="input">
        <button class="btn">Login</button>
    </form>
</div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Login",
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        login() {
            // Auth user against API in a real app

            // From now :
            window.user = this.username;

            this.$router.push({ name: 'protected'});
        }
    }
}
</script>

<style scoped>

</style>