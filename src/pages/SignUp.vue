<template>
  <div class="index">
    <q-page>
      <q-input v-model="d_user" outlined label="Name" />
      <q-input v-model="d_email" outlined label="Email" />
      <q-input
        v-model="d_pass"
        filled
        :type="isPwd ? 'password' : 'text'"
        label="Password"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <div class="_page_style">
        <q-btn color="primary" label="新規登録" to="/" @click="signUp" />
        <q-btn color="secondary" label="ログイン画面へ" to="/" />
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
      d_user: '',
      d_email: '',
      d_pass: '',
      isPwd: true
    }
  },
  beforeCreate () {},
  created () {},
  beforeMounted () {},
  mounted () {},
  computed: {
    // 必須情報チェック
    isInputted () {
      const req_field = [this.d_user, this.d_email]
      return req_field.indexOf('') === -1
    }
  },
  watch: {},
  filters: {},
  methods: {
    signUp () {
      Firebase.auth()
        .createUserWithEmailAndPassword(this.d_email, this.d_pass)
        .then(() => {
          Firebase.auth().currentUser.updateProfile({
            displayName: this.d_user
          })
        })
        .then(() => {
          this.$router.push('')
        })
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>
