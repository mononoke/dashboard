// must change router-view key (change vertical/horizontal transition)
export default function(state) {
    state.rootConfiguration.keyRouterView = Math.random()
        .toString(36)
        .substring(7)
}
