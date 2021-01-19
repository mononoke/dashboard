export default function ({ commit }, { id }) {
    commit('removeTodo', { id })
}
