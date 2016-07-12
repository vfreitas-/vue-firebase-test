<template lang="jade">
    .modal(v-el:modal)
        .modal-content
            slot(name="header")
            slot(name="body")
        .modal-footer
            slot(name="footer")
</template>

<script>
    export default {
        name: 'Modal',
        props: {
            name: {
                type: String,
                required: true
            }
        },
        events: {
            'modal-show': function (name) {
                if (this.name === name) {
                    this.show()
                }
            },
            'modal-hide': function (name) {
                if (this.name === name) {
                    this.hide()
                }
            }
        },
        methods: {
            show: function () {
                $(this.$els.modal).openModal()
            },
            hide: function () {
                $(this.$els.modal).closeModal()
            }
        }
    }
</script>

<style lang="sass" scoped>

</style>
