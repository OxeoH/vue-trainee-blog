<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'MyButton'
    }
</script>

<style lang="scss" scoped>
    .button{
        font-weight: 700;
        border-radius: 50%;
        background-color: bisque;
        &:hover{
            transition: 0.4s ease 0s;
            background-color: aquamarine;
        }
    }
</style>