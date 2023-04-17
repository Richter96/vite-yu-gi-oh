<script>
import { store } from '../store'
import CardList from './CardList.vue'

export default {
    name: 'SiteMain',
    components: {
        CardList
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
        <div class="type_card d-flex">
            <div class="container pb-0 ">
                <select class="d-inline-block" name="archetype" id="archetypr">
                    <option value="alien">Alien</option>
                    <option value="alien">Alien</option>
                    <option value="alien">Alien</option>
                    <option value="alien">Alien</option>
                    <option value="alien">Alien</option>
                    <option value="alien">Alien</option>
                    <option value="alien">Alien</option>
                    <option value="alien">Alien</option>
                    <option value="alien">Alien</option>
                    <option value="alien">Alien</option>
                    <option value="alien">Alien</option>
                </select>
                <div>
                    <span v-if="store.gameCards">Trovate {{ store.gameCards.length }} carte</span>
                </div>
            </div>
        </div>
        <CardList />
    </main>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as *;

main {
    background-color: $bgBody;

    .container {
        background-color: wheat;
        padding: 2rem;
    }


    .descriptionCard {
        height: 100px;
    }
}
</style>