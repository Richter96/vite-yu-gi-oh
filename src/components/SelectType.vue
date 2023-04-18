
<script>
import { store } from '../store'
import axios from 'axios'

export default {
    name: 'SelectType',
    data() {
        return {
            store
        }
    },
    methods: {

    },

    mounted() {
        store.callApi(store.yoGiHoUrl)
        store.getAllArchetype(store.urlArchetype)
    },
}
</script>


<template>
    <div class="type_card d-flex">
        <div class="container pb-0 bg-light mt-1 rounded-2">
            <select class="d-inline-block" name="archetype" id="archetypr" v-model="store.SelectType">
                <option @click="$emit('selectArch')" v-for="archetype in store.allArchetype"
                        value="{{ archetype.archetype_name }}">{{
                            archetype.archetype_name }}</option>
            </select>
            <div class="d-inline-block">
                <span v-if="store.gameCards">Trovate {{ store.gameCards.length }} carte</span>
            </div>
        </div>
    </div>
</template>