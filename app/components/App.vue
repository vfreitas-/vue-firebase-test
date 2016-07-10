<template lang="jade">
    .page
        t:header
        h1 Teste
        router-view
</template>


<script>
    import header from './includes/Header.vue'

    export default {
        name: 'App',
        components: {
            t:header: header
        }
    }
</script>
