<template>
    <div
        class="module"
        :style="{
            width: configuration.width,
            right: configuration.right
        }"
    >
        <Component :is="moduleComponentName" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import model from '@/store/items/model'

import List from '@/views/List'
import Backend from '@/views/software_development/Backend'
import Tab from '@/views/software_development/Tab'
import Genre from '@/views/books/Genre'
import Book from '@/views/books/Book'
import Mount from '@/views/Mount'
import NotFound from '@/views/NotFound'

export default {
    name: 'Module',
    components: {
        List,
        Backend,
        Tab,
        Genre,
        Book,
        Mount,
        NotFound,
    },
    computed: {
        ...mapGetters('items', ['getItemByName']),
        dashItem() {
            return this.getItemByName(this.$route.params.module)
        },
        moduleComponentName() {
            if (this.dashItem) {
                if (this.$route.params.id !== undefined) {
                    return this.dashItem.subComponent
                }
                return this.dashItem.component
            }
            return 'NotFound'
        },
        configuration() {
            return {
                width: `calc(${model.parentConfig.module.width}vw - ${model.sideMargin * 2}px)`,
                right: `${model.sideMargin}px`,
            }
        },
    },
}
</script>

<style lang="stylus" scoped>
.module
    position fixed
    top 15px
    padding 15px
    box-sizing border-box
    height calc(100vh - 30px)
    box-shadow 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)
    background-color rgba(255,255,255,1)
    overflow-y auto
</style>
