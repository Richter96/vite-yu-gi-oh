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
        <div class="card text-white bg-dark">
            <img :src="gameCard.card_images[0].image_url" class="card-img-top" alt="...">
            <div class="card-body">
                <span class="titleCard text-uppercase text-danger"> {{ gameCard.name }}</span>
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
        box-shadow: 0 4px 8px 0 rgba(255, 97, 97, 0.463), 0 6px 20px 0 rgba(102, 203, 101, 0.592);

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