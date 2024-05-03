<template>
    <label class="swap swap-rotate">

        <input type="checkbox" v-model="toggle" />

        <sun class="swap-on w-6 h-6 fill-current"></sun>
        <moon class="swap-off w-6 h-6 fill-current"></moon>

    </label>
</template>

<script>

import moon from '@/components/icons/moon.vue'
import sun from '@/components/icons/sun.vue'

export default {
    components:
    {
        moon,
        sun
    },
    data() {
        return {
            toggle: false
        }
    },
    mounted() {
        this.init()
        document.addEventListener("themeChange", (e) => {
            this.init()
        })
    },
    methods: {
        init() {
            const themeName = document.getTheme()
            const theme_list = ['dracula', 'light']
            
            if (theme_list.includes(themeName)) {
                if (themeName == 'dracula') {
                    this.toggle = false
                } else if (themeName == 'light') {
                    this.toggle = true
                }
            } else {
                if (this.toggle) {
                    document.setTheme('light')
                } else {
                    document.setTheme('dracula')
                }
            }
        }
    },
    watch: {
        toggle(o, n) {
            setTimeout(()=>{
                if (this.toggle) {
                    document.setTheme('light')
                } else {
                    document.setTheme('dracula')
                }
            },350)
            
        }
    }
}

</script>