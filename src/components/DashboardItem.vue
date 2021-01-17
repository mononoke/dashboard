<template>
    <div
        class="dashboard-item"
        :class="{'dashboard-item_active': active}"
        v-on="$listeners"
    >
        <div
            class="dashboard-item__title"
            :class="{
                'dashboard-item__title_big': isCardBig,
                'dashboard-item__title_small': !isCardBig
            }"
        >
            {{ dashItem.title }}
        </div>
        <div
            v-if="isCardBig"
            class="item-card__description"
        >
            {{ dashItem.description }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dashItem: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    computed: {
        active() {
            if (this.$route.name === 'root') {
                return true
            } else if (this.$route.name === 'section') {
                return (this.$route.params.section === this.dashItem.parent || this.$route.params.section === this.dashItem.name)
            } else {
                return (this.dashItem.name === this.$route.params.section || this.dashItem.name === this.$route.params.module)
            }
        },
        isCardBig() {
            return this.$route.name === this.dashItem.parent || (this.$route.name === 'section' && this.$route.params.section === this.dashItem.parent)
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/colors.styl'

.dashboard-item
    display flex
    flex-direction column
    box-shadow 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)
    border-radius 2px
    border 1px solid rgba(0, 0, 0, 0.125)
    font-size 16px
    font-weight 400
    opacity 0.5
    text-align left
    box-sizing border-box
    overflow hidden
    cursor pointer
    z-index 1
    &.dashboard-item_active
        opacity 1

.dashboard-item__title
    padding 16px
    line-height normal
    font-size 1.8vw
    font-weight 400
    color $main-color
    perspective-origin 165px 56px
    transform-origin 165px 56px
    white-space nowrap
    text-overflow ellipsis
    overflow hidden
    &.dashboard-item__title_small
        font-size 100%
    &.dashboard-item__title_big
        flex-grow 1

.item-card__description
    padding 16px
    font-size 1rem
    line-height 18px
    color #a4e4d9
    box-sizing border-box
    overflow-x hidden
    overflow-y auto

</style>
