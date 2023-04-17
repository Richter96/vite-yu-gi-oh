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
            <CardItem :gameCard="gameCard" v-for="gameCard in store.gameCards" v-if="!store.loading" />
            <div v-else class="load">
                <p class=" d-inline-block">Caricamento in corso ... </p>
                <div class="loader d-inline-block"></div>
            </div>
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

.loader {
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 2s linear infinite;
    margin-left: 1rem;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
