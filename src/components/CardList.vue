<script>
import { store } from '../store'
import CardItem from './CardItems.vue'
export default {
    name: 'CardList',
    components: {
        CardItem
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="container">
        <div class="row row-cols-md-3 row-cols-sm-2 row-cols-lg-5 mb-2">
            <CardItem :gameCard="gameCard" v-for="gameCard in store.gameCards" v-if="store.loading" />
        </div>
    </div>
</template>

<style lang="scss">
.card {
    height: 100%;

    .col {
        margin-bottom: 1rem;
    }

    .titleCard {
        padding: 1rem 0;
        text-align: center;
    }

    img {
        max-width: 100%;
    }
}
</style>