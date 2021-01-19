export default (state) => (section) => state.dashItems.filter((x) => x.parent === section)
