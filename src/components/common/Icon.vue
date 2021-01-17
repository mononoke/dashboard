<template>
    <div
        v-on="$listeners"
        :class="`icon icon_${size}`"
    >
        <svg viexBox="0 0 24 24" height="24" width="24">
            <path v-if="icon === 'loupe'" d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path>
            <path v-if="icon === 'select'" d="M7 10l5 5 5-5z"></path>
            <path v-if="icon === 'clear'" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            <path v-if="icon === 'github'" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
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
@import '~@/assets/styles/colors.styl'

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

path
    fill $secondary-color
</style>
