<template>
    <div>
        <Button text="Unshift child" @click="unshiftChild"/>
        <h3>Without keys</h3>
        <!-- eslint-disable-next-line vue/valid-v-for -->
        <VForComponent v-for="child in children" :number="child.number"/>
        <h3>With keys</h3>
        <VForComponent v-for="child in children" :number="child.number" :key="child.id"/>
    </div>
</template>

<script>
import Button from '@/components/common/Button'
import VForComponent from '@/components/frontend/VForComponent'

export default {
    components: {
        Button,
        VForComponent,
    },
    props: {
        number: {
            type: Number,
            default: 0,
        },
    },
    data: () => ({
        children: [{
            id: Math.random().toString(36).substring(7),
            number: 1,
        }],
    }),
    methods: {
        unshiftChild() {
            this.children.unshift({
                id: Math.random().toString(36).substring(7),
                number: this.children.length + 1,
            })
        },
    },
}
</script>
