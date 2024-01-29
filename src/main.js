
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/main.scss'
import vue3StarRatings from "vue3-star-ratings";
import vue3LoadingShimmer from "vue3-loading-shimmer";
const app = createApp(App)
app.component("textShimmer", vue3LoadingShimmer);
app.component("vue3-star-ratings", vue3StarRatings)
app.use(router)
app.mount('#app')
