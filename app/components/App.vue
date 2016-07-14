<template lang="jade">
    .page
        header
            t:header
        main
            breadcrumb
            .container
                router-view
        footer
</template>


<script>
    import store from '_vuex/store'
    import header from './includes/Header.vue'
    import breadcrumb from './includes/Breadcrumb.vue'

    export default {
        name: 'App',
        store,
        components: {
            't:header': header,
            breadcrumb
        }
    }
</script>

<style lang="sass">
    @import "~./../../node_modules/materialize-css/bin/materialize.css";
    @import "~./../../node_modules/growl-alert/dist/growl-alert.css";
    @import "~_app/variables.scss";

    //Template
    .container {
        margin-right: auto;
        margin-left: auto;
        padding-left: 15px;
        padding-right: 15px;

        @media (min-width: 768px) {
            width: 750px;
        }

        @media (min-width: 992px) {
            width: 970px;
        }

        @media (min-width: 1200px) {
            width: 1170px;
        }
    }

    //Page
    header, main, footer {
        padding-left: $panel_padding;

        @media only screen and (max-width : 992px) {
            padding-left: 0;
        }
    }

    //buttons
    a.btn-floating.fixed {
        position: fixed;
        bottom: 30px;
        right: 30px;
    }


    //forms
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
