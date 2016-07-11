import firebase from './connector';

const db = firebase.database()


export const fetchAllUsers = function () {
    return db.ref('/users').once('value');
}
