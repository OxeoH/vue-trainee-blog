<template>
    <div class="wrapper">
            <my-button @click="showDialog">Create post</my-button>
            <my-select :model-value="selectedSort" @update:model-value="setSort" :options="sortOptions"/>
            <my-input :model-value="searchValue" @update:model-value="setSearch" placeholder="Search by title"/>
    </div>
    <my-dialog v-model:show="show" @show="hideDialog">
        <PostForm @create="this.addPost"/>
    </my-dialog>

    
    <h2 v-if="!posts.length && !isPostsLoading" style="text-align: center;">There are no posts yet</h2>
    <PostList :posts="this.sortedPosts" @delete="this.deletePost" v-if="!isPostsLoading"/>
    <h2 v-else style="text-align: center;">Posts are loading, wait please...</h2>
    
    <div v-intersection="this.loadMorePosts" class="observer"></div>
</template>


<script>
    import PostList from '@/components/PostList.vue'
    import PostForm from '@/components/PostForm.vue'
    import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

    export default {
        components: {
            PostForm,
            PostList
        },

        data(){
            return{
                show: false
            }
        },

        methods: {
            ...mapMutations({
                setPage: 'post/setPage',
                setSort: 'post/setSort',
                setSearch: 'post/setSearch',
                addPost: 'post/addPost',
                deletePost: 'post/deletePost'
            }),
            ...mapActions({
                fetchPosts: 'post/fetchPosts',
                loadMorePosts: 'post/loadMorePosts'
            }),
            
            hideDialog(){
                this.show = false
            },
            showDialog(){
                this.show = true
            }
        },
        mounted(){
            this.fetchPosts()
        },
        computed:{
            ...mapState({
                posts: state => state.post.posts,
                isPostsLoading: state => state.post.isPostsLoading,
                selectedSort: state => state.post.selectedSort,
                sortOptions: state => state.post.sortOptions,
                searchValue: state => state.post.searchValue,
                page: state => state.post.page,
                postsLimit: state => state.post.postsLimit,
                totalPages: state => state.post.totalPages
            }),
            ...mapGetters({
                sortedPosts: 'post/sortedPosts'
            })
        },
    }
</script>


<style lang="scss">
    .wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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