<template>
  <div id="app">
    <NavBar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Foot />
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Foot from './components/Foot'

export default {
  name: 'app',
  components: { NavBar, Foot }
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
