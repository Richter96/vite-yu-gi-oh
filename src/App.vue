
<script>
import axios from 'axios'
import { store } from './components/store.js'
export default {
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
    <!-- <SiteHead></SiteHead>
                                                                                                              <Sitemain></Sitemain>
                                                                                                              <SiteFooter></SiteFooter> -->
    <header>
      <div class=" container-md d-flex align-items-center">
        <img src="./assets/img/yo-logo.png" alt="logo yo-gi-oh">
        <h1 class=""> {{ titolo }} </h1>
      </div>
    </header>

    <div class="container">
      <div class="row row-cols-5 row-cols-md-4 row-cols-sm-2">
        <div class="col" v-for="gameCard in store.gameCards" v-if="store.loading">
          <div class="card" style="width:18rem;">
            <img :src="gameCard.card_images[0].image_url" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <h5 class="card-title"></h5>
              <h6 class="card-subtitle mb-2 text-muted ">Card subtitle</h6>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              b5
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" >
header {

  img {
    height: 5rem;
  }
}
</style>