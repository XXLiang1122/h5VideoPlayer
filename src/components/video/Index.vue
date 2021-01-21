<template>
  <transition name="fade">
    <van-icon
      class="close-btn"
      name="close"
      size="30"
      color="#fff"
      @click="back"
    />
  </transition>
  <div class="wrapper">
    <video controls ref="videoEle"></video>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  onActivated
} from 'vue'
import { useRouter } from 'vue-router'
import Hls from 'hls.js'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Video',

  setup: () => {
    const router = useRouter()
    const store = useStore()
    const url = computed(() => store.state.videoUrl)
    const videoEle = ref<null | HTMLVideoElement>(null);

    const mountVideo = () => {
      const hls = new Hls()
      hls.loadSource(url.value)
      hls.attachMedia(videoEle.value)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        // (videoEle.value as HTMLVideoElement).play()
      })
    }

    onActivated(mountVideo)

    const back = () => {
      router.back()
    }

    return {
      videoEle,
      back
    }
  }
})
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background: #000;
}
video {
  position: absolute;
  width: 100%;
  height: 50%;
  top: 50%;
  transform: translateY(-50%);
  background: #000;
}
.close-btn {
  position: fixed;
  top: .2rem;
  right: .2rem;
  z-index: 9999;
  opacity: .6;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>