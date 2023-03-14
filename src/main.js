import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'
import { router } from './router/router'

const app = createApp(App)

components.map(item => {
    app.component(item.name, item)
})

app.use(router)
app.mount('#app')
    
