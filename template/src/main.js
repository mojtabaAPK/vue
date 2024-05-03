import '@/assets/style/main.scss'
import '@/pkg/setup';

import { createApp }    from 'vue'


import App              from './App.vue'
import {router}         from '@/pkg/router';

const app = createApp(App)


app.config.globalProperties.console = console
app.config.globalProperties.alert = (msg)=>{alert(msg)}

app.use(router)
app.mount('#app')
