<template>
    <div>
        <div class="card" @click="open('vfor')">v-for: why we use key</div>
        <div class="card" @click="open('users-table')">Code challenge</div>
    </div>
</template>

<script>
export default {
    methods: {
        open(id) {
            this.$router.push({
                name: "document",
                params: {
                    section: "software-development",
                    module: this.$route.params.module,
                    id: id
                }
            })

        }
    }
}
</script>

<style lang="stylus" scoped>
.card
    padding 5px
    font-size 16px
    cursor pointer
</style>
