<template>
  <article class="Post">
    <header>
      <div class="Post-user">
        <div class="Post-user-avatar">
          <nuxt-link :to="'/profile/' + postInfo.user">
            <img
              :alt="postInfo.user"
              :src="fetchUser(postInfo.user).profilePic"
            />
          </nuxt-link>
        </div>
        <div class="Post-user-nickname">
          <nuxt-link :to="'/profile/' + postInfo.user" class="anchor-nodec">
            <span>{{ postInfo.user }}</span>
          </nuxt-link>
        </div>
      </div>
    </header>
    <div class="Post-image">
      <div class="Post-image-bg">
        <img :src="postInfo.url" alt="caption" />
      </div>
    </div>
    <Like />
    <div class="Post-caption">
      <nuxt-link :to="'/profile/' + postInfo.user">
        <strong>{{ postInfo.user }}</strong>
      </nuxt-link>
      <br />
      {{ postInfo.caption }}
    </div>
    <div class="Post-time">{{ postInfo.time }}</div>
  </article>
</template>

<script>
import Like from '~/components/Like.vue'

export default {
  components: {
    Like
  },
  props: {
    postInfo: {
      type: Object,
      required: false,
      default() {
        return []
      }
    }
  },
  methods: {
    fetchUser(username) {
      return this.$store.state.users.find((user) => user.username === username)
    }
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
