import {
    APP_CONFIG
} from '../mutation-types'

export default function(data) {
    const state = {
        settings: data
    };

    const mutations = {
        [APP_CONFIG] (state, settings) {
            state.settings = settings;
        }
    };

    return {
        state,
        mutations
    };
}