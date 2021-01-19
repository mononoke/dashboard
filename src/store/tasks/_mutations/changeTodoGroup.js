export default function (state, { id, group }) {
    const todo = state.tasks.find((t) => t.id === id)
    todo.group = group
}
