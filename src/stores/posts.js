
var fetch = require('node-fetch')
var api = 'http://localhost:8000/'

function store (state, emitter) {
  state.posts = []
  state.currentPost = {}

  emitter.on('fetchPosts', function () {
    fetch(`${api}posts`)
      .then(res => res.json())
      .then(posts => {
        console.log(posts)
        state.posts = posts
        emitter.emit(state.events.RENDER)
      })
      .catch(err => console.error(err))
  })
}

module.exports = store
