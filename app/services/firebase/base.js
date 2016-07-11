
import firebase from 'firebase'
import {config} from './../../config'

const firebaseApp = firebase.initializeApp(config)

class Firebase {

    constructor () {
        this._base_path = ''
        this._firebase = firebaseApp
    }

    onceVal (path = null) {
        return this.database.ref(this._path(path)).once('value')
    }

    onVal (callback, path = null) {
        this.database.ref(this._path(path)).on('value', result => {
            callback(result)
        })
    }

    get database () {
        return this._firebase.database()
    }

    get auth () {
        return this._firebase.auth()
    }

    _path (p) {
        if (p) {
            return `${this._base_path}/${p}`
        } else {
            return this._base_path
        }
    }
}

export default Firebase
