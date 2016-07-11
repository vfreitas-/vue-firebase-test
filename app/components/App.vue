<template lang="jade">
    .page
        t:header
        router-view
</template>


<script>
    import header from './includes/Header.vue'

    export default {
        name: 'App',
        components: {
            't:header': header
        }
    }
</script>

<style lang="sass">
    @import "~./../../node_modules/materialize-css/bin/materialize.css";
</style>
