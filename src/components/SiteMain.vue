<script>
import { store } from '../store'
import CardList from './CardList.vue'
import SelectType from './SelectType.vue'

export default {
    name: 'SiteMain',
    components: {
        CardList,
        SelectType
    },
    data() {
        return {
            store
        }
    },
    mounted() {
        store.callApi(store.yoGiHoUrl)
    },
}
</script>

<template>
    <main>
        <SelectType />
        <CardList />
    </main>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as *;

main {
    background-color: $bgBody;

    .container {
        background-color: black;
        padding: 2rem;
    }


    .descriptionCard {
        height: 100px;
    }
}
</style>