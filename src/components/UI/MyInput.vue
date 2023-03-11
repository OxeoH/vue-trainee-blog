<template>
    <input type="text" class="input" :value="modelValue" @input="changeValue">
</template>

<script>
    export default {
        name: 'my-input',
        props:{
            modelValue: [String, Number]
        },
        methods:{
            changeValue(event){
                this.$emit("update:modelValue", event.target.value)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .input{
        padding: 10px 30px 10px 20px;
        font-size: 20px;
        margin-top: 15px;
        border-radius: 12px;
    }
</style>