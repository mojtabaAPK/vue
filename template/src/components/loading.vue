<template>
    <div class="fixed top-0 left-0 right-0 bottom-0 z-[5] bg-[oklch(var(--b3)/0.9)]">
        <loading class="h-full m-auto"></loading>
    </div>
</template>


<script>
import loading      from '@/components/icons/loading.vue';
export default {
    components:{
        loading
    }
}

</script>