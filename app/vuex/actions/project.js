import * as types from './../mutation-types'

import projectApi from '_services/firebase/projects'

export const fetchProjects = ({dispatch}) => {
    projectApi.onVal(projects => {
        dispatch(types.UPDATE_PROJECTS, projects.val())
    })
}
