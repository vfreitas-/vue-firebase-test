<template lang="jade">
    .row
        .col.s12
            h4 New Project
            .row
                .input-field
                    input.validate(
                        id="name"
                        type="text"
                    )
                    label(for="name") Project Name
</template>

<script>
    export default {
        name: 'ProjectForm'
    }
</script>

<style lang="sass" scoped>

</style>
