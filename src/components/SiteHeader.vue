
<script>
export default {
    name: 'SiteHeader',
    data() {
        return {
            titolo: 'Call Api',
        }
    },
}
</script>

<template>
    <header>
        <div class=" container-md d-flex align-items-center">
            <div class="img_box">
                <img class="img-fluid " src="../assets/img/yo-logo.png" alt="logo yo-gi-oh">
            </div>
            <h1 class=""> {{ titolo }} </h1>
        </div>
    </header>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as *;

header {
    background-color: black;
    color: white;

    .img_box {
        width: 250px;
        aspect-ratio: 2/1;
        height: 100px;
        overflow-y: inherit;

    }

    img {
        max-height: 250px;
        position: absolute;
        top: -80px;
    }
}
</style>