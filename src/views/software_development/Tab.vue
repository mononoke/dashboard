<template>
    <component :is="component" />
</template>


<script>
import Vfor from '@/components/frontend/Vfor'
import UsersTable from '@/components/frontend/users_table/UsersTable'

export default {
    components: {
        Vfor,
        UsersTable
    },
    computed: {
        component() {
            return this.$route.params.id
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
