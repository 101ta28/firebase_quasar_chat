const myModule = {
  firestorePath: 'chat',
  firestoreRefType: 'collection', // or 'doc'
  moduleName: 'chat',
  statePropName: 'data',
  namespaced: true, // automatically added

  // this object is your store module (will be added as '/myModule')
  // you can also add state/getters/mutations/actions
  state: {},
  getters: {
    getMsgData: (state, getters) => Object.values(state.data)
  },
  mutations: {},
  actions: {}
}

export default myModule
