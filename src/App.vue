<template>
  <div>
    <HeaderSample></HeaderSample>
    <!-- <Header v-bind:username="name"></Header> -->
    <!--     <Body></Body>
    <Body></Body> -->
  </div>
</template>

<script>
// import Header from './components/Header.vue'
import HeaderSample from './components/HeaderSample.vue'
// import Body from './components/Body.vue'

export default {
  /* data() {
    return {
      name: 'USER_NAME'
    }
  }, */
  components: {
    // Header
    // Body
    HeaderSample
  }
}
</script>
