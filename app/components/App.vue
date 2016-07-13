<template lang="jade">
    .page
        t:header
        router-view
</template>


<script>
    import header from './includes/Header.vue'

    export default {
        name: 'App',
        components: {
            't:header': header
        }
    }
</script>

<style lang="sass">
    @import "~./../../node_modules/materialize-css/bin/materialize.css";
    @import "~./../../node_modules/growl-alert/dist/growl-alert.css";

    .input-field label {
        left: 0;
    }

    label:after {
        transition-property: all !important;
        font-size: 0.8rem;
        transform: none;
    }

    label:not(.active):after {
        transform: translateY(-140%);
    }
</style>
