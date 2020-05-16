<template>
    <div v-if="preloader.show" class="preloader">
        <div class="preloader__spinner" />
        <div
            v-if="preloader.text"
            class="preloader__text"
        >
            <div
                v-for="field in preloader.text"
                :key="field"
            >
                {{ field }}
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
let state = {}
Vue.prototype.$preloader = function(key, text) {
    Vue.set(state, key, text)
    return () => {
        Vue.delete(state, key)
    }
}

export default {
    name: 'Preloader',
    data() {
        return {
            state
        }
    },
    computed: {
        preloader() {
            let keys = Object.keys(this.state)

            if (!keys.length) {
                return {
                    show: false,
                    text: undefined
                }
            } else {
                return {
                    show: true,
                    text: Object.values(this.state)
                }
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.preloader
    position fixed
    height 100vh
    width 100vw
    display flex
    flex-direction row
    align-items center
    justify-content center
    background-color rgba(255, 255, 255, 0.7)
    z-index 10000

.preloader__spinner
    width 80px
    height 80px
    border 2px solid #f3f3f3
    border-top 3px solid #479788
    border-radius 100%
    opacity 1
    animation spin 1s infinite linear

.preloader__text
    margin-left 20px
    font-size 18px

@keyframes spin
    from
        transform rotate(0deg)
    to
        transform rotate(360deg)

</style>
