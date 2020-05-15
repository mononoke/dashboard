<template>
    <button
        v-on="$listeners"
        class="button"
    >{{ text }}</button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="stylus" scoped>
.button
    border-radius 5px
    padding 5px 10px
    background-color #479788
    box-shadow 0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)
    cursor pointer

.button:focus
    outline none
</style>
