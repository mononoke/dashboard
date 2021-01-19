<template>
    <div
        v-show="showing"
        class="modal"
        @click="hide()"
    >
        <div
            class="modal__content"
            @click.stop
        >
            <p class="modal__title">
                {{type === 'remove' ? 'Removing' : 'Creating'}} {{ itemType }}
            </p>

            <BaseInput
                v-model="name"
                class="modal__name"
                :placeholder="`Enter ${itemType}`"
            />

            <div class="modal__actions">
                <Button
                    :color="type === 'remove' ? 'red': 'green'"
                    :text="type === 'remove' ? 'Delete' : 'Create'"
                    :disabled="disabled"
                    @click="onClickButton"
                />
                <Button
                    color="green"
                    text="Cancel"
                    @click="hide"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/common/Button'
import BaseInput from '@/components/common/BaseInput'

export default {
    name: 'Modal',
    components: {
        Button,
        BaseInput,
    },
    data: () => ({
        showing: false,
        type: 'remove',
        name: '',
        itemName: '',
        itemType: '',
        callback: () => {},
    }),
    computed: {
        disabled() {
            if (this.type === 'remove') {
                return !(this.name.trim() === this.itemName.trim())
            }
            // type === create
            return !this.name.trim()
        },
    },
    methods: {
        show(options) {
            this.showing = true
            this.type = options.type
            this.itemName = options.itemName
            this.itemType = options.itemType
            this.callback = options.callback
        },
        hide() {
            this.type = 'remove'
            this.name = ''
            this.itemName = ''
            this.itemType = ''
            this.showing = false
        },
        onClickButton() {
            if (this.disabled) {
                return
            }

            this.callback(this.name.trim())
            this.hide()
        },
    },
}
</script>

<style lang="stylus" scoped>
.modal
    position: fixed
    width: 100%
    height: 100%
    left: 0
    top: 0
    display flex
    background rgba(43, 51, 66, 0.73)
    z-index: 7
    overflow: hidden
    &.fadein-leave-active,
    &.fadein-enter-active
        transition: opacity 0.1s, transform 0.1s

.modal__content
    display grid
    grid-row-gap 20px
    padding 24px 24px 32px
    width 400px
    background-color #FFFFFF
    box-shadow 0px 4px 8px rgba(0, 0, 0, 0.25)
    z-index: 2
    margin auto

.modal__title
    font-style normal
    font-weight 900
    font-size 18px
    line-height 25px
    color #000000

.modal__name
    height 30px

.modal__actions
    display grid
    grid-template-columns repeat(2, 100px)
    grid-column-gap 20px
    align-items center
    justify-content end

</style>
