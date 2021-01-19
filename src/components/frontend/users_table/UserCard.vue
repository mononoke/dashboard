<template>
    <div>
        Выбран пользователь <b>{{ user.firstName}} {{ user.lastName }}</b><br>
        Описание:
        <div>{{user.description}}></div><br>
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
            default: () => ({}),
        },
    },
}
</script>
