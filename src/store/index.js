import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase'
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { ToastProgrammatic } from "buefy";

Vue.use(Vuex)

function initForm() {
    return {
        id: null,
        updated: null,
        created: null,
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
        },
        MNA: {
            A: null,
            B: null,
            C: null,
            D: null,
            E: null,
            F: null,
            G: null,
            H: null,
            I: null,
            J: null,
            K: [],
            KScore: null,
            L: null,
            M: null,
            N: null,
            O: null,
            P: null,
            Q: null,
            R: null,
            totalScreen: null,
            totalAssessment: null,
            total: null,
        },
        vision: {
            distance: {
                smallE: null,
                largeEfar: null,
                largeEnear: null
            },
            near: {
                result: null
            }
        },
        hearing: {
            result: null
        },
        psychology: {
            mood: []
        },
        socialCare: {
            result: []
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
        },
        UPDATE_MNA(state, data) {
            state.form.MNA = data
        },
        UPDATE_MNA_SCREEN_SCORE(state, score) {
            state.form.MNA.totalScreen = score
        },
        UPDATE_MNA_ASSESSMENT_SCORE(state, score) {
            state.form.MNA.totalAssessment = score
        },
        UPDATE_MNA_K_SCORE(state, score) {
            state.form.MNA.Kscore = score
        },
        UPDATE_MNA_TOTAL_SCORE(state) {
            state.form.MNA.total = state.form.MNA.totalScreen + state.form.MNA.totalAssessment
        },
        UPDATE_DISTANCE_VISION(state, data) {
            state.form.vision.distance = data
        },
        UPDATE_NEAR_VISION(state, data) {
            state.form.vision.near = data
        },
        UPDATE_HEARING(state, data) {
            state.form.hearing = data
        },
        UPDATE_MOOD(state, data) {
            state.form.psychology = data
        },
        UPDATE_SOCIAL_CARE(state, data) {
            state.form.socialCare = data
        },
        UPDATE_FORM_ID(state, data) {
            state.form.id = data
        },
        UPDATE_FORM_UPDATE_DATETIME(state) {
            state.form.updated = new Date()
        },
        UPDATE_FORM_CREATE_DATETIME(state) {
            state.form.created = new Date()
        },
    },
    actions: {
        async saveForm({commit, state}) {
            const ref = collection(db, 'records')
            if (state.form.id == null) {
                commit('UPDATE_FORM_CREATE_DATETIME')
                commit('UPDATE_FORM_UPDATE_DATETIME')
                const docRef = await addDoc(ref, state.form)
                commit('UPDATE_FORM_ID', docRef.id)
                ToastProgrammatic.open({
                    type: 'is-success',
                    message: 'Data has been saved.'
                })
            } else {
                commit('UPDATE_FORM_UPDATE_DATETIME')
                await setDoc(doc(db, "records", state.form.id), state.form)
            }
        },
        resetForm ({commit}) {
            commit('UPDATE_FORM', initForm())
        }
    }
})

export default store;