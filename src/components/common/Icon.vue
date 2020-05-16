<template>
    <div
        v-on="$listeners"
        :class="`icon icon_${size}`"
    >
        <svg viexBox="0 0 24 24" class="nav-bar-button__icon">
            <path v-if="icon === 'loupe'" d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path>
            <path v-if="icon === 'select'" d="M7 10l5 5 5-5z"></path>
            <path v-if="icon === 'clear'" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: 'middle'
        }
    }
}
</script>

<style lang="stylus" scoped>
.icon
    position relative
    display flex
    align-items center
    justify-content center
    border-radius 50%
    background-color transparent
    cursor pointer
    &.icon_big
        height 48px
        width 48px
    &.icon_middle
        height 40px
        width 40px
    &.icon_small
        height 28px
        width 28px
    &:hover
        background-color #3c404314

.nav-bar-button__icon
    height 24px
    width 24px

.nav-bar-button__text
    height 32px
    width 32px
    line-height 32px
    color #ffffff
    text-align center
    background-color #78909b
    border-radius 50%

path
    fill #479788
</style>
