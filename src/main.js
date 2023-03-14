import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'
import { router } from './router/router'
import directives from '@/directives'

const app = createApp(App)

components.map(item => {
    app.component(item.name, item)
})


directives.forEach(directive => {
    app.directive(directive.name, directive)
});

app.use(router)
app.mount('#app')
    
