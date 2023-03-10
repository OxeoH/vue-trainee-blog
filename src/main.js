import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'

const app = createApp(App)

components.map(item => {
    app.component(item.name, item)
})

app.mount('#app')
