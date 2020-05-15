export default state => name => {
    return state.dashItems.find(x => x.name === name)
}
