<template>
  <van-search disabled placeholder="点击搜索" @click="goSearch" />
  <h4>全部内容</h4>
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <List :list="list" />
  </van-list>
</template>

<script lang="ts">
import {
  ref,
  toRefs,
  defineComponent,
  reactive
} from 'vue'
import { useRouter } from 'vue-router'
import List from '@components/common/List.vue'
import { getAllVideo } from '../../api/index'
import { VideoInfo } from '../../types/video'

interface State {
  list: VideoInfo[],
  loading: boolean;
  finished: boolean;
}

export default defineComponent({
  name: 'Home',

  components: {
    List
  },

  setup: () => {
    const router = useRouter()

    let page = 1
    const state = reactive<State>({
      list: [],
      loading: false,
      finished: false
    })

    const onLoad = async () => {
      const { data } = await getAllVideo(page)
      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          state.list.push(data[i])
        }
      } else {
        state.finished = true
      }
      state.loading = false
      page++
    }

    const goSearch = () => {
      router.push('/search')
    }

    return {
      ...toRefs(state),
      onLoad,
      goSearch
    }
  }
})
</script>

<style lang="less" scoped>
h4 {
  font-size: .15rem;
  padding-left: 16px;
}
</style>