<template>
    <div class="todo-card">
        <div class="todo-card__title-wrapper">
            <input :value="todo.title" class="todo-card__title" />
        </div>
        <Checkbox
            v-model="status"
            class="todo-card__status"
            :class="{'todo-card__status_completed': todo.status}"
            :label="todo.status ? 'Completed': 'Not completed'"
        />
        <Select
            v-model="group"
            :options="getGroups"
            placeholder="selectGroup"
            class="todo-card__group"
        />
        <Button text="Delete" @click="$emit('remove')" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Checkbox from '@/components/common/Checkbox'
import Select from '@/components/common/Select'
import Button from '@/components/common/Button'

export default {
    components: {
        Checkbox,
        Select,
        Button,
    },
    props: {
        todo: {
            type: Object,
            default: () => ({}),
        },
    },
    data: () => ({
        status: false,
        group: '',
    }),
    computed: {
        ...mapGetters('tasks', ['getGroups']),
    },
    watch: {
        todo: {
            immediate: true,
            deep: true,
            handler(to) {
                this.status = to.status
                this.group = to.group
            },
        },
        status(to) {
            this.changeTodoStatus({
                id: this.todo.id,
                status: to,
            })
        },
        group(to) {
            this.changeTodoGroup({
                id: this.todo.id,
                group: to,
            })
        },
    },
    methods: {
        ...mapActions('tasks', ['changeTodoStatus', 'changeTodoGroup']),
    },
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/colors.styl'

.todo-card
    display flex
    flex-direction row
    flex-wrap wrap
    align-items center
    padding 15px
    border-radius 4px
    border 1px solid $gray-4
    box-shadow 0 2px 6px rgba(0, 0, 0, 0.1)

.todo-card__title-wrapper
    flex-grow 1

.todo-card__title
    padding 5px
    width 200px
    text-overflow ellipsis
    border none
    box-sizing border-box
    &:hover
        width 100%
        text-overflow none

.todo-card__status
    margin 0 15px
    color red
    &.todo-card__status_completed
        color green

.todo-card__group
    margin 0 10px
    height 25px

@media screen and (max-width: 750px)
    .todo-card__title-wrapper
        width 100%
        margin-bottom 10px

    .todo-card__status
        margin-left auto
</style>
