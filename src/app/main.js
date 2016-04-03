import Vue from 'vue'
import app from './component/widget.vue'
import VueRouter from 'vue-router'

import './styles.css'

Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueRouter)
const router = new VueRouter()
const App = Vue.component('app', app)

router.start(App, 'main')
