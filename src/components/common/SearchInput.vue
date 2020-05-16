<template>
    <div class="search-input">
        <input
            :value="value"
            :placeholder="placeholder"
            class="search-input__input"
            ref="input"
            @input="$emit('input', $event.target.value)"
        >
        <Icon v-if="!value" class="search-input__icon search-input__icon_loupe" icon="loupe" size="small" />
        <Icon
            v-else
            class="search-input__icon"
            icon="clear"
            size="small"
            @click="clear"
        />
    </div>
</template>

<script>
import Icon from "@/components/common/Icon"

export default {
    components: {
        Icon
    },
    props: {
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: 'Поиск'
        }
    },
    methods: {
        clear() {
            this.$refs.input.focus()
            this.$emit('input', '')
        }
    }
}
</script>

<style lang="stylus" scoped>
.search-input
    position relative
    display flex
    align-items center
    justify-content center
    background-color transparent
    border none
    box-sizing border-box

.search-input__input
    display block
    padding 0 25px
    width 100%
    height 100%
    line-height 100%
    color #000000
    font-size 16px
    border none
    background-color #f1f3f4
    background-clip padding-box
    border-radius 5px
    box-sizing border-box
    overflow visible
    cursor text
    &:focus
        background-color #ffffff
        box-shadow 0 2px 4px rgba(0,0,0,0.2)
        outline none

::placeholder
    color #6f6f70

.search-input__icon
    position absolute
    right 5px
</style>
