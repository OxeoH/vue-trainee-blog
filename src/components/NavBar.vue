<template>
    <div class="navbar">
        
        <my-button 
                @click="$router.push('/')" 
                class="navbar__links-link">
                VueBlogTrainee
        </my-button>
        <div class="navbar__links">
            <my-button 
                @click="$router.push('/blog')" 
                class="navbar__links-link">
                Blog
            </my-button>
            <my-button 
                @click="$router.push('/about')" 
                class="navbar__links-link">
                About
            </my-button>
        </div>
        
    </div>
</template>

<script> 
    export default{

    }
</script>

<style lang="scss" scoped>
    .navbar{
        height: 70px;
        display: flex;
        background-color: white;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
        box-shadow: 2px 2px 4px gray;
        &__links{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            &-link{
                margin-right: 30px;
                &:last-child{
                    margin-right: 0;
                }
            }
        }
    }
</style>