
<script>
import axios from 'axios'
import { store } from './store'
import SiteHeader from "./components/SiteHeader.vue"
import SiteMain from "./components/SiteMain.vue"

export default {
  components: {
    SiteHeader,
    SiteMain
  },
  data() {
    return {
      titolo: 'Yo-Gi-Oh',
      store
    }
  },
  methods: {
    callApi(url) {
      axios.get(url)
        .then(response => {
          console.log(response);
          this.store.gameCards = response.data.data
          store.loading = false
        })
        .catch(err => {
          console.log(err),
            console.log(err.message)
        }
        )
    }
  },
  mounted() {
    this.callApi(this.store.yoGiHoUrl)
  },
}
</script>

    
<template>
  <div>
    <SiteHeader></SiteHeader>
    <SiteMain></SiteMain>

  </div>
</template>

<style lang="scss" ></style>