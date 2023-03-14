<template>
    <NavBar/>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import NavBar from './components/NavBar.vue'
    export default {
        components:{
            NavBar
        }
    }
</script>

<style lang="scss">
    @import '@/styles/normalize.scss';
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
        height: 100vh;

    }

    .app{
        padding: 70px 30px 0 30px;
        margin: 0 auto;

    }

    
</style>