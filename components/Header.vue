<template>
  <nav class="Nav">
    <div class="Nav-menus">
      <div class="Nav-brand">
        <nuxt-link class="Nav-brand-logo" to="/">Instagram</nuxt-link>
      </div>
      <nuxt-link class="Nav-user-explore" to="/" />
      <nuxt-link class="Nav-user-notifications" to="/" />
      <nuxt-link class="Nav-user-button" to="/profile" />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.Nav {
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  -webkit-transition: height 0.2s ease-in-out;
  transition: height 0.2s ease-in-out;
  height: 74px;
}
.Nav-menus {
  display: flex;
  flex-direction: row;
  height: 77px;
  width: 70%;
  margin: 0 auto;
  padding: 26px 40px;
}
.Nav-brand-logo {
  display: block;
  background-position: -176px 0px;
  background-image: url(/sprite.png);
  background-size: 405px 379px;
  background-repeat: no-repeat;
  height: 35px;
  width: 176px;
  text-indent: -1000%;
}
.Nav-user-explore {
  display: block;
  background-position: -276px -355px;
  background-image: url(/sprite.png);
  background-size: 405px 379px;
  background-repeat: no-repeat;
  height: 23px;
  width: 22px;
  text-indent: -1000%;
  margin-left: auto;
}
.Nav-user-notifications {
  display: block;
  background-position: -354px -300px;
  background-image: url(/sprite.png);
  background-size: 405px 379px;
  background-repeat: no-repeat;
  height: 22px;
  width: 22px;
  text-indent: -1000%;
  margin-left: 3rem;
}
.Nav-user-button {
  display: block;
  background-position: -309px -177px;
  background-image: url(/sprite.png);
  background-size: 405px 379px;
  background-repeat: no-repeat;
  height: 22px;
  width: 22px;
  text-indent: -1000%;
  margin-left: 3rem;
}
</style>
