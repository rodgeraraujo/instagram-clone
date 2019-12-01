import posts from '~/data/posts.json'
import users from '~/data/users.json'

export const state = () => ({
  posts,
  users,
  authenticated: false
})

export const mutations = {
  addPost(state, post) {
    state.posts.push(post)
  },
  addUser(state, user) {
    state.user.push(user)
  },
  login(state) {
    state.authenticated = true
  },
  logout(state) {
    state.authenticated = false
  }
}

export const getters = {
  getPost(state) {
    return state.posts
  },
  getUser(state) {
    return state.users
  }
}
