<template>
  <van-nav-bar
    title="搜索"
    left-arrow
    @click-left="back"
  />

  <form action="/">
    <van-search
      v-model="keyword"
      autofocus
      placeholder="请输入搜索关键词"
      @search="onSearch"
    />
  </form>

  <van-skeleton style="margin-top: .2rem" v-show="isLoading && list.length === 0" title :row="4" />

  <van-list
    v-model:loading="loading"
    :finished="finished"
    :immediate-check="false"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-empty image="search" v-if="list.length === 0 && !isLoading" />
    <List :list="list" v-else />
  </van-list>
</template>

<script lang="ts">
import {
  ref,
  toRefs,
  defineComponent,
  reactive,
  onActivated
} from 'vue'
import { useRouter } from 'vue-router'
import List from '@components/common/List.vue'
import { searchVideo } from '../../api/index'
import { VideoInfo } from '../../types/video'

interface State {
  list: VideoInfo[],
  loading: boolean;
  finished: boolean;
}

let isPrevious = false

export default defineComponent({
  name: 'Search',

  components: {
    List
  },

  beforeRouteEnter: (to, from, next) => {
    if (from.path === '/') {
      isPrevious = true
    } else {
      isPrevious = false
    }
    next()
  },

  setup: () => {
    const router = useRouter()
    let page = 1
    const state = reactive<State>({
      list: [],
      loading: false,
      finished: false
    })
    const keyword = ref<string>('')
    let isLoading = ref<boolean>(false)

    onActivated(() => {
      if (isPrevious) {
        state.list = []
        state.loading = false
        state.finished = false
        keyword.value = ''
      }
    })

    const onLoad = async () => {
      const data = await searchVideo(page, keyword.value)
      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          state.list.push(data[i])
        }
      } else {
        state.finished = true
      }
      state.loading = false
      isLoading.value = false
      page++
    }

    const onSearch = () => {
      if (!keyword.value) return
      state.list = []
      state.finished = false
      page = 1
      isLoading.value = true
      onLoad()
    }

    const back = () => {
      router.back()
    }

    return {
      ...toRefs(state),
      onLoad,
      onSearch,
      keyword,
      isLoading,
      back
    }
  }
})
</script>

<style lang="less" scoped>

</style>