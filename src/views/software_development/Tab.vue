<template>
    <component :is="component" />
</template>

<script>
import VForKey from '@/components/frontend/VForKey'
import UsersTable from '@/components/frontend/users_table/UsersTable'
import Tasks from '@/components/frontend/tasks/Tasks'

export default {
    components: {
        VForKey,
        UsersTable,
        Tasks,
    },
    computed: {
        component() {
            return this.$route.params.id
        },
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
    },
}
</script>
