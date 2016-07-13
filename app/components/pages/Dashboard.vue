<template lang="jade">
    .dashboard
        breadcrumb(:links="[{path: '/',name: 'Dashboard'}]")
        h3 Dashboard

        .container
            table.striped.highlight
                thead
                    tr
                        th(data-field="id") ID
                        th(data-field="name") Name
                tbody
                    tr(v-for="(id, project) in projects")
                        td {{ id }}
                        td {{ project.name }}
        modal(name="project-form" v-bind:form="true")
            project-form(slot="content")

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
                show: false,
                projects: []
            }
        },
        ready: function () {
            ProjectService.onVal(projects => {
                this.projects = projects.val()
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
