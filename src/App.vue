<template>
<router-view v-slot="{ Component }">
  <!-- <transition> -->
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  <!-- </transition> -->
</router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  color: #2c3e50;
  font-size: 14px;
}
p {
  margin: 0;
}
</style>