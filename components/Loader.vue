<template>
  <div>
    <div class="loader"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.loader {
  width: 5rem;
  height: 5rem;
  border: 0.6rem solid #999;
  border-bottom-color: transparent;
  border-radius: 50%;
  margin: 0 auto;
  animation: loader 500ms linear infinite;
}
/* Spinner Animation */

@keyframes loader {
  to {
    transform: rotate(360deg);
  }
}
</style>
