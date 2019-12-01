import posts from '~/data/posts.json'
import users from '~/data/users.json'

export const state = () => ({
  posts,
  users
})

export const mutations = {
  add(state, post) {
    state.posts.push(post)
  },
  addUser(state, user) {
    state.user.push(user)
  }
}

export const getters = {
  get(state) {
    return state.posts
  },
  getUser(state) {
    return state.users
  }
}
