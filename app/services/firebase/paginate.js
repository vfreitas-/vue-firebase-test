import Firebase from './base'


class Project extends Firebase {

    constructor (path, limit = 15) {
        super()
        this._base_path = path
        this.limit = limit

        this.data = []
    }

    paginate () {
        let ref = this.database.ref(this.path)
            .orderByKey()
            .limitToFirst(this.limit)
            .startAt(this.getLastKey())

        return ref.once('value').then(data => {
            this.data = data.val()
        })
    }

    getLastKey () {
        return Object.keys(this.data).pop();
    }

}

export default new Project
