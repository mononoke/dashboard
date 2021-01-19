import Vue from 'vue'
import Vuex from 'vuex'

import _getters_getItemsBySection from './_getters/getItemsBySection'
import _getters_getItemByName from './_getters/getItemByName'

import _actions_goto from './_actions/goto'
import _actions_gotoParams from './_actions/gotoParams'

import _mutations_navState from './_mutations/navState'
import _mutations_transitionVertical from './_mutations/helpers/transitionVertical'
import _mutations_setDefaultTransition from './_mutations/helpers/setDefaultTransition'
import _mutations_transitionModule from './_mutations/helpers/transitionModule'

import _mutations_resize from './_mutations/resize'

import _mutations_resetRootRouterViewKey from './_mutations/resetRootRouterViewKey'
import _mutations_resetSectionRouterViewKey from './_mutations/resetSectionRouterViewKey'

import state from './state'

Vue.use(Vuex)

export default {
    namespaced: true,
    state,
    getters: {
        getItemsBySection: _getters_getItemsBySection,
        getItemByName: _getters_getItemByName,
    },
    mutations: {
        navState: _mutations_navState,
        transitionVertical: _mutations_transitionVertical,
        setDefaultTransition: _mutations_setDefaultTransition,
        transitionModule: _mutations_transitionModule,

        resize: _mutations_resize,

        resetRootRouterViewKey: _mutations_resetRootRouterViewKey,
        resetSectionRouterViewKey: _mutations_resetSectionRouterViewKey,
    },
    actions: {
        goto: _actions_goto,
        gotoParams: _actions_gotoParams,
    },
}
