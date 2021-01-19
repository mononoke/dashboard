export default (state) => (name) => state.dashItems.find((x) => x.name === name)
