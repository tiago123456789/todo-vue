<template>
    <div v-if="message" class="alert alert-danger">
        <p >{{message}}</p>
    </div>    
</template>

<script>
export default {
    name: "Alert",
    props: {
        message: String
    }
}
</script>

<style scoped>

</style>