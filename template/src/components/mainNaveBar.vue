<template>
    <div class="navbar bg-base-200 transition-allColor duration-300 items-stretch p-0 px-2 min-h-14">
        <div :class="$style.one">
            <router-link :to='{ name: "home" }' :key="$route.fullPath">
                <home></home>
                <span class="badge w-1 h-1 p-0 badge-info"></span>
            </router-link>
            
        </div>
        <div class="flex-none">

            <toggle-theme class="mr-3 btn-ghost btn-circle size-10"></toggle-theme>
            <div class="dropdown dropdown-hover dropdown-end">
                <label tabindex="0" class="btn btn-ghost m-1 btn-circle avatar w-10 h-auto min-h-0">
                    <div class="w-9 rounded">
                        <div class="avatar online">
                            <div class="w-9 rounded">
                                <router-link :to="{name:'home'}" :key="$route.fullPath">
                                    <user class="scale-75"/>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </label>
                <ul tabindex="1" class="menu menu-sm dropdown-content z-[20] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>

</template>

<style module lang="scss">

.one {
    @apply flex-1 gap-2;
    & a {
        @apply btn btn-ghost normal-case text-base p-1 px-2 min-h-0 h-auto font-normal no-animation;
    }
}

</style>

<script>

import user             from '@/components/icons/user.vue';
import toggleTheme      from '@/components/toggleTheme.vue';
import home             from '@/components/icons/home.vue';

export default {

    components:{
        user,
        toggleTheme,
        home
    }

}

</script>