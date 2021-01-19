// АВТОМАТ - ИЗМЕНЕНИЕ STATE ПРИ ИЗМЕНЕНИЯХ ROUTE
// 'initial', 'root', 'section', 'module'

export default function ({ state, commit }, { newState }) {
    // console.log('newState', newState)

    if (state.navState === 'initial' && newState === 'root') {
        commit('resize', {
            role: 'root',
            size: 'big',
        })
    } else if (state.navState === 'initial' && newState === 'section') {
        commit('resize', {
            role: 'root',
            size: 'middle',
        })
        commit('resize', {
            role: 'section',
            size: 'big',
        })
    } else if (state.navState === 'initial' && newState === 'module') {
        commit('resize', {
            role: 'section',
            size: 'small',
        })
        commit('resize', {
            role: 'root',
            size: 'small',
        })
    } else if (state.navState === 'initial' && newState === 'document') {
        commit('resize', {
            role: 'section',
            size: 'small',
        })
        commit('resize', {
            role: 'root',
            size: 'small',
        })
    } else if (state.navState === 'root' && newState === 'section') {
        commit('resize', {
            role: 'root',
            size: 'middle',
        })
        commit('resize', {
            role: 'section',
            size: 'big',
        })
    } else if (state.navState === 'section' && newState === 'module') {
        commit('resize', {
            role: 'section',
            size: 'small',
        })
        commit('resize', {
            role: 'root',
            size: 'small',
        })
    } else if (state.navState === 'section' && newState === 'document') {
        commit('resize', {
            role: 'section',
            size: 'small',
        })
        commit('resize', {
            role: 'root',
            size: 'small',
        })
    } else if (state.navState === 'root' && newState === 'module') {
        commit('resize', {
            role: 'root',
            size: 'small',
        })
        commit('resize', {
            role: 'section',
            size: 'small',
        })
    } else if (state.navState === 'root' && newState === 'document') {
        commit('resize', {
            role: 'root',
            size: 'small',
        })
        commit('resize', {
            role: 'section',
            size: 'small',
        })
    } else if (state.navState === 'section' && newState === 'root') {
        commit('resize', {
            role: 'root',
            size: 'big',
        })
        commit('resize', {
            role: 'section',
            size: 'big',
        })
    } else if (state.navState === 'module' && newState === 'section') {
        commit('resize', {
            role: 'root',
            size: 'middle',
        })
        commit('resize', {
            role: 'section',
            size: 'big',
        })
    } else if (state.navState === 'module' && newState === 'root') {
        commit('resize', {
            role: 'root',
            size: 'big',
        })
        commit('resize', {
            role: 'section',
            size: 'big',
        })
    } else if (state.navState === 'document' && newState === 'section') {
        commit('resize', {
            role: 'root',
            size: 'middle',
        })
        commit('resize', {
            role: 'section',
            size: 'big',
        })
    } else if (state.navState === 'document' && newState === 'root') {
        commit('resize', {
            role: 'root',
            size: 'big',
        })
        commit('resize', {
            role: 'section',
            size: 'big',
        })
    }
    commit('navState', { newState })
}
