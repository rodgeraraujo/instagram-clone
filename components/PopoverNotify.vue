<template>
  <div id="hover" href="#">
    <nuxt-link to="" class="Nav-user-notifications"></nuxt-link>
    <div id="popup">
      <img
        class="popover-img"
        src="https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#hover {
  padding: 6px;
  display: block;
  position: relative;
}

#popup {
  overflow: hidden;
  opacity: 0;
  position: absolute;
  top: 32px;
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  height: 0px;
  padding: 0 12px;
  overflow: hidden;
  -webkit-transition: all 500ms;
  transition: all 500ms;
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.0975);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.0975);
  display: block;
  margin-left: 423px;
  max-height: 362px;
  min-height: 100px;
  position: absolute;
}

#hover:hover #popup {
  padding: 12px 12px;
  height: auto;
  opacity: 1;
  border: 1px solid #eeeeee;
}

.popover-img {
  width: 30%;
  display: block;
  margin: auto;
}
.content .popover {
  top: 11px;
}
</style>
