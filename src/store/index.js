import Vue from 'vue'
import Vuex from 'vuex'

import _modules_user from './user'
import _modules_items from './items'
import _modules_tasks from './tasks'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user: _modules_user,
        items: _modules_items,
        tasks: _modules_tasks,
    },
})
