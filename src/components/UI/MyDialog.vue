<template>
    <div class="dialog" v-if="show" @click.stop="hideDialog">
        <div class="dialog__content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';

    export default {
        name: 'my-dialog',
        mixins: [toggleMixin]
    }
</script>

<style lang="scss" scoped>
    .dialog{
        z-index: 10;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0,0,0, 0.4);
        position: fixed;
        display: flex;
        &__content{
            margin: auto;
            min-width: 400px;
            min-height: 60px;
            border: 2px solid white;
            border-radius: 12px;
        }
    }
</style>