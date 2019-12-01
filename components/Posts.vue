<template>
  <div>
    <div class="container">
      <div class="gallery">
        <div
          v-for="(post, index) of posts"
          :key="index"
          class="gallery-item"
          tabindex="0"
        >
          <img :src="post.url" class="gallery-image" />

          <div v-if="post.type != null" class="gallery-item-type">
            <span class="visually-hidden">
              <i
                v-if="post.type == 'Gallery'"
                class="icon-type-gallery"
                aria-hidden="true"
              />
              <i v-else class="icon-type-video" aria-hidden="true" />
            </span>
          </div>

          <div class="gallery-item-info">
            <ul>
              <li class="gallery-item-likes">
                <span class="visually-hidden">
                  <i class="icon-like" aria-hidden="true"></i>
                  {{ post.likes }}
                </span>
              </li>
              <li class="gallery-item-comments">
                <span class="visually-hidden">
                  <i class="icon-comment" aria-hidden="true"></i>
                  {{ post.comments }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    posts: 'posts/get'
  }),
  methods: {}
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 93.5rem;
  margin: 0 auto;
  padding: 0 2rem;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  margin: -1rem -1rem;
  padding-bottom: 3rem;
}

.gallery-item {
  position: relative;
  flex: 1 0 22rem;
  margin: 1rem;
  color: #fff;
  cursor: pointer;
}

.gallery-item:hover .gallery-item-info,
.gallery-item:focus .gallery-item-info {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.gallery-item-info {
  display: none;
}

.gallery-item-info li {
  display: inline-block;
  font-size: 1.7rem;
  font-weight: 600;
}

.gallery-item-likes {
  margin-right: 2.2rem;
}

.gallery-item-type {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2.5rem;
  text-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
}

.fa-clone,
.fa-comment {
  transform: rotateY(180deg);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.icon-like {
  display: block;
  background-position: -384px -87px;
  background-image: url(/sprite.png);
  background-size: 405px 379px;
  background-repeat: no-repeat;
  height: 18px;
  width: 20px;
  text-indent: -1000%;
}

.icon-comment {
  display: block;
  background-position: -384px -106px;
  background-image: url(/sprite.png);
  background-size: 405px 379px;
  background-repeat: no-repeat;
  height: 18px;
  width: 20px;
  text-indent: -1000%;
}
.icon-type-gallery {
  display: block;
  background-position: -251px -286px;
  background-image: url(/sprite.png);
  background-size: 405px 379px;
  background-repeat: no-repeat;
  height: 18px;
  width: 20px;
  text-indent: -1000%;
}
.icon-type-video {
  display: block;
  background-position: -251px -286px;
  background-image: url(/sprite.png);
  background-size: 405px 379px;
  background-repeat: no-repeat;
  height: 18px;
  width: 20px;
  text-indent: -1000%;
}
</style>
