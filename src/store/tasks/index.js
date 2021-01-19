import Vue from 'vue'
import Vuex from 'vuex'

import _getters_getTasks from './_getters/getTasks'
import _getters_getGroups from './_getters/getGroups'

import _mutations_putTasks from './_mutations/putTasks'
import _mutations_changeTodoStatus from './_mutations/changeTodoStatus'
import _mutations_removeTodo from './_mutations/removeTodo'
import _mutations_addTodo from './_mutations/addTodo'
import _mutations_changeTodoGroup from './_mutations/changeTodoGroup'
import _mutations_addGroup from './_mutations/addGroup'
import _mutations_removeGroup from './_mutations/removeGroup'

import _actions_putTasks from './_actions/putTasks'
import _actions_changeTodoStatus from './_actions/changeTodoStatus'
import _actions_removeTodo from './_actions/removeTodo'
import _actions_addTodo from './_actions/addTodo'
import _actions_changeTodoGroup from './_actions/changeTodoGroup'
import _actions_addGroup from './_actions/addGroup'
import _actions_removeGroup from './_actions/removeGroup'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        tasks: [],
        groups: [
            { id: '11', name: 'one' },
            { id: '22', name: 'two' },
            { id: '33', name: 'three' },
        ],
    },
    getters: {
        getTasks: _getters_getTasks,
        getGroups: _getters_getGroups,
    },
    mutations: {
        putTasks: _mutations_putTasks,
        changeTodoStatus: _mutations_changeTodoStatus,
        removeTodo: _mutations_removeTodo,
        addTodo: _mutations_addTodo,
        changeTodoGroup: _mutations_changeTodoGroup,
        addGroup: _mutations_addGroup,
        removeGroup: _mutations_removeGroup,
    },
    actions: {
        putTasks: _actions_putTasks,
        changeTodoStatus: _actions_changeTodoStatus,
        removeTodo: _actions_removeTodo,
        addTodo: _actions_addTodo,
        changeTodoGroup: _actions_changeTodoGroup,
        addGroup: _actions_addGroup,
        removeGroup: _actions_removeGroup,
    },
}
