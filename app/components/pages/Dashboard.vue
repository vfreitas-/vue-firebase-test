<template lang="jade">
    .dashboard
        h3 Dashboard
        project-table
</template>


<script>
    import table from './../projects/Table.vue'

    export default {
        name: 'Dashboard',
        components: {
            'project-table': table
        }
    }
</script>

<style lang="sass">

</style>
