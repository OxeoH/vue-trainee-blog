<template>
    <div class="app">
        <div class="wrapper">
            <my-button @click="showDialog">Create post</my-button>
            <my-select v-model="selectedSort" :options="sortOptions"/>
            <my-input v-model="searchValue" placeholder="Search by title"/>
        </div>
        <my-dialog v-model:show="show" @show="hideDialog">
            <PostForm @create="createPost"/>
        </my-dialog>
        <h2 v-if="!posts.length && !isPostsLoading" style="text-align: center;">There are no posts yet</h2>
        <PostList :posts="sortedPosts" @delete="deletePost" v-if="!isPostsLoading"/>
        <h2 v-else style="text-align: center;">Posts are loading, wait please...</h2>

        <div ref='observer' class="observer"></div>
        <!-- <div class="pagination__wrapper">
            <div
                class="page"
                @click="changeCurrentPage(pageNum)"
                v-for="pageNum in totalPages" 
                :key="pageNum"
                :class="{
                    'active-page': page == pageNum
                }"
            >
                {{ pageNum }}
            </div>
        </div> -->
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
                ],
                searchValue: '',
                page: 1,
                postsLimit: 12,
                totalPages: 1
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
                        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                            params: {
                                _page: this.page,
                                _limit: this.postsLimit
                            }
                        })
                        this.posts = response.data.map(post => post = {...post, description: post.body})
                        this.isPostsLoading = false
                        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.postsLimit)
                    }, 200)
                }catch(e){
                    console.log(e);
                }
            },

            async loadMorePosts(){
                setTimeout(async () => {
                    try{
                        this.page += 1
                        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                            params: {
                                _page: this.page,
                                _limit: this.postsLimit
                            }
                        })
                        this.posts = [...this.posts, ...response.data.map(post => post = {...post, description: post.body})]
                    }catch(e){
                        console.log(e);
                    }
                }, 200)
            },
            // changeCurrentPage(pageNum){
            //     this.page = pageNum
            // }
        },
        mounted(){
            this.fetchPosts()

            const options ={
                rootMargin: '0px',
                threshold: 1.0
            }

            const callback = (entries, observer) =>{
                if(entries[0].isIntersecting && this.page < this.totalPages){
                    this.loadMorePosts()
                }
            }

            const observer = new IntersectionObserver(callback, options)
            observer.observe(this.$refs.observer)
            
        },
        computed:{
            sortedPosts(){
                return this.posts
                    .filter(item => item.title.toLowerCase().includes(this.searchValue.toLowerCase()))
                    .sort((post1, post2) => {
                        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])})
            }
        },
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


<style lang="scss">
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

    .pagination__wrapper{
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    // .page{
    //     background-color: bisque;
    //     border: 1px solid white;
    //     border-radius: 1rem;
    //     padding: 10px 14px;
    //     margin-right: 10px;
    //     &:hover{
    //         transition: 0.2s ease 0s;
    //         background-color: aquamarine;
    //     }
    // }
    // .active-page{
    //     background-color: aquamarine;
    // }
    .observer{
    }
</style>