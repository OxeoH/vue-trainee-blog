<template>
    <div class="post" @click.prevent="$router.push(`/blog/${post.id}`)">
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
        <div class="post__btns">
            <my-button
                class="button post__btns-delete" 
                @click.stop="deletePost"
                >X
            </my-button>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            post:{
                type: Object,
                required: true
            }
        },
        methods:{
            deletePost(){
                this.$emit('delete', this.post.id)
            }
        },
    }
</script>

<style lang="scss" scoped>
    .post{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: left;
        padding: 20px 40px;
        border-radius: 2rem;
        border: 2px peachpuff solid;
        position: relative;
        background-color:azure;
        max-width: 300px;
        margin-bottom: 20px;

        &:hover{
            transition: 0.3s ease 0s;
            background-color: rgb(228, 228, 81);
        }

        &__btns{
            position: absolute;
            top: 8px;
            right: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            &-delete{
                border-radius: 20px;
                padding: 6px 10px;
            }
        }
    }
</style>