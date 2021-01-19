<template>
    <div>
        <ListCard v-for="item in list" :key="item.text" :item="item" class="list__card" />
    </div>
</template>

<script>
import ListCard from '@/components/list/ListCard'
import getList from '@/components/list/list.js'

export default {
    components: { ListCard },
    computed: {
        list() {
            return getList(this.$route.params.section, this.$route.params.module)
        },
    },

}
</script>

<style lang="stylus" scoped>
.list__card
    margin-bottom 5px
</style>
