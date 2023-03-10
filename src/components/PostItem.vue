<template>
    <div class="post">
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
            <MyButton class="post__btns-delete button" @click="deletePost">X</MyButton>
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
        }
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

        &__btns{
            position: absolute;
            top: 8px;
            right: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            &-delete{
                padding: 6px 10px;
            }
        }
    }
</style>