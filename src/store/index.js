import Vue from 'vue'
import Vuex from 'vuex'
import VuexEasyFirestore from 'vuex-easy-firestore'
Vue.use(Vuex)

import { Firebase, initFirebase } from '../boot/firebase.js'
import chatMsg from './modules/chat.js'

const easyFirestore = VuexEasyFirestore([chatMsg], {
  logging: true,
  FirebaseDependency: Firebase
})

const storeData = {
  plugins: [easyFirestore],
  state: {
    // ユーザー情報保存
    loginUser: ''
  },
  mutations: {
    changeUser: function (state, user) {
      state.loginUser = user
    }
  }
}

// initialise Vuex
const store = new Vuex.Store(storeData)

// initFirebase
initFirebase().catch(error => {
  console.log(error)
})

export default store
