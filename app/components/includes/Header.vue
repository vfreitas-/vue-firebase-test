<template lang="jade">
    nav
        .nav-wrapper.teal(style="padding: 0 1rem;")
            a.brand-logo.left Scrum
            ul.right
                li
                    a(v-link="") Projects
                li
                    a(v-link="") Users

    ul.side-nav.fixed(v-el:side-nav)
        li
            a(href="#!") Projects
        li
            a(href="#!") Users
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style lang="sass" scoped>
    @import "~_app/variables.scss";

    .side-nav {
        width: $panel_padding;
    }
</style>
