<template>
    <tr>
        <SortTh
            v-for="name in columnNames"
            :key="name"
            :name="name"
            :icon="selected.name === name ? selected.type : ''"
            @click="sort(name)"
        />
    </tr>
</template>


<script>
import SortTh from '@/components/frontend/users_table/SortTh'

export default {
    components: {
        SortTh
    },
    model: {
        prop: 'selected',
        event: 'change'
    },
    props: {
        columnNames: {
            type: Array,
            default: () => {
                return []
            }
        },
        selected: {
            type: Object,
            default: () => {
                return {
                    name: '',
                    type: ''
                }
            }
        }
    },
    methods: {
        sort(name) {
            this.$emit('change', {
                name,
                type: this.selected.name !== name || this.selected.type === 'inverse' ? 'direct' : 'inverse'
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
th
    border 1px solid #e0e0e0
    text-align left
    padding 5px
    color #727272

</style>
