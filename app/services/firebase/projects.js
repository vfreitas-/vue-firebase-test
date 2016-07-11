import Firebase from './base'


class Project extends Firebase {

    constructor () {
        super()
        this._base_path = '/projects'
    }

}

export default new Project
