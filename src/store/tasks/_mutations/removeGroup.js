export default function (state, { id }) {
    const index = state.groups.findIndex((t) => t.id === id)
    if (index === -1) {
        console.error('removeGroup - group not found', id)
    } else {
        state.groups.splice(index, 1)
        // removing from tasks
        state.tasks.forEach((t, i) => {
            if (t.group === id) {
                state.tasks[i].group = ''
            }
        })
    }
}
