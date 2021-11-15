<template>
  <div class="index">
    <q-page>
      <!-- メールアドレス入力フォーム -->
      <q-input v-model="d_email" outlined label="Email" />
      <!-- パスワード入力フォーム -->
      <q-input
        v-model="d_pass"
        filled
        :type="isPwd ? 'password' : 'text'"
        label="Password"
      >
        <!-- 可視化するかのチェックボタン -->
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <div class="_page_style">
        <!-- ログインとログアウトボタン -->
        <q-btn color="primary" label="ログイン" @click="signIn" />
        <q-btn color="secondary" label="サインアップ" to="signup" />
      </div>
    </q-page>
  </div>
</template>

<style lang="sass" scoped>
// $
  ._page_style
    text-align: center
</style>

<script>
import { Firebase } from 'src/boot/firebase'
export default {
  name: 'PageIndex',
  data () {
    return {
      // ユーザー情報を格納する
      d_email: '',
      d_pass: '',
      // パスワードを可視化するかの判定
      isPwd: true
    }
  },
  beforeCreate () {},
  created () {},
  beforeMounted () {},
  mounted () {},
  computed: {},
  watch: {},
  filters: {},
  methods: {
    // ログイン時のユーザーチェック
    signIn () {
      Firebase.auth()
        .signInWithEmailAndPassword(this.d_email, this.d_pass)
        .then(() => {
          this.$router.push('chat')
        })
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>
