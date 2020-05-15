<template>
    <div>
        <Button text="Unshift child" @click="unshiftChild"/>
        <h3>Without keys</h3>
        <!-- eslint-disable-next-line vue/valid-v-for -->
        <VforComponent v-for="child in children" :number="child.number"/>
        <h3>With keys</h3>
        <VforComponent v-for="child in children" :number="child.number" :key="child.id"/>
    </div>
</template>

<script>
import Button from '@/components/common/Button'
import VforComponent from '@/components/frontend/VforComponent'

export default {
    components: {
        Button,
        VforComponent
    },
    props: {
        number: {
            type: Number,
            default: 0
        }
    },
    data: () => {
        return {
            children: [{
                id: Math.random().toString(36).substring(7),
                number: 1
            }]
        }
    },
    methods: {
        unshiftChild() {
            this.children.unshift({
                id: Math.random().toString(36).substring(7),
                number: this.children.length + 1
            })
        }
    }
}
</script>
