<template>
  <article class="Post">
    <header>
      <div class="Post-user">
        <div class="Post-user-avatar">
          <nuxt-link to="/profile">
            <img alt="username" src="~/assets/profile.png" />
          </nuxt-link>
        </div>
        <div class="Post-user-nickname">
          <nuxt-link class="anchor-nodec" to="/profile">
            <span>username</span>
          </nuxt-link>
        </div>
      </div>
    </header>
    <div class="Post-image">
      <div class="Post-image-bg">
        <img alt="caption" src="~/assets/post.jpg" />
      </div>
    </div>
    <Like />
    <div class="Post-caption">
      <nuxt-link to="/profile">
        <strong>username</strong>
      </nuxt-link>
      <br />
      Lorem ipsum dolor set amet...
    </div>
    <div class="Post-time">1 hour</div>
  </article>
</template>

<script>
import Like from '~/components/Like.vue'

export default {
  components: {
    Like
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 93.5rem;
  margin: 0 auto;
  padding: 0 2rem;
}
.Post {
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  margin-bottom: 60px;
  margin-left: 20%;
  margin-right: 20%;
}
.Post-user {
  display: flex;
  padding: 10px;
  align-items: center;
}
.Post-user-avatar {
  width: 30px;
  height: 30px;
}
.Post-user-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.Post-user-nickname {
  margin-left: 12px;
  font-weight: bold;
}
.Post-image-bg {
  background-color: #efefef;
}
.Post-image img {
  display: block;
  width: 100%;
  max-height: 450px;
}
.Post-caption {
  padding: 5px 0px 5px 16px;
  font-size: 14px;
}
.Post-likes {
  padding: 5px 0px 5px 16px;
  font-size: 14px;
}
.Post-caption strong {
  font-weight: bold;
}
.Post-time {
  font-weight: lighter;
  font-size: 10px;
  padding-left: 16px;
  padding-bottom: 5px;
}
.vjs-fade-out {
  display: none;
  visibility: hidden;
  opacity: 0;
}

.button-no-style {
  text-decoration: none;
  border: none;
  padding: none;
}
</style>
