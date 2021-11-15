<template>
  <q-layout view="lHh lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- チャット画面ならば戻るボタンを表示する -->
        <div v-if="pathCheck">
          <q-btn flat round dense icon="arrow_back" class="q-mr-sm" to="/" />
        </div>
        <q-toolbar-title>Chat App</q-toolbar-title>
        <!-- ログインしていればログアウトボタンを表示する -->
        <div v-if="authUser">
          <q-btn
            @click="logoutUser"
            flat
            dense
            class="q-mr-sm"
            label="ログアウト"
          />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { Firebase } from 'src/boot/firebase'
export default {
  name: 'MainLayout',
  data () {
    return {
      pageFlag: false,
      authUser: false
    }
  },
  beforeCreate () {},
  created () {},
  beforeMounted () {},
  mounted () {
    // 認証されたユーザーかチェック
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authUser = true
      } else {
        this.authUser = false
      }
    })
  },
  computed: {
    // チャット画面ならば戻るボタンを表示する
    pathCheck () {
      let pageFlag = Boolean
      if (this.$route.path === '/chat') {
        pageFlag = true
      } else {
        pageFlag = false
      }
      return pageFlag
    }
  },
  watch: {},
  filters: {},
  methods: {
    // ログアウト処理
    logoutUser () {
      Firebase.auth().signOut()
    }
  }
}
</script>
