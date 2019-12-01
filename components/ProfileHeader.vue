<template>
  <div>
    <header>
      <div class="container">
        <div class="profile">
          <div class="profile-image">
            <img :src="user.profilePic" alt />
          </div>

          <div class="profile-user-settings">
            <h1 class="profile-user-name">{{ user.username }}</h1>
            <button class="btn profile-edit-btn">Edit Profile</button>
            <button class="btn profile-settings-btn">
              <i class="settings-icon"></i>
            </button>
          </div>
          <div class="profile-stats">
            <li>
              <span class="profile-stat-count">{{ posts.length }}</span>
              posts
            </li>
            <li>
              <span class="profile-stat-count">{{ user.followers }}</span>
              followers
            </li>
            <li>
              <span class="profile-stat-count">{{ user.following }}</span>
              following
            </li>
          </div>
          <div class="profile-bio">
            <p>
              <span class="profile-real-name"
                >{{ user.name }} {{ user.lastname }}</span
              >
              <br />
              {{ user.description }}
            </p>
          </div>
        </div>
      </div>
    </header>

    <Posts :userPosts="posts" />
  </div>
</template>

<script>
import Posts from '~/components/Posts.vue'

export default {
  components: {
    Posts
  },
  props: {
    user: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    },
    posts: {
      type: Array,
      required: true,
      default() {
        return []
      }
    },
    data: () => ({})
  }
}
</script>

<style scoped>
.profile {
  padding: 5rem 0;
}

.profile::after {
  content: '';
  display: block;
  clear: both;
}

.profile-image {
  float: left;
  width: calc(33.333% - 1rem);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3rem;
  padding-left: 15%;
}

.profile-image img {
  width: 152px;
  height: 152px;
  border-radius: 50%;
}

.profile-user-settings,
.profile-stats,
.profile-bio {
  float: left;
  width: calc(66.666% - 2rem);
}

.profile-user-settings {
  margin-top: 1.1rem;
}
.settings-icon {
  display: block;
  background-position: -126px -356px;
  background-image: url(/sprite.png);
  background-size: 405px 379px;
  background-repeat: no-repeat;
  height: 23px;
  width: 22px;
  text-indent: -1000%;
  margin-top: -1.7rem;
  position: absolute;
  cursor: pointer;
}

.profile-user-name {
  display: inline-block;
  font-size: 3.2rem;
  font-weight: 300;
}

.profile-edit-btn {
  font-size: 1.4rem;
  line-height: 1.8;
  border: 0.1rem solid #dbdbdb;
  background-color: #fafafa;
  border-radius: 0.3rem;
  padding: 0 2.4rem;
  margin-left: 2rem;
  cursor: pointer;
}

.profile-settings-btn {
  font-size: 2rem;
  margin-left: 1rem;
  background-color: transparent;
  border: none;
}

.profile-stats {
  margin-top: 2.3rem;
}

.profile-stats li {
  display: inline-block;
  font-size: 1.6rem;
  line-height: 1.5;
  margin-right: 4rem;
  cursor: pointer;
}

.profile-stats li:last-of-type {
  margin-right: 0;
}

.profile-bio {
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 2.3rem;
}

.profile-real-name,
.profile-stat-count,
.profile-edit-btn {
  font-weight: 650;
}
/* @media screen and (max-width: 40rem) {
  .profile {
    display: flex;
    flex-wrap: wrap;
    padding: 4rem 0;
  }

  .profile::after {
    display: none;
  }

  .profile-image,
  .profile-user-settings,
  .profile-bio,
  .profile-stats {
    float: none;
    width: auto;
  }

  .profile-image img {
    width: 7.7rem;
  }

  .profile-user-settings {
    flex-basis: calc(100% - 10.7rem);
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
  }

  .profile-user-name {
    font-size: 2.2rem;
  }

  .profile-edit-btn {
    order: 1;
    padding: 0;
    text-align: center;
    margin-top: 1rem;
  }

  .profile-edit-btn {
    margin-left: 0;
  }

  .profile-bio {
    font-size: 1.4rem;
    margin-top: 1.5rem;
  }

  .profile-edit-btn,
  .profile-bio,
  .profile-stats {
    flex-basis: 100%;
  }

  .profile-stats {
    order: 1;
    margin-top: 1.5rem;
  }

  .profile-stats ul {
    display: flex;
    text-align: center;
    padding: 1.2rem 0;
    border-top: 0.1rem solid #dadada;
    border-bottom: 0.1rem solid #dadada;
  }

  .profile-stats li {
    font-size: 1.4rem;
    flex: 1;
    margin: 0;
  }

  .profile-stat-count {
    display: block;
  }
} */
@media screen and (max-width: 40rem) {
  .profile-image img {
    width: 77px;
    height: 77px;
  }
  div.profile-stats,
  p {
    inset-inline: initial;
    padding: 0px 16px 21px;
  }
  .profile-image {
    padding-left: 15%;
  }
}
</style>
