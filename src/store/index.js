import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function initForm() {
    return {
        country: null,
        minicog: {
            recall: null,
            clock: null,
            total: null
        }
    }
}

const store = new Vuex.Store({
    state: {
        form: initForm(),
    },
    mutations: {
        UPDATE_FORM(state, form) {
            state.form = form
        },
        UPDATE_MINICOG(state, data) {
            state.form.minicog = data
        },
        UPDATE_MINICOG_SCORE(state, score) {
            state.form.minicog.total = score
        }
    }
})

export default store;