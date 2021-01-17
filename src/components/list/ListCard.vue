<template>
    <div class="list__card" @click="onClick">
        {{item.text}}
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default() {
                return {
                    text: '',
                    path: {}
                }
            }
        }
    },
    methods: {
        onClick() {
            this.$router.push({
                name: 'document',
                params: {
                    section: this.item.section,
                    module: this.item.module,
                    id: this.item.id
                }
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.list__card
    padding 5px
    font-size 16px
    text-transform uppercase
    cursor pointer
</style>
