export default function(state, {configuration, transition}) {
    if (configuration === "section") {
        state.rootConfiguration.routerTransitionName = transition
    } else {
        state.sectionConfiguration.routerTransitionName = transition
    }
}
