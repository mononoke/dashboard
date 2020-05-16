<template>
    <th class="th-sort" v-on="$listeners">
        <span class="th-sort__text">{{ name }}</span>
        <span class="th-sort__icon">{{ !icon ? '' : icon === 'inverse' ? '&#8593;' : '&#8595;' }}</span>
    </th>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="stylus" scoped>
.th-sort
    cursor pointer

.th-sort__icon
    margin 0 5px
    float right
    width 10px
    color #479788
</style>
