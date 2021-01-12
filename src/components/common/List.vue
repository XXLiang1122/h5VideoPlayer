<template>
  <van-card
    class="list"
    v-for="item in list"
    :key="item.id"
    :title="item.name"
    :desc="item.introduction"
    @click="goDetail(item)">
      <template #thumb>
        <van-image
          width="100%"
          height="100%"
          fit="cover"
          lazy-load
          :src="item.cover"
        />
      </template>
      <template #tags>
        <van-tag v-if="item.country" plain type="success" style="margin-right: 4px">{{ item.country }}</van-tag>
        <van-tag v-if="item.region" plain type="success">{{ item.region }}</van-tag>
      </template>
      <template #price-top>
        <p style="text-align: right">共{{ item.count_series }}集</p>
      </template>
      <template #bottom>
        <span>{{ item.actors }}</span>
      </template>
  </van-card>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'
import { useRouter } from 'vue-router'
import { VideoInfo } from '../../types/video'
import store from '../../store/index'

export default defineComponent({
  name: 'List',

  props: {
    list: {
      type: Array,
      default: () => []
    }
  },

  setup: () => {
    const router = useRouter()

    const goDetail = (video: VideoInfo) => {
      store.commit('update', video)
      router.push('/detail')
    }

    return {
      goDetail
    }
  }
})
</script>

<style lang="less" scoped>
.list{
  :deep(.van-card__bottom) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #767777;
  }
}
</style>