export default function (state, { id }) {
    const index = state.tasks.findIndex((t) => t.id === id)
    if (index === -1) {
        console.error('removeTodo - todo not found', id)
    } else {
        state.tasks.splice(index, 1)
    }
}
