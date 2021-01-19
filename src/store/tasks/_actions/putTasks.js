export default function ({ getters, commit }, { tasks }) {
    const tds = tasks.map((t) => ({
        id: t.id,
        title: t.title,
        status: t.completed,
        group: getters.getGroups[Math.floor(Math.random() * Math.floor(3))].id,
    }))
    commit('putTasks', { tasks: tds })
}
