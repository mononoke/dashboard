export default function (state, { name }) {
    state.groups.push({
        id: Math.random().toString(36).substring(7),
        name,
    })
}
