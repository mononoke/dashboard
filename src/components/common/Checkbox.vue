<template>
    <div
        class="checkbox-container"
        :class="[classes]"
        @click="changeCheck"
    >
        <div
            class="checkbox-group"
        >
            <input
                :checked="checked"
                :disabled="disabled"
                type="checkbox"
                class="checkbox__input"
                @change="changeCheck"
            >
        </div>
        <label
            class="checkbox_label"
        >
            {{ label }}
        </label>
    </div>
</template>

<script>
export default {
    name: 'Checkbox',
    model: {
        prop: 'checked',
        event: 'change',
    },
    props: {
        checked: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: '',
        },
    },
    computed: {
        classes() {
            return {
                'checkbox-disabled': this.disabled,
                'checkbox-active': this.checked,
            }
        },
    },
    methods: {
        changeCheck() {
            if (!this.disabled) {
                this.$emit('change', !this.checked)
            }
        },
    },
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/colors.styl'

.checkbox-container
    position relative
    box-sizing: border-box
    display flex
    margin: 1rem 0
    margin-right: 1rem
    cursor: pointer
    .checkbox_label
        position: relative
        padding-left: 10px
        cursor pointer
    .checkbox-group
        box-sizing border-box
        position: relative
        border-radius: 2px
        border: 2px solid rgba(0,0,0,.54)
        height: 20px
        width: 20px
        min-width: 20px
        transition: .4s cubic-bezier(.25,.8,.25,1)
        input[type=checkbox]
            position: absolute
            -webkit-appearance: none
            appearance: none
            left: -999rem
        &:after
            box-sizing inherit
            content: ''
            position: absolute
            transition: transform .25s ease
            width: 6px
            height: 13px
            top: 0
            left: 5px
            z-index: 6
            border: 2px solid #fff
            border-top: 0
            border-left: 0
            opacity: 0
            transform: rotate(45deg) scale3D(.1, .1, .1)

.checkbox-container.checkbox-active
    .checkbox-group
        background-color $secondary-color
        border-color $secondary-color
        &:after
            opacity 1
            transform rotate(45deg) scale3d(1,1,1)

.checkbox-disabled
    cursor not-allowed
    .checkbox-group
        opacity: .14
    .checkbox_label
        opacity .24
        cursor default
</style>
