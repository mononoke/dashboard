<template>
    <div class="search">
        <SearchInput class="search__input" v-model="searchText" />
        <Button text="Search" @click="changeText" />
    </div>
</template>

<script>
import SearchInput from '@/components/common/SearchInput'
import Button from '@/components/common/Button'

export default {
    components: {
        SearchInput,
        Button,
    },
    props: {
        search: {
            type: String,
            default: '',
        },
    },
    data: () => ({
        searchText: '',
    }),
    watch: {
        search: {
            immediate: true,
            handler(to) {
                this.searchText = to
            },
        },
        searchText(to) {
            if (!to) {
                this.changeText()
            }
        },
    },
    methods: {
        changeText() {
            this.$emit('input', this.searchText)
        },
    },
}
</script>

<style lang="stylus" scoped>
.search
    display flex
    flex-direction row

.search__input
    flex-grow 1
    margin-right 10px
    height 100%
</style>
