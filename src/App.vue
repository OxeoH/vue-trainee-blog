<template>
    <div class="app">
        <div class="wrapper">
            <my-button @click="showDialog">Create post</my-button>
            <my-select v-model="selectedSort" :options="sortOptions"></my-select>
        </div>
        <my-dialog v-model:show="show" @show="hideDialog">
            <PostForm @create="createPost"/>
        </my-dialog>
        <h2 v-if="!posts.length && !isPostsLoading" style="text-align: center;">There are no posts yet</h2>
        <PostList :posts="sortedPosts" @delete="deletePost" v-if="!isPostsLoading"/>
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
                isPostsLoading: true,
                selectedSort: '',
                sortOptions: [
                    { name: 'By title', value: 'title'},
                    { name: 'By description', value: 'description'}
                ]
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
        },
        computed:{
            sortedPosts(){
                return [...this.posts].sort((post1, post2) => 
                {return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])})
            }
        }
        //Same sort by watch
        // watch:{
        //     selectedSort(newValue){
        //         this.posts.sort((post1, post2) => {
        //             return post1[newValue]?.localeCompare(post2[newValue])
        //         })
        //     }
        // }
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