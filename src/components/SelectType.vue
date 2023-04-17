
<script>
import { store } from '../store'
export default {
    name: 'SelectType',
    data() {
        return {
            store
        }
    },
}
</script>


<template>
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
            <div class="d-inline-block">
                <span v-if="store.gameCards">Trovate {{ store.gameCards.length }} carte</span>
            </div>
        </div>
    </div>
</template>