<template>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="challenge" />
</template>

<script>
import {markdown} from 'markdown'
import code_challenge from 'raw-loader!../../../assets/code_challenge.markdown'

export default {
    computed: {
        challenge() {
            return markdown.toHTML(code_challenge)
        }
    }
}
</script>
