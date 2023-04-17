
<script>
export default {
    name: 'SiteHeader',
    data() {
        return {
            titolo: 'Yo-Gi-Oh',
        }
    },
}
</script>

<template>
    <header>
        <div class=" container-md d-flex align-items-center">
            <img src="../assets/img/yo-logo.png" alt="logo yo-gi-oh">
            <h1 class=""> {{ titolo }} </h1>
        </div>
    </header>
</template>

<style lang="scss"></style>