import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    loading: true,
    yoGiHoUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    gameCards: null,
    meta: null,
    SelectType: "",
    callApi(url) {
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
    }

})

