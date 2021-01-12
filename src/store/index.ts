import { createStore } from 'vuex'

export default createStore({
  state: {
    videoInfo: {},
    videoUrl: ''
  },
  mutations: {
    update (state, info) {
      state.videoInfo = info
    },
    updateVideoUrl (state, url) {
      state.videoUrl = url
    }
  },
  actions: {

  }
})