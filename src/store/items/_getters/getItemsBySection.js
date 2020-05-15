export default state => section => {
    return state.dashItems.filter(x => x.parent === section)
}
