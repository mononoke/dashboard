<template>
    <div>
        <Preloader />
        <RouterView />
    </div>
</template>

<script>
import Preloader from '@/components/Preloader'

export default {
    components: {
        Preloader
    }
}
</script>

<style lang="stylus">
</style>
