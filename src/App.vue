<template>
    <div class="app">
        <div class="wrapper">
            <my-button @click="showDialog">Create post</my-button>
        </div>
        <my-dialog v-model:show="show" @show="hideDialog">
            <PostForm @create="createPost"/>
        </my-dialog>
        <PostList :posts="posts" @delete="deletePost" v-show="posts.length"/>
        <h2 v-show="!posts.length" style="text-align: center;">There are no posts yet</h2>
    </div>
</template>


<script>
    import PostList from './components/PostList.vue'
    import PostForm from './components/PostForm.vue'

    export default {
        components: {
            PostForm,
            PostList
        },

        data(){
            return{
                posts: [],
                show: true
            }
        },

        methods: {
            createPost(post){
                this.posts.push(post)
            },
            deletePost(post){
                this.posts = this.posts.filter(item => item.id !== post.id)
            },
            hideDialog(){
                this.show = false
            },
            showDialog(){
                this.show = true
            }
        }
    }
</script>


<style>
    body{
        background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
        height: 100vh;

    }
    .wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .app{
        padding: 0 30px;
        margin: 0 auto;
    }
</style>