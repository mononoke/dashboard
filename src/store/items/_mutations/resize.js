export default function (state, { role, size }) {
    state[`${role}Configuration`].parentConfig = state.setParentConfig(role, size)
    state[`${role}Configuration`].itemConfig = state.setItemConfig(size)
}
