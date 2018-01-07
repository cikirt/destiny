const bookEventsStore = {
  state: {
    dragTreeData: null,
    dragTreeNodeHeight: 0
  },
  mutations: {
    setDragTreeNodeHeight(state, value) {
      state.dragTreeNodeHeight = value
    },
    setDragTreeData(state, value) {
      state.dragTreeData = value
    }
  }
}

export default bookEventsStore
