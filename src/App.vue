<template>
  <site-header></site-header>
  <router-view></router-view>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'

export default {
  /* data() {
    return {
      name: 'USER_NAME'
    }
  }, */
  components: {
    SiteHeader
  }
}
</script>
