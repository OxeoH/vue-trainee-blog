import axios from "axios"

export const postModule = {
    state: () =>({
        posts: [],
        isPostsLoading: false,
        selectedSort: '',
        sortOptions: [
            { name: 'By title', value: 'title'},
            { name: 'By description', value: 'description'}
        ],
        searchValue: '',
        page: 1,
        postsLimit: 18,
        totalPages: 1
    }),
    getters:{
        sortedPosts(state){
            return state.posts
                .filter(item => item.title.toLowerCase().includes(state.searchValue.toLowerCase()))
                .sort((post1, post2) => {
                    return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])})
        }
    },
    mutations:{
        setPosts(state, posts){
            state.posts = posts
        },
        setPostsLoading(state, bool){
            state.isPostsLoading = bool
        },
        setSort(state, sort){
            state.selectedSort = sort
        },
        setSearch(state, search){
            state.searchValue = search
        },
        setPage(state, num){
            state.page = num
        },
        setTotalPages(state, num){
            state.totalPages = num
        },
        addPost(state, post){
            state.posts.push(post)
        },
        deletePost(state, post){
            state.posts = state.posts.filter((item) => item.id !== post.id)
        }
    },
    actions:{
        async fetchPosts({state, commit}){
            try{
                commit('isPostsLoading', true)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.postsLimit
                    }
                })
                commit('setPosts', response.data.map(post => post = {...post, description: post.body}))
                
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.postsLimit))
            }catch(e){
                console.log(e);
                commit('isPostsLoading', false)
            }
        },

        async loadMorePosts({state, commit}){
            setTimeout(async () => {
                try{
                    commit('setPage', state.page += 1)
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: state.page,
                            _limit: state.postsLimit
                        }
                    })
                    commit('setPosts',[...state.posts, ...response.data.map(post => post = {...post, description: post.body})])
                    commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.postsLimit))
                }catch(e){
                    console.log(e);
                }
            }, 200)
        },
    },
    namespaced: true
}