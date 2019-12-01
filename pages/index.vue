<template>
  <div>
    <Header />
    <section class="App-main">
      <post />
    </section>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Post from '~/components/Post.vue'

export default {
  components: {
    Header,
    Post
  }
}
</script>

<style scoped>
.container {
  max-width: 93.5rem;
  margin: 0 auto;
  padding: 0 2rem;
}

.App-main {
  width: 100%;
  margin: 0 auto;
}
</style>
