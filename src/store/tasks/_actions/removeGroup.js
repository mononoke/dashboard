export default function ({ commit }, { id }) {
    commit('removeGroup', { id })
}
