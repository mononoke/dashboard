export default function ({ commit }, { id, group }) {
    commit('changeTodoGroup', { id, group })
}
