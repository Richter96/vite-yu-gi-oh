import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    loading: true,
    yoGiHoUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    urlArchetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    gameCards: null,
    allArchetype: null,
    meta: null,
    archetype: "",
    callApi(url) {


        if (this.archetype !== '') {
            url += `&archetype=${this.archetype}`;
        }

        axios.get(url)
            .then(response => {
                console.log(response);
                store.gameCards = response.data.data
                store.loading = false
                store.meta = response.data.meta
            })
            .catch(err => {
                console.log(err),
                    console.log(err.message)
            }
            )
    },
    getAllArchetype(url) {
        axios.get(url)
            .then(response => {
                console.log(response)
                store.allArchetype = response.data
            })
            .catch(err => {
                console.log(err),
                    console.log(err.message)
            }
            )
    }


})

