<template>
  <div id="app">
    <NavBar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Spinner />
    <Foot />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Foot from '@/components/Foot'
import Spinner from '@/components/Spinner'

export default {
  name: 'app',
  components: { NavBar, Foot, Spinner }
}
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .25s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
