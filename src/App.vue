<template>
    <div class="app">
        <form class='form' action="" @submit.prevent>
            <h2>Create post:</h2>
            <input 
                v-bind:value="titleField" 
                @input="titleField = $event.target.value" 
                class='input' 
                type="text" 
                placeholder="Title">
            <input 
                v-bind:value="descriptionField" 
                @input="descriptionField = $event.target.value" 
                class='input' 
                type="text" 
                placeholder="Description">
            <button class="btn" @click="createPost">Add post</button>
        </form>
        <div class="line"></div>
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
    </div>
</template>


<script>
    export default {
        data(){
            return{
                posts: [
                    {id:1, title: 'Post 1', description: 'Description of post 1'}, 
                    {id:2, title: 'Post 2', description: 'Description of post 2'}, 
                    {id:3, title: 'Post 3', description: 'Description of post 3'}, 
                    {id:4, title: 'Post 4', description: 'Description of post 4'}, 
                ],
                titleField: '',
                descriptionField: ''
            }
        },
        methods: {
            createPost(event){
                this.posts.push(
                    {
                        id: this.posts[this.posts.length-1].id + 1, 
                        title: this.titleField, 
                        description: this.descriptionField
                    }
                )
                this.titleField = ''
                this.descriptionField = ''
            },
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
    .line{
        border: 4px solid #85FFBD;
        border-radius: 20px;
    }

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