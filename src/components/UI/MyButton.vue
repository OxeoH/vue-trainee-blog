<template>
    <div class="button">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'my-button'
    }
</script>

<style lang="scss" scoped>
    .button{
        font-weight: 700;
        border-radius: 12px;
        background-color: bisque;
        padding: 20px 30px;
        &:hover{
            transition: 0.4s ease 0s;
            background-color: aquamarine;
        }
    }
</style>