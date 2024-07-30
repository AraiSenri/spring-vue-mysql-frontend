<template>
  <div id="buttons-top">
    <button id="save-button" type="button" @click.prevent="edit">新しく投稿する</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    edit() {
      this.$router.push('/edit')
    }
  }
}
</script>

<style scoped>
#buttons-top {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 20px;
}
#buttons-top button {
  padding: 5px 10px;
  margin-left: 10px;
  border-radius: 20px;
  cursor: pointer;
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  text-align: center;
}
</style>
