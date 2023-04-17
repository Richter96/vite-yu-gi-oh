<script>
import { store } from '../store'

export default {
    name: 'SiteMain',
    component: {
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row row-cols-md-3 row-cols-sm-2 row-cols-lg-4">
                <div class="col" v-for="gameCard in store.gameCards" v-if="store.loading">
                    <div class="card">
                        <img :src="gameCard.card_images[0].image_url" class="card-img-top img-fluid" alt="...">
                        <div class="card-body">
                            <span class="titleCard text-uppercase"> {{ gameCard.name }}</span>
                            <span class=" d-block fs-6">origine: {{ gameCard.archetype }}</span>
                            <p class="descriptionCard overflow-scroll">{{ gameCard.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as *;

main {
    background-color: $bgBody;

    .card {
        .titleCard {
            padding: 1rem 0;
            text-align: center;
        }
    }

    .container {
        background-color: wheat;
        padding: 2rem;
    }


    .descriptionCard {
        height: 100px;
    }
}
</style>