<template lang="jade">
    .teal.lighten-3
        .nav-wrapper
            .col.s12
                a.breadcrumb(
                    v-for="link in links"
                    v-link="{path: link.path, activeClass: 'active'}"
                ) {{ link.name }}
</template>

<script>
    export default {
        name: 'Breadcrumb',
        props: {
            links: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style lang="sass" scoped>
    .col.s12 {
        padding: 0 1rem;
        height: 50px;
    }

    .breadcrumb {
        line-height: 50px;
    }
</style>
