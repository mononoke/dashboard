<template>
    <div class="users-table">
        <div @click="challenge = !challenge" class="challenge">{{ challenge ? 'Hide code challenge' : 'Show code challenge' }}</div>
        <CodeChallenge v-if="challenge"/>

        <div v-else class="users">
            <Select
                v-model="dataType"
                :selected="dataType"
                :options="dataTypes"
                class="users__type"
                placeholder="Выбрать набор данных"
            />

            <div v-if="error">{{ error }}</div>
            <Search v-if="users.length" class="users__filter" v-model="search" />
            <div v-if="users.length" class="users__body">
                <table class="users__list">
                    <Thead :columnNames="columnNames" v-model="sort" />
                    <tbody>
                        <tr v-for="user in usersOnPage" :key="`${user.id}-${user.lastName}`" @click="selectedUser = user">
                            <td>{{ user.id }}</td>
                            <td>{{ user.firstName }}</td>
                            <td>{{ user.lastName }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.phone }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="selectedUser.id" class="users__selected">
                <Icon class="users__clear-selected" icon="clear" size="middle" @click="selectedUser = {}" />
                <UserCard :user="selectedUser" />
            </div>
            <div v-if="pages.length > 1" class="users__pages">
                <span
                    v-for="p in pages"
                    :key="p"
                    class="users__page"
                    :class="{ 'users__page_active': page === p}"
                    @click="page = p"
                >{{ p }}</span>
            </div>
        </div>
    </div>
</template>


<script>
import dynamicSort from '@/assets/dynamicSort'
import CodeChallenge from '@/components/frontend/users_table/CodeChallenge'
import Select from '@/components/common/Select'
import Search from '@/components/common/Search'
import Thead from '@/components/frontend/users_table/Thead'
import UserCard from '@/components/frontend/users_table/UserCard'
import Icon from '@/components/common/Icon'

const columnNames = ['id', 'firstName', 'lastName', 'email', 'phone']
const usersPerPage = 50
const dataTypes = [
    {
        id: 'small',
        number: 32,
        delay: 0,
        name: 'Small'
    },
    {
        id: 'big',
        number: 1000,
        delay: 3,
        name: 'Big'
    }
]

export default {
    components: {
        CodeChallenge,
        Select,
        Search,
        Thead,
        UserCard,
        Icon
    },
    data: () => {
        return {
            challenge: false,
            columnNames,
            dataTypes,
            dataType: '',
            search: '',
            sort: {
                name: '',
                type: ''
            },
            users: [],
            page: 1,
            selectedUser: {},
            error: ''
        }
    },
    computed: {
        filteredUsers() {
            let filteredUsers = this.users

            if (this.search) {
                const query = this.search.toLowerCase()

                filteredUsers = filteredUsers.filter(user => {
                    return String(user.id).includes(query) ||
                        user.firstName.toLowerCase().includes(query) ||
                        user.lastName.toLowerCase().includes(query) ||
                        user.email.toLowerCase().includes(query)
                })
            }

            return filteredUsers

        },
        usersOnPage() {
            return this.filteredUsers.filter((u, i) => i <= usersPerPage * this.page - 1 && i >= usersPerPage * (this.page - 1))
        },
        pages() {
            let pages = []
            for (let i = 1; i <= Math.ceil(this.filteredUsers.length / usersPerPage); i++) {
                pages.push(i)
            }

            return pages
        }
    },
    watch: {
        dataType(to) {
            this.getUsers(to)
        },
        sort: {
            deep: true,
            handler(to) {
                this.users.sort(dynamicSort(to.type, to.name))
            }
        },
        pages(to) {
            // when we are not on the first page,
            // typing text in Search field and clicking the Search button
            // and number of selected page IS greater than pages count
            if (to && !this.pages.includes(this.page)) {
                this.page = this.pages.length
            }
        }
    },
    methods: {
        getUsers(typeId) {
            this.selectedUser = {}
            this.error = ''
            const type = this.dataTypes.find(t => t.id === typeId)
            this._cancelPreloaderGetUser = this.$preloader('get_users', 'Get users')
            let address =  `http://www.filltext.com/?rows=${type.number}&id={number|1000}&firstName={firstName}&delay=${type.delay}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}`
            const xhr = new XMLHttpRequest()

            xhr.open("GET", address, true)
            xhr.send()

            xhr.onreadystatechange = () => {
                console.log('readyState', xhr.readyState, xhr.status)
                if (xhr.readyState !== 4) {
                    return
                }

                if (xhr.status !== 200) {
                    this.error = xhr.status + ': ' + xhr.statusText
                    this._cancelPreloaderGetUser()
                    return
                }

                this.users = JSON.parse(xhr.responseText)
                this._cancelPreloaderGetUser()
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.challenge
    position fixed
    top 10px
    right 30px
    text-decoration underline
    text-align right
    color: #479788
    cursor pointer

.users-table
    height 100%

.users
    display flex
    flex-direction column
    height 100%

.users__type
    margin-bottom 10px
    height 35px

.users__filter
    height 35px

.users__body
    flex-grow 1
    margin 10px 0
    box-shadow 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)
    overflow-y auto

.users__list
    width 100%
    border-collapse collapse

.users__list tr
    cursor pointer
    &:hover
        outline 2px solid rgba(60,64,67,.15)

.users__list td
    padding 5px
    border 1px solid #e0e0e0
    color #636363

.users__selected
    position relative

.users__clear-selected
    position absolute
    rop 10px
    right 10px

.users__pages
    display flex
    flex-direction row
    justify-content center

.users__page
    height 25px
    width 25px
    color #479788
    font-weight bold
    text-align center
    line-height 25px
    border-radius 50%
    cursor pointer
    &.users__page_active
    &:hover
        background-color #479788
        color #ffffff
</style>
