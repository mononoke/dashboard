<template>
    <div>
        Выбран пользователь <b>{{ user.firstName}} {{ user.lastName }}</b><br>
        Описание:
        <textarea v-model="user.description"></textarea><br>
        Адрес проживания: <b>{{ user.adress.streetAddress }}</b><br>
        Город: <b>{{ user.adress.city }}</b><br>
        Провинция/штат: <b>{{ user.adress.state }}</b><br>
        Индекс: <b>{{ user.adress.zip }}</b>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            default: () => {
                return {}
            }
        }
    }
}
</script>


<style lang="stylus" scoped>
textarea
    display block
    border 1px solid #C4C4C4
    background-color #ffffff
    padding 5px 16px
    font-size 14px
    line-height 24px
    text-align left
    outline none
    will-change width
    overflow-x hidden
    overflow-y auto
    resize none
    box-sizing border-box

</style>
