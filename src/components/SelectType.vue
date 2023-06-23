
<script>
import { store } from '../store'

export default {
    name: 'SelectType',
    data() {
        return {
            store,
        }
    },
    methods: {

    },

    mounted() {
        store.getAllArchetype(store.urlArchetype)
    },
}
</script>


<template>
    <div class="type_card d-flex bg-black">
        <div class="container pb-3 bg-dark text-bg-dark mt-1 rounded-2 ">
            <select class="d-inline-block p-1" @change="store.callApi(store.yoGiHoUrl)" v-model="store.archetype">
                <option value="">Select Archetype</option>
                <option v-for="archetypeEl in store.allArchetype" :value="archetypeEl.archetype_name">{{
                    archetypeEl.archetype_name }}</option>
            </select>
            <div class="d-inline-block p-3">
                <span v-if="store.gameCards">Trovate {{ store.gameCards.length }} carte</span>
            </div>
        </div>
    </div>
</template>