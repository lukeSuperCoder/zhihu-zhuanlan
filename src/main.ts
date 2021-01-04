import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import axios from 'axios'
axios.get('http://apis.imooc.com/api/columns?icode=C6A6C4086133360B').then((resp) => {
  console.log(resp.data)
})
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
