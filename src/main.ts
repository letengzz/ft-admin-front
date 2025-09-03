import { createApp } from 'vue'
import App from './App.vue'

import { useRouter } from './router'
import { usePinia } from './stores'

const app = createApp(App)

useRouter(app)
usePinia(app)

app.mount('#app')
