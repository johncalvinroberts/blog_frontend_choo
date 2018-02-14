var fetch = require('node-fetch')
var api = 'http://localhost:8000'

function store (state, emitter) {
  state.posts = []
  state.currentPost = {}

  emitter.on('fetchPosts', function () {
    fetch(`${api}/posts`)
      .then(res => res.json())
      .then(posts => {
        state.posts = posts
        emitter.emit(state.events.RENDER)
      })
      .catch(err => console.error(err))
  })
  emitter.on('fetchPost', function (slug) {
    fetch(`${api}/posts/${slug}`)
      .then(res => res.json())
      .then(post => {
        state.currentPost = post
        emitter.emit(state.events.RENDER)
      })
  })
}

module.exports = store
