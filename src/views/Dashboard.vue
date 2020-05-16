<template>
    <div
        class="dashboard"
        :style="{
            width: configuration.parentConfig.width + 'vw',
            left: configuration.parentConfig.left + 'vw'
        }"
    >
        <DashboardItem
            v-for="(dashboardItem, index) in dashItemsFilterByRoles"
            :key="dashboardItem.name"
            :dash-item="dashboardItem"
            :style="{
                width: configuration.itemConfig.widthCoef + '%',
                height: configuration.itemConfig.height + 'px',
                transform:
                    'translate(' + configuration.parentConfig.width / 100 * configuration.itemConfig.left(index) + 'vw,' + configuration.itemConfig.top(index) + 'px)'
            }"
            class="dashboard__item"
            :class="{'dashboard__item_last': index === dashItemsFilterByRoles.length - 1}"
            @click.native="selectSection(dashboardItem.name)"
        />
        <KeepAlive>
            <Transition :name="configuration.routerTransitionName">
                <RouterView :key="configuration.keyRouterView" />
            </Transition>
        </KeepAlive>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
import model from '@/store/items/model'
import DashboardItem from "@/components/DashboardItem"

export default {
    name: "Dashboard",
    components: {DashboardItem},
    props: {
        role: {
            type: String,
            default: ""
        }
    },
    data: function() {
        return {
            model,
            route: String
        }
    },
    computed: {
        ...mapGetters("items", ["getItemsBySection"]),
        ...mapGetters("user", ["getUser"]),
        configuration() {
            let configuration
            if (this.role === "section") {
                configuration = this.$store.state.items.sectionConfiguration
            } else {
                // this.role === "root"
                configuration = this.$store.state.items.rootConfiguration
            }
            return configuration
        },
        keyRouterView() {
            if (this.role === "section") {
                return this.$route.params.module
            } else {
                return this.$route.params.section
            }
        },
        dashItems() {
            if (this.role === "section") {
                return this.getItemsBySection(this.$route.params.section)
            } else {
                return this.getItemsBySection("root")
            }
        },
        dashItemsFilterByRoles() {
            return this.dashItems.filter(d => {
                if (d.requiredRole === '') {
                    // without roles
                    return true
                } else if (this.getUser.roles.length) {
                    return this.getUser.roles.find(r => r.name === d.requiredRole)
                }
            })

        }
    },
    methods: {
        selectSection(name) {
            switch (this.role) {
            case "root":
                this.$router.push({
                    name: "section",
                    params: {section: name}
                })
                break
            case "section":
                this.$router.push({
                    name: "module",
                    params: {module: name}
                })
                break
            default:
            // WTF
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.dashboard
    display inline-block
    position fixed
    top 0
    padding-bottom 50px
    box-sizing border-box
    overflow-y auto
    height 100vh
    /*background-color #e5e5e5*/

.dashboard, .dashboard *
    transition all linear 0.4s

.dashboard__item
    position absolute
    font-size 18px
    &.dashboard__item_last
        margin-bottom 50px

/*Router name - transition router-view*/
.transitionRoot-enter-active
    transition-property all
    transition-timing-function linear
    transition-duration 0.4s

.transitionRoot-leave-active
    transition-property all
    transition-timing-function linear
    transition-duration 0.4s

.transitionRoot-enter
    transform translate(77vw, 0)

.transitionRoot-leave-to
    transform translate(80vw, 0)

.transitionSection-enter-active
    transition-property all
    transition-timing-function linear
    transition-duration 0.4s

.transitionSection-leave-active
    transition-property all
    transition-timing-function linear
    transition-duration 0.4s

.transitionSection-enter
    transform translate(80vw, 0)

.transitionSection-leave-to
    transform translate(80vw, 0)

/* module -> document - необходимо также прописать, что предыдущий блок не пропадает,
пока на него не наедет верхний*/
.transitionModuleEnter-enter-active
    transition-property all
    transition-timing-function linear
    transition-duration 0.4s

.transitionModuleEnter-enter
    transform translate(100vw, 0)

.transitionModuleEnter-leave-active
    transition-property all
    transition-timing-function linear
    transition-duration 0.4s

.transitionModuleEnter-leave-to
    transform translate(0, 0)

/* document -> module - transition Document. Module - not transition*/
.transitionModuleLeave-enter-active
    transition-property all
    transition-timing-function linear
    transition-duration 0.4s

.transitionModuleLeave-enter
    opacity 0

.transitionModuleLeave-leave-active
    transition-property all
    transition-timing-function linear
    transition-duration 0.4s

.transitionModuleLeave-leave-to
    transform translate(100vw, 0)

/* down -> up transition */
.transitionBottom2Top-enter-active
    transition-property all
    transition-timing-function linear
    transition-duration 0.4s

.transitionBottom2Top-leave-active
    transition-property all
    transition-timing-function linear
    transition-duration 0.4s

.transitionBottom2Top-enter
    transform translate(0, 100vh)

.transitionBottom2Top-leave-to
    transform translate(0, -100vh)

/* up -> down transition */
.transitionTop2Bottom-enter-active
    transition-property all
    transition-timing-function linear
    transition-duration 0.4s

.transitionTop2Bottom-leave-active
    transition-property all
    transition-timing-function linear
    transition-duration 0.4s

.transitionTop2Bottom-enter
    transform translate(0, -100vh)

.transitionTop2Bottom-leave-to, .transitionTop2Bottom-leave
    transform translate(0, 100vh)
</style>
