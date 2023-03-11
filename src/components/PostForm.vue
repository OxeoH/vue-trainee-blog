<template>
    <form class='form' @submit.prevent>
        <h2>Create post:</h2>
        <my-input 
            v-model="post.title"
            type="text" 
            placeholder="Title"/>
        <my-input 
            v-model="post.description" 
            type="text" 
            placeholder="Description"/>
        <my-button class="button submit" @click="createPost">Add post</my-button>
    </form>
</template>

<script>
    export default {

        data(){
            return{
                post:{
                    title: '',
                    description: ''
                }
            }
        },
        methods:{
            createPost(){
                this.post.id = Date.now()
                this.$emit("create", this.post)
                this.post = {title: '', description: ''}
            },
        }
    }
</script>

<style lang="scss" scoped>
    .form{
        display: flex;
        flex-direction: column;
        padding: 40px 20px;
        align-items: center;
        background-color:cadetblue;
        border-radius: 12px;
    }

    .submit{
        margin-top: 15px;
        padding: 10px 16px;
    }
</style>