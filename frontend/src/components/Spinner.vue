<template>
  <transition name="fade">
    <div class="spinner" v-show="loading">
      <icon name="circle-o-notch" scale="10" class="text-info" spin />
    </div>
  </transition>
</template>

<script>
  import * as Vuex from 'vuex'

  export default {
    computed: {
      ...Vuex.mapGetters(['loading']),
    },
  }
</script>

<style scoped>
  .spinner {
    position: fixed;
    z-index: 999;
    height: 10em;
    width: 10em;
    overflow: show;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .spinner:before {
    content: '';
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
  }
</style>
