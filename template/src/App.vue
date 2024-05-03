<template>
    <loading v-if="mainLoading" />
    <div class="flex flex-col h-full">

        <main-nave-bar />
        <div class="bg-base-200 transition-allColor duration-300 flex-[1_1_1px] overflow-auto">
            <router-view v-slot="{ Component }">
                <component :is="Component" :key="$route.path"></component>
            </router-view>
        </div>
    </div>
</template>

<script>


import mainNaveBar  from '@/components/mainNaveBar.vue';
import loading      from '@/components/loading.vue';
export default {

    components:{
        mainNaveBar,
        loading
    },

    data() {
        return {
            mainLoading: false
        }
    },
    created(){
        //document.sleep(5000);
    },
    mounted() {
        document.addEventListener("showLoading", () => {
            this.mainLoading = true
        })

        document.addEventListener("hideLoading", () => {
            this.mainLoading = false
        })
    }
}

</script>