import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'

import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'


import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyC2LaFgVH0oj3sEni7d77I0pTwEeh9Rofs",
  authDomain: "crm-budget-9d90e.firebaseapp.com",
  projectId: "crm-budget-9d90e",
  storageBucket: "crm-budget-9d90e.appspot.com",
  messagingSenderId: "445182632123",
  appId: "1:445182632123:web:db528fbd5e5b0395aa099e",
  measurementId: "G-NBKTTE0KM9"
})
let app 
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


