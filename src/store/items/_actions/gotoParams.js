// Vertical transition (up -> down && down -> up) in SECTION & MODULE
// if the first name === to -> transitionTop2Bottom
// if the first name == from -> transitionBottom2Top

export default function({state, commit}, {configuration, from, to}) {
    console.log('gotoParams', configuration, from, to)
    let stop = false

    for (let i = 0; i < state.dashItems.length && !stop; i++) {
        switch (state.dashItems[i].name) {
        case from:
            commit("transitionVertical", {
                configuration: configuration,
                transition: "transitionBottom2Top"
            })
            stop = true
            break
        case to:
            commit("transitionVertical", {
                configuration: configuration,
                transition: "transitionTop2Bottom"
            })
            stop = true
            break
        }
    }
}
