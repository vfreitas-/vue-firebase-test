<template lang="jade">
    .page
        t:header
        h1 Teste
        router-view
</template>


<script>
    import header from './includes/Header.vue'

    // import {fetchAllUsers} from './../services/firebase/users'


    import firebase from 'firebase'

    import {config} from './../config'

    const firebaseApp = firebase.initializeApp(config)


    export default {
        name: 'App',
        ready: function () {
            firebaseApp.database().ref('/users').once('value').then( response => {
                console.log(response)
            })
        },
        components: {
            't:header': header
        }
    }
</script>

<style lang="sass">
    @import "~./../../node_modules/materialize-css/bin/materialize.css";
</style>
