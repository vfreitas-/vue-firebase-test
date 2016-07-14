<template lang="jade">
    breadcrumb(:links="[{path: '/',name: 'Dashboard'}]")
    .dashboard
        h3 Dashboard
        project-table
    footer
</template>


<script>
    import breadcrumb from './../includes/Breadcrumb.vue'
    import table from './../projects/Table.vue'

    export default {
        name: 'Dashboard',
        components: {
            breadcrumb,
            'project-table': table
        }
    }
</script>

<style lang="sass">

</style>
