<template>
    <div >
        Страница поста с id={{ $route.params.id }}
        Likes: {{ this.$store.state.likes }}
        <my-button @click="incrementLike">add Like</my-button>
        
        <my-button @click="decrementLike">remove Like</my-button>
    </div>
</template>

<script>
    export default {
        methods:{
            incrementLike() {
                this.$store.commit('incrementLike')
            },
            decrementLike(){
                this.$store.commit('decrementLike')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>