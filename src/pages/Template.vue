<template>
  <!-- 最初のDIVにはスタイルや動作を与えない(ファイル名の空div) -->
  <div class="component_name">
    <div class="_first_style">最初のスタイル適応要素</div>
    <div class="_local_style"></div>
  </div>
</template>

<style lang="sass" scoped>
// $
._first_style
  width: 300px

._local_style
  min-width: 300px
</style>

<script>
export default {
  name: 'ComponentName',
  props: {
    /**
     * JSDOC:操作や値の説明を記入するとわかりやすい。
     * @example  <ComponentName p_PropsName='propsName' />
     * @param {string} 表示したい名前を指定する。
     * @default {string}  ''
     */
    p_PropsName: { type: String, default: '' },

    /**
     * JSDOC:操作や値の説明を記入するとわかりやすい。
     * @example  <ComponentName p_PropsName2=false />
     * @param {boolean} 有効か無効かを指定する（必須）
     * @default {boolean} 'true'
     */
    p_PropsName2: { type: Boolean, requred: true }
  },
  data () {
    return {
      d_DataName: true
    }
  },
  // コメントは基本『// 』ダブルスラッシュ半角スペース　からのコメント
  /**
   * 複数行の場合、この書き方も可能
   */
  beforeCreate () {},
  created () {},
  beforeMounted () {},
  mounted () {},
  computed: {},
  watch: {},
  filters: {},
  methods: {}
}
</script>
