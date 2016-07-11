<template lang="jade">
    nav
        .nav-wrapper.teal(style="padding: 0 1rem;")
            a.brand-logo.left Scrum
            ul.right
                li
                    a(v-link="") Projects
                li
                    a(v-link="") Users
</template>

<script>
    export default {
        name: 'Header'
    }
</script>
