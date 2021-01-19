export default function ({ commit }, { id, status }) {
    commit('changeTodoStatus', { id, status })
}
