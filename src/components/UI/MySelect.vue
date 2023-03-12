<template>
    <select @change="changeOption">
        <option disabled value="">Choose option</option>
        <option 
            v-for="option in options"
            :value="option.value" 
            :key="option.value"
            >
                {{ option.name }}
        </option>
    </select>
</template>

<script>
    export default {
        name: 'my-select',
        props:{
            options:{
                type: Array,
                default: () => []
            }
        },
        methods:{
            changeOption(event){
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script> 

<style lang="scss" scoped>

</style>