<template>
  <div>
    <button @click="login">Login</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['authenticated']),
  middleware: 'authenticated',
  methods: {
    login() {
      this.$store.commit('login')
      this.$router.push({ path: this.redirect || '/' })
    }
  }
}
</script>

<style lang="scss" scoped></style>
