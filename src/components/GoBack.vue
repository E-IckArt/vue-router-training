<template>
    <span class="go-back">
        <button @click="$router.back()" class="btn">
        Go back
        </button>
    </span>
</template>

<script>
export default {
    name: "GoBack",
}
</script>