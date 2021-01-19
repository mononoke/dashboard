export default function ({ commit }, { title }) {
    commit('addTodo', { title })
}
