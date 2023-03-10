<template>
    <div class="app">
        <PostForm @create="createPost"/>
        <div class="line"></div>
        <PostList :posts="posts" @delete="deletePost"/>
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
                posts: [
                    {id: Date.now(), title: 'Post 1', description: 'Description of post 1'}, 
                    {id: Date.now(), title: 'Post 2', description: 'Description of post 2'}, 
                    {id: Date.now(), title: 'Post 3', description: 'Description of post 3'}, 
                    {id: Date.now(), title: 'Post 4', description: 'Description of post 4'}, 
                ]
            }
        },

        methods: {
            createPost(post){
                this.posts.push(post)
            },

            deletePost(post){
                this.posts = this.posts.filter(item => item.id !== post.id)
            }
        }
    }
</script>


<style>
    body{
        background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
        height: 100vh;

    }


    .app{
        padding: 0 30px;
        margin: 0 auto;
    }


    
    .line{
        border: 4px solid #85FFBD;
        border-radius: 20px;
    }
</style>