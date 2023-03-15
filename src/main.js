import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'
import { router } from './router/router'
import directives from '@/directives'
import store from './store'

const app = createApp(App)


app.use(router).use(store)

components.map(item => {
    app.component(item.name, item)
})


directives.forEach(directive => {
    app.directive(directive.name, directive)
});







app.mount('#app')
    
