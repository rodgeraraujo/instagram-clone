<template>
  <div>
    <div class="post-like-container">
      <!-- <button class="post-like-button-white button-nodec" /> -->

      <button class="post-like-button-black button-nodec" />
      <span class="Post-likes">
        <strong>60 likes</strong>
      </span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scooped>
.post-like-button-white {
  display: block;
  background-position: -154px -419px;
  background-image: url(/sprite.png);
  background-size: 500px 486px;
  background-repeat: no-repeat;
  height: 34px;
  width: 33px;
  padding-left: 10px;
  margin-left: 12px;
  text-indent: -1000%;
}

.post-like-button-black {
  display: block;
  background-color: transparent;
  background-position: -246px -419px;
  background-image: url(/sprite.png);
  background-size: 500px 486px;
  background-repeat: no-repeat;
  height: 34px;
  width: 33px;
  padding-left: 10px;
  margin-left: 12px;
  text-indent: -1000%;
}
</style>
