<template>
    <div class="v-for-component">
        <div>Component № {{ number }}</div>
        <div class="v-for-component__mounted">Mounted: {{ mountedCount }}</div>
        <div>Updated: <span ref="updated">0</span></div>
    </div>
</template>

<script>
export default {
    props: {
        number: {
            type: Number,
            default: 0
        }
    },
    data: () => {
        return {
            mountedCount: 0,
            updatedCount: 0
        }
    },
    mounted() {
        this.mountedCount++
    },
    updated() {
        this.$refs.updated.innerText = Number(this.$refs.updated.innerText) + 1
    }
}
</script>

<style lang="stylus" scoped>
.v-for-component
    display flex
    flex-direction row
    align-items center
    padding 5px

.v-for-component__mounted
    margin 0 5px
</style>
