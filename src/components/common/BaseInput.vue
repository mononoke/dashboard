<template>
    <input
        class="base-input"
        :value="value"
        @input="$emit('input', $event.target.value)"
    />
</template>

<script>
export default {
    props: {
        value: { type: String, default: '' },
        placeholder: { type: String, default: '' },
        disabled: { type: Boolean, default: false },
    },
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/colors.styl'

.base-input
    padding 4px 11px
    border 1px solid $gray-5
    border-radius 4px
    &:focus
        outline-color $secondary-color
        outline-width 1px

</style>
