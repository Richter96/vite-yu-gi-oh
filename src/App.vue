
<script>
import axios from 'axios'
export default {
  data() {
    return {
      titolo: 'yo-gi-ho',
      yoGiHoUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
      gameCards: null
    }
  },
  methods: {
    callApi(url) {
      axios.get(url)
        .then(response => {
          console.log(response);
          this.gameCards = response.data
        })
        .catch(err => {
          console.log(err),
            console.log(err.message)
        }
        )
    }
  },
  mounted() {
    this.callApi(this.yoGiHoUrl)
  },
}
</script>

    
<template>
  <div>
    <!-- <SiteHead></SiteHead>
                                                <Sitemain></Sitemain>
                                                <SiteFooter></SiteFooter> -->
    <header>
      <div class=" container-md">
        <img src="./assets/img/yo-logo.png" alt="logo yo-gi-ho">
        <h1 class="text-uppercase"> {{ titolo }} </h1>
      </div>
    </header>
    <div class="container">

    </div>

  </div>
</template>

<style lang="scss" >
header {
  h1 {
    color: red;
  }

  img {
    height: 100px;
  }
}
</style>