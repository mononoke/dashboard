<template>
    <component :is="component" />
</template>


<script>
import Vfor from '@/components/frontend/Vfor'

export default {
    components: {
        Vfor
    },
    computed: {
        component() {
            return this.$route.params.id.toLowerCase()
        }
        // sources() {
        //     switch (this.$route.params.id) {
        //     case 'Vfor':
        //         return [
        //             require('@/components/common/Button'),
        //             require('@/components/frontend/Vfor')
        //         ]
        //     default:
        //         return []
        //     }
        // }
    }
}
</script>
