import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'
import sample from "./component/sample/sample";

import './styles.css'

Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueRouter)
sample();
const router = new VueRouter()
const App = Vue.extend(app)

router.start(App, 'body')
