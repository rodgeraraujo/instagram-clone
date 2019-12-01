<template>
  <nav class="Nav">
    <div class="Nav-menus">
      <div class="Nav-brand">
        <nuxt-link class="Nav-brand-logo" to="/">Instagram</nuxt-link>
      </div>
      <nuxt-link class="Nav-user-explore" to="/" />
      <div id="hover" href="#">
        <nuxt-link to class="Nav-user-notifications"></nuxt-link>
        <div id="popup">
          <img
            height="100px"
            class="popover-img"
            src="https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp"
            alt
          />
        </div>
      </div>
      <!-- <nuxt-link
        @click.native="notifyMenu"
        to=""
        class="Nav-user-notifications"
      />-->
      <nuxt-link class="Nav-user-button" to="/rodger" />
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
  margin-top: -0.3rem;
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

// popover notify
#hover {
  padding: 6px;
  display: block;
  position: relative;
}

#popup {
  opacity: 0;
  top: 32px;
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  padding: 0px;
  overflow: hidden;
  -webkit-transition: all 500ms;
  transition: all 500ms;
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.0975);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.0975);
  display: block;
  max-height: 0px;
  min-height: 0px;
  position: absolute;
}
#hover:hover #popup {
  height: auto;
  opacity: 1;
  max-height: 200px;
  min-height: 10px;
  margin-top: -3px;
}
img {
  margin-left: 55px;
  margin-right: 55px;
}
.content .popover {
  top: 11px;
}
</style>
