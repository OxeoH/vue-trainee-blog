<template>
    <div class="blog">
        <transition-group name="posts-list">
            <PostItem 
                v-for="post in posts" 
                :post="post" 
                :key="post.id" 
                @delete="$emit('delete', post)"/>
        </transition-group>
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
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    @media (max-width: 700px) {
        .blog{
            flex-direction: column;
        }
    }

    .title{
        font-size: 18px;
    }

    .description{
        font-size: 18px;
        margin-top: 12px;
    }

    .posts-list-enter-active,
    .posts-list-leave-active {
    transition: all 0.2s ease;
    }
    .posts-list-enter-from,
    .posts-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
    }
    .posts-list-move{
        transition: all 0.3s ease;
    }
</style>