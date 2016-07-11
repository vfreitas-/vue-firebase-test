<template lang="jade">
    .dashboard
        breadcrumb(:links="[{path: '/',name: 'Dashboard'}]")
        h3 Dashboard
        .form

        //- table
        //-     thead
        //-         tr
        //-             th(data-field="id")
        //-             th(data-field="name")
        //-     tbody
        //-         tr(v-for="project in projects")
        //-             td
        //-             td
        //-             td
</template>


<script>
    import breadcrumb from './../includes/Breadcrumb.vue'

    import ProjectService from './../../services/firebase/projects'

    export default {
        name: 'Dashboard',
        ready: function () {
            ProjectService.onceVal().then(projects => {
                console.log(projects.val())
            })
        },
        components: {
            breadcrumb
        }
    }
</script>
