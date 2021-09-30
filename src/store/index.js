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
        },
        SPPB: {
            stand: null,
            tandemStand: null,
            semiTandemStand: null,
            gait: null,
            rise: null,
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
        },
        UPDATE_SPPB(state, data) {
            state.form.SPPB = data
        },
        UPDATE_SPPB_SCORE(state, score) {
            state.form.SPPB.total = score
        }
    }
})

export default store;