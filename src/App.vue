<template>
    <div class="app">
        <div class="wrapper">
            <my-button @click="showDialog">Create post</my-button>
        </div>
        <my-dialog v-model:show="show" @show="hideDialog">
            <PostForm @create="createPost"/>
        </my-dialog>
        <h2 v-if="!posts.length && !isPostsLoading" style="text-align: center;">There are no posts yet</h2>
        <PostList :posts="posts" @delete="deletePost" v-if="!isPostsLoading"/>
        <h2 v-else style="text-align: center;">Posts are loading, wait please...</h2>
    </div>
</template>


<script>
    import PostList from './components/PostList.vue'
    import PostForm from './components/PostForm.vue'
    import axios from 'axios'


    export default {
        components: {
            PostForm,
            PostList
        },

        data(){
            return{
                posts: [],
                show: false,
                isPostsLoading: true
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
            },
            async fetchPosts(){
                try{
                    setTimeout(async () => {
                        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
                        this.posts = response.data.map(post => post = {...post, description: post.body})
                        this.isPostsLoading = false
                    }, 1000)
                }catch(e){
                    console.log(e);
                }
            },
        },
        mounted(){
            this.fetchPosts()
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