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
                    <polygon
                        fill="#479788"
                        points="46,3.004 0,3 23.002,43 	"
                    />
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
        event: 'change'
    },
    props: {
        selected: {
            type: String,
            default: ''
        },
        options: {
            type: Array,
            default: () => {
                return []
            }
        },
        placeholder: {
            type: String,
            default: 'Выбор'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data: () => {
        return {
            selectValue: ''
        }
    },
    watch: {
        selected: {
            immediate: true,
            handler(to) {
                this.selectValue = to
            }
        }
    },
    methods: {
        focus() {
            this.$refs.select.focus()
        }
    }
}
</script>

<style lang="stylus" scoped>
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
        background-color #ffffff
        box-shadow 0 2px 4px rgba(0,0,0,0.2)
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
    background-color rgb(248, 248, 248)
    z-index 0
    &.select__arrow_wrapper_disabled
        opacity 0.3

.select__arrow
    margin-right 5px
    height 8px
    width 8px
    min-height 8px
    min-width 8px

</style>
