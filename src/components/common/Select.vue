<template>
    <div class="select-container">
        <select
            ref="select"
            v-model="selectValue"
            class="select"
            :disabled="disabled"
            :class="{'select_empty': !selected}"
            @input="$emit('change', $event.target.value)"
        >
            <option
                value=""
                disabled
            >
                {{ placeholder }}
            </option>
            <option
                v-for="option in options"
                :key="option.id"
                :value="option.id"
                :disabled="option.disabled"
            >
                {{ option.name }}
            </option>
        </select>
        <div
            class="select__arrow_wrapper"
            :class="{'select__arrow_wrapper_disabled': disabled}"
        >
            <svg
                viewBox="0 0 46 46"
                class="select__arrow"
                @click="focus"
            >
                <g>
                    <polygon points="46,3.004 0,3 23.002,43"/>
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Select',
    model: {
        prop: 'selected',
        event: 'change',
    },
    props: {
        selected: {
            type: String,
            default: '',
        },
        options: {
            type: Array,
            default: () => [],
        },
        placeholder: {
            type: String,
            default: 'Выбор',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        selectValue: '',
    }),
    watch: {
        selected: {
            immediate: true,
            handler(to) {
                this.selectValue = to
            },
        },
    },
    methods: {
        focus() {
            this.$refs.select.focus()
        },
    },
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/colors.styl'

.select-container
    position relative
    display flex
    flex-direction row
    align-items center
    box-sizing border-box

.select
    -webkit-appearance none
    padding 0 18px 0 25px
    width 100%
    height 100%
    background-color transparent
    border none
    box-sizing border-box
    z-index 1
    &:focus
        margin-left 1px
        width calc(100% - 2px)
        background-color #ffffff
        box-shadow 0 1px 1px 0 rgba(65,69,73,0.3), 0 1px 3px 0 rgba(65,69,73,0.15)
        outline none

.select_empty
    color red

.select__arrow_wrapper
    position absolute
    right 0
    display flex
    align-items center
    justify-content flex-end
    width 100%
    height 100%
    border-radius 4px
    background-color rgb(248, 248, 248)
    z-index 0
    &.select__arrow_wrapper_disabled
        opacity 0.3
    polygon
        fill $secondary-color

.select__arrow
    margin-right 5px
    height 8px
    width 8px
    min-height 8px
    min-width 8px

</style>
