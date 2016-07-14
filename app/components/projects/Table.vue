<template lang="jade">
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
    a.btn-floating.btn-large.waves-effect.waves-light.teal.fixed(
        @click="$broadcast('modal-show', 'project-form')"
    )
        i.material-icons add
</template>

<script>
    import modal from './../../common/Modal.vue'
    import form from './Form.vue'

    import {fetchProjects} from '_vuex/actions/project'

    export default {
        name: 'ProjectTable',
        vuex: {
            actions: { fetchProjects },
            getters: {
                projects: ({ project }) => project.projects
            }
        },
        ready: function () {
            this.fetchProjects()
        },
        components: {
            modal,
            'project-form': form
        }
    }
</script>

<style lang="sass" scoped>

</style>
