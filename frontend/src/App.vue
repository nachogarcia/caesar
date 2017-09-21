<template>
  <div id="app">
    <NavBar />
    <router-view />
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
