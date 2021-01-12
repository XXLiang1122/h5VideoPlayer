<template>
  <van-nav-bar
    title="详情"
    left-arrow
    @click-left="back"
  />
  <div class="detail">
    <div class="banner">
      <div @click="priviewImg"><img class="cover" :src="info.cover"></div>
      <div class="right">
        <p class="name">{{ info.name }}</p>
        <div>
          <p class="desc" @click="showDesc">{{info.introduction}}</p>
          <p class="score">评分：<span style="padding-right: 0.08rem; color: #1989fa">{{ info.score || '暂无' }}</span><van-rate v-model="score" readonly allow-half /></p>
        </div>
      </div>
    </div>
    <p class="count">共{{ info.count_series }}集</p>
    <div class="list">
      <van-cell
        v-for="video in info.data"
        :key="video.id"
        :title="video.name"
        title-style="color: #1989fa;"
        is-link
        @click="watchVideo(video.url)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  onActivated,
  computed
} from 'vue'
import { useRouter } from 'vue-router'
import { Dialog, ImagePreview } from 'vant'
import { VideoInfo } from '../../types/video'
import store from '../../store/index'

export default defineComponent({
  name: 'Detail',

  setup: () => {
    const router = useRouter()
    const info = ref<Partial<VideoInfo>>({})
    const score = computed(() => Math.floor((Number(info.value.score) / 2) * 100) / 100)
    const isIos = /iphone/i.test(navigator.userAgent)

    const updateVideoInfo = () => {
      info.value = store.state.videoInfo
      document.documentElement.scrollTo(0, 0)
    }

    onActivated(updateVideoInfo)

    const watchVideo = (url: string) => {
      if (isIos) {
        window.open(url, '_blank')
        return
      }
      store.commit('updateVideoUrl', url)
      router.push('/video')
    }

    const showDesc = () => {
      Dialog.alert({
        message: info.value.introduction,
        messageAlign: 'left',
        confirmButtonColor: '#1989fa'
      })
    }

    const priviewImg = () => {
      ImagePreview([info.value.cover || ''])
    }

    const back = () => {
      router.back()
    }

    return {
      info,
      score,
      back,
      showDesc,
      priviewImg,
      watchVideo
    }
  }
})
</script>

<style lang="less" scoped>
.detail {
  background: #f7f8fa;
  min-height: calc(100% - 46px);
  .banner {
    display: flex;
    padding: .2rem .1rem;
    background: #fff;
    .cover {
      width: 1rem;
      height: 1.44rem;
      object-fit: cover;
      box-shadow: 2px 2px 10px 3px #f0f0f0;
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: .14rem;
    }
    .name {
      font-size: .16rem;
      font-weight: bold;
    }
    .desc {
      margin-bottom: .06rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
    .score {
      display: flex;
      align-items: center;
    }
  }
  .count {
    margin: .2rem 0 0;
    padding: .04rem calc(16px + .12rem);
    text-align: right;
  }
  .list {
    padding: 0 .12rem .6rem;
    color: #1989fa;
  }
}
</style>