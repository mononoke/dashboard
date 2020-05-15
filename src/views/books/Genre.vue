<template>
    <div>Genre
        <div @click="openBook('1')">1</div>
        <div @click="openBook('2')">2</div>
    </div>
</template>

<script>
export default {
    methods: {
        openBook(id) {
            this.$router.push({
                name: "document",
                params: {
                    section: "books",
                    module: this.$route.params.module,
                    id: id
                }
            })

        }
    }
}
</script>
