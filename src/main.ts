import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import components from "@/components/global/index.ts"
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import AllRules from '@vee-validate/rules';
import { defineRule } from 'vee-validate';

Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});



const app = createApp(App)

Object.keys(components).forEach((name:string) => {
    app.component(name, components[name])
});


app.use(createPinia())
app.use(router)
app.use(Toast,{})

app.mount('#app')
