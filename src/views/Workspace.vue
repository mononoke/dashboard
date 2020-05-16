<template>
    <Transition name="routerTransitionRoot" :appear="true">
        <RouterView />
    </Transition>
</template>

<script>
import {mapActions} from "vuex"
import Vue from "vue"

export default {
    name: "Workspace",
    watch: {
        $route: {
            immediate: true,
            handler(to) {
                switch (to.name) {
                case "root":
                    this.goto({newState: "root"})
                    break
                case "section":
                    this.goto({newState: "section"})
                    break
                case "module":
                    this.goto({newState: "module"})
                    break
                case "document":
                    this.goto({newState: "document"})
                    break
                default:
                    // WTF
                }
            }
        }
    },
    // gotoParams:
    // this code belongs here (not in watch)
    // change keys && transition first
    // then change newState
    beforeMount() {
        this.$router.beforeEach((to, from, next) => {
            // section -> section - change transition key (vertical transition)
            if (
                from !== undefined &&
                    to.name === "section" &&
                    from.name === "section" &&
                    to.params.section !== from.params.section
            ) {
                this.gotoParams({
                    configuration: to.name,
                    from: from.params.section,
                    to: to.params.section
                })
                this.$store.commit("items/resetRootRouterViewKey", {})
            } else if (
                // module -> module - change transition key (vertical transition)
                from !== undefined &&
                    to.name === "module" &&
                    from.name === "module" &&
                    to.params.module !== from.params.module
            ) {
                this.gotoParams({
                    configuration: to.name,
                    from: from.params.module,
                    to: to.params.module
                })
                this.$store.commit("items/resetSectionRouterViewKey", {})
            } else if (
                // document -> document - change transition key (horizontal transition)
                from !== undefined &&
                    to.name === "document" &&
                    from.name === "document"
            ) {
                this.$store.commit("items/setDefaultTransition", {})
                this.$store.commit("items/resetSectionRouterViewKey", {})
            } else if (
                // document -> module
                from !== undefined &&
                    to.name === "document" &&
                    from.name === "module" &&
                    to.params.id !== undefined
            ) {
                this.$store.commit("items/transitionModule", {
                    transitionName: "transitionModuleEnter"
                })
                this.$store.commit("items/resetSectionRouterViewKey", {})
            } else if (
                // document -> module - subComponent go right,
                // Module remains in place (disappearance delay)
                from !== undefined &&
                    to.name === "module" &&
                    from.name === "document"
            ) {
                this.$store.commit("items/transitionModule", {
                    transitionName: "transitionModuleLeave"
                })
                this.$store.commit("items/resetSectionRouterViewKey", {})
            } else if (
                // section -> module
                from !== undefined &&
                    to.name === "section" &&
                    from.name === "module" &&
                    to.params.section !== from.params.section
            ) {
                Vue.nextTick(() => {
                    this.$store.commit("items/setDefaultTransition", {})
                }, 0)
                //   this.$store.commit('items/resetRootRouterViewKey', {})
                this.$store.commit("items/resize", {
                    role: 'section',
                    size: 'small'
                })
            } else if (
                // section -> document
                from !== undefined &&
                    to.name === "section" &&
                    from.name === "document" &&
                    to.params.section !== from.params.section
            ) {
                Vue.nextTick(() => {
                    this.$store.commit("items/setDefaultTransition", {})
                }, 0)
                this.$store.commit("items/resize", {
                    role: 'section',
                    size: 'small'
                })
            } else {
                this.$store.commit("items/setDefaultTransition", {})
            }

            Vue.nextTick(next, 0)
        })
    },
    methods: {
        ...mapActions("items", ["goto", "gotoParams"])
    }
}
</script>

<style lang="stylus">
////////////////////////////////////////////////////////////////
////               /////////////////////////////////////////////
////  Transition   /////////////////////////////////////////////
////               /////////////////////////////////////////////
////////////////////////////////////////////////////////////////
.routerTransitionRoot-enter-active, .routerTransitionRoot-leave-active
    transition-property: all
    transition-timing-function: linear
    transition-duration: 0.4s

.routerTransitionRoot-enter
    transform: translate(100vw, 0)

.routerTransitionRoot-leave-to
    transform: translate(70vw, 0)

</style>
