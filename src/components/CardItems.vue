<script>

export default {
    name: 'CardItem',
    props: {
        gameCard: Object
    },
    data() {
        return {

        }
    },
}
</script>

<template>
    <div class="col">
        <div class="card">
            <img :src="gameCard.card_images[0].image_url" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
                <span class="titleCard text-uppercase"> {{ gameCard.name }}</span>
                <span class=" d-block fs-6">origine: {{ gameCard.archetype }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.col {
    margin-bottom: 2rem;

    .card {
        height: 100%;


        .titleCard {
            padding: 1rem 0;
            text-align: center;
        }

        img {
            max-width: 100%;
        }
    }

}
</style>