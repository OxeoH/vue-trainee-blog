<template>
    <div class="blog">
        <PostItem v-for="post in posts" :post="post" :key="post.id" @delete="$emit('delete', post)"/>
    </div>
</template>

<script>
    import PostItem from './PostItem.vue';
    export default {
        components:{
            PostItem
        },
        props:{
            posts:{
                type: Array,
                required: true
            },

        }
    }
</script>










<style lang="scss" scoped>
    .blog{
        margin-top: 20px;
        display: grid;
        justify-items: center;
        gap: 20px;
        grid-template: repeat(3, 1fr) / repeat(4, 1fr);
    }

    

    .title{
        font-size: 18px;
    }

    .description{
        font-size: 18px;
        margin-top: 12px;
    }
</style>