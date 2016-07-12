<template lang="jade">
    .dashboard
        breadcrumb(:links="[{path: '/',name: 'Dashboard'}]")
        h3 Dashboard

        table.striped.highlight.responsive-table
            thead
                tr
                    th(data-field="id")
                    th(data-field="name")
            tbody
                tr(v-for="project in projects")
                    td
                    td
                    td
        modal(name="project-form")
            h4(slot="header")
            project-form(slot="body")

        a.btn-floating.btn-large.waves-effect.waves-light.teal(
            @click="$broadcast('modal-show', 'project-form')"
        )
            i.material-icons add
</template>


<script>
    import breadcrumb from './../includes/Breadcrumb.vue'
    import modal from './../../common/Modal.vue'
    import projectForm from './../projects/Form.vue'

    import ProjectService from './../../services/firebase/projects'

    export default {
        name: 'Dashboard',
        data: function() {
            return {
                show: false
            }
        },
        ready: function () {
            ProjectService.onceVal().then(projects => {
                console.log(projects.val())
            })
        },
        components: {
            breadcrumb,
            modal,
            'project-form': projectForm
        }
    }
</script>

<style lang="sass">
    a.btn-floating {
        position: fixed;
        bottom: 30px;
        right: 30px;
    }
</style>
