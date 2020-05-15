import Vue from "vue"
import Vuex from "vuex"

import _getters_getUser from './_getters/getUser'

import state from "./state"

Vue.use(Vuex)

export default {
    namespaced: true,
    state: state,
    getters: {
        getUser: _getters_getUser,
    },
    mutations: {
    },
    actions: {
    }
}
