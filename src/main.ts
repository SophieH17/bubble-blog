import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router/index'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './style.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



const app = createApp(App)
app.use(router)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
