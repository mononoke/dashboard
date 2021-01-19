<template>
    <div class="tasks">
        <div class="tasks__filters">
            <SearchInput v-model="searchText" class="tasks__search" />
            <div class="tasks__statuses">
                <Checkbox v-model="completed" label="Completed" class="tasks__status" />
                <Checkbox v-model="notCompleted" label="Not completed" class="tasks__status" />
            </div>
            <Button text="Add todo" @click="showAdd" class="tasks__button" />
        </div>
        <div class="tasks__filters">
            <Select
                v-model="group"
                :options="getGroups"
                placeholder="Select group"
                class="tasks__search"
            />
            <Button text="Add group" @click="showAddGroup" class="tasks__button" />
            <Button text="Remove selected group" :disabled="!group" @click="showRemoveGroup" class="tasks__button" />
        </div>
        <div class="tasks__card-list">
            <TodoCard v-for="todo in tasks" :key="todo.id" :todo="todo" class="tasks__card" @remove="showRemove(todo)"/>
        </div>
        <Modal ref="modal" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Button from '@/components/common/Button'
import SearchInput from '@/components/common/SearchInput'
import Checkbox from '@/components/common/Checkbox'
import Select from '@/components/common/Select'
import TodoCard from '@/components/frontend/tasks/TodoCard'
import Modal from '@/components/common/Modal'

export default {
    components: {
        Button,
        SearchInput,
        Checkbox,
        Select,
        TodoCard,
        Modal,
    },
    data: () => ({
        searchText: '',
        completed: true,
        notCompleted: true,
        group: '',
    }),
    computed: {
        ...mapGetters('tasks', ['getTasks', 'getGroups']),
        tasks() {
            return this.getTasks.filter((t) => {
                if (this.searchText && !t.title.toLowerCase().includes(this.searchText.toLowerCase())) {
                    return false
                } if (this.group && t.group !== this.group) {
                    return false
                } if (this.completed && t.status) {
                    return true
                }
                return this.notCompleted && !t.status
            })
        },
    },
    created() {
        if (!this.getTasks.length) {
            this.loadTasks()
        }
    },
    methods: {
        ...mapActions('tasks', ['putTasks', 'addTodo', 'removeTodo', 'addGroup', 'removeGroup']),
        loadTasks() {
            const address = 'https://jsonplaceholder.typicode.com/todos'
            const xhr = new XMLHttpRequest()

            xhr.open('GET', address, true)
            xhr.send()

            this._cancelPreloaderGetTasks = this.$preloader('get_tasks', 'Get tasks')

            xhr.onreadystatechange = () => {
                if (xhr.readyState !== 4) {
                    return
                }

                if (xhr.status !== 200) {
                    this.error = `${xhr.status}: ${xhr.statusText}`
                    this._cancelPreloaderGetTasks()
                    return
                }

                const tasks = JSON.parse(xhr.responseText)
                this.putTasks({ tasks })
                this._cancelPreloaderGetTasks()
            }
        },
        showAdd() {
            this.$refs.modal.show({
                type: 'create',
                itemType: 'todo',
                callback: (title) => this.addTodo({ title }),
            })
        },
        showRemove(todo) {
            this.$refs.modal.show({
                type: 'remove',
                itemName: todo.title,
                itemType: 'todo',
                callback: () => this.removeTodo({ id: todo.id }),
            })
        },
        showAddGroup() {
            this.$refs.modal.show({
                type: 'create',
                itemType: 'group',
                callback: (name) => this.addGroup({ name }),
            })
        },
        showRemoveGroup() {
            if (!this.group) {
                return
            }

            this.$refs.modal.show({
                type: 'remove',
                itemName: this.getGroups.find((g) => g.id === this.group).name,
                itemType: 'group',
                callback: () => this.groupRemove(this.group),
            })
        },
        groupRemove(id) {
            this.removeGroup({ id })
            this.group = ''
        },
    },
}
</script>
<style lang="stylus" scoped>
.tasks
    display flex
    flex-direction column
    height 100%
    overflow hidden

.tasks__filters
    display flex
    flex-direction row
    flex-wrap wrap
    align-items center

.tasks__statuses
    display flex
    flex-direction row
    align-items center

.tasks__status
    margin-left 15px

.tasks__search
    flex-grow 1
    height 40px

.tasks__card-list
    flex-grow 1
    padding 10px
    overflow-y auto

.tasks__card
    margin-bottom 10px

.tasks__button
    margin-left 15px

@media screen and (max-width: 750px)
    .tasks__search
        width 100%
</style>
