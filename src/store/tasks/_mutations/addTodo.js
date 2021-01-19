export default function (state, { title }) {
    state.tasks.unshift({
        id: Math.random().toString(36).substring(7),
        title,
    })
}
