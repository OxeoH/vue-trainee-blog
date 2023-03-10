<template>
    <div class="blog">
        <div class="post" v-for="post in posts">
            <div class="title">
                <strong>Title: </strong>
                <br>
                {{ post.title }}
            </div>
            <div class="description">
                <strong>Description: </strong>
                <br>
                {{ post.description }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
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

    .post{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: left;
        padding: 20px 40px;
        border-radius: 2rem;
        border: 2px peachpuff solid;
    }

    .title{
        font-size: 18px;
    }

    .description{
        font-size: 18px;
        margin-top: 12px;
    }
</style>