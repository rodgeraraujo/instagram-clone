<template>
  <div class="container">
    <div>
      <Header />
      <Profile />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Profile from '~/components/ProfileHeader.vue'

export default {
  components: {
    Header,
    Profile
  }
}
</script>

<style scoped>
/* body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
} */
/* .App {
  background: #fafafaa8;
  min-height: 100vh;
  min-width: 100vh;
} */

.App-main {
  width: 100%;
  margin: 0 auto;
}
</style>
