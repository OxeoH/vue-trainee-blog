<template>
    <form class='form' @submit.prevent>
        <h2>Create post:</h2>
        <input 
            v-model="post.title"
            class='input' 
            type="text" 
            placeholder="Title">
        <input 
            v-model="post.description" 
            class='input' 
            type="text" 
            placeholder="Description">
        <button class="btn" @click="createPost">Add post</button>
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
    }

    .input{
        padding: 10px 30px 10px 20px;
        font-size: 20px;
        margin-top: 15px;
    }

    .btn{
        padding: 10px 16px;
        background-color: azure;
        margin-top: 15px;
    }
</style>