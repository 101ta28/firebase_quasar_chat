<template>
  <div class="chat">
    <div class="q-pa-md ">
      <div class="q-ma-md">
        <q-scroll-area style="height: 500px; max-width: 100%;">
          <transition-group name="chat" tag="div" class="list_content">
            <!-- msgDataをfor文で取り出してchat_dataに入れる -->
            <div
              v-for="chat_data in msgData"
              :id="chat_data.id"
              :key="chat_data.id"
            >
              <!-- メッセージ本体 -->
              <q-chat-message
                :name="chat_data.uid"
                :text="[chat_data.text]"
                :sent="d_user === chat_data.uid"
                :stamp="formatDate(chat_data.created_at)"
              />
            </div>
          </transition-group>
        </q-scroll-area>
      </div>
      <!-- 文字列の入力部分 -->
      <div class="_input_area">
        user: {{ d_user }}
        <q-input
          bottom-slots
          clearable
          clear-icon="close"
          v-model="d_inputText"
          label="Input here"
          counter
          maxlength="124"
          @keydown.enter.prevent="sendMessage"
        >
          <template v-slot:after>
            <q-btn round flat icon="send" @click="sendMessage" />
          </template>
        </q-input>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
// $
  ._input_area
    position: fixed
    bottom: 0
    right: 0
    width: 100%
</style>

<script>
import { Firebase } from 'src/boot/firebase'
export default {
  name: 'Chat',
  data () {
    return {
      // ユーザーの名前
      d_user: '',
      // ユーザーの入力した文字列
      d_inputText: ''
    }
  },
  beforeCreate () {
    // 認証されていないユーザーはログイン画面に飛ばす処理
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
      } else {
        this.$router.push('/')
      }
    })
  },
  created () {
    // firebase接続
    this.$store.dispatch('chat/openDBChannel')
  },
  beforeMounted () {},
  mounted () {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.d_user = user.displayName
      } else {
      }
    })
  },
  computed: {
    // firestoreからデータを取ってくる処理
    msgData () {
      return this.$store.getters['chat/getMsgData']
    }
  },
  watch: {},
  filters: {},
  methods: {
    // メッセージ送信
    sendMessage () {
      this.$store.dispatch('chat/set', {
        uid: this.d_user,
        text: this.d_inputText
      })
      // 入力部分を削除(空文字にする)
      this.d_inputText = ''
    },
    // 時刻表示用にフォーマットする
    formatDate (d) {
      let date = d.toDate()
      return date.getHours() + ':' + date.getMinutes()
    }
  }
}
</script>
