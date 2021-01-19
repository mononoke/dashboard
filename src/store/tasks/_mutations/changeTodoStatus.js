export default function (state, { id, status }) {
    const todo = state.tasks.find((t) => t.id === id)
    todo.status = status
}
