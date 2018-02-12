var html = require('choo/html')
var postItem = require('../components/post-list-item')

function homeView (state, emit) {
  var posts = state.posts || []
  emit('fetchPosts')
  var postsList = posts.map(post => postItem(post)).join('')
  return html`
    <body class="">
      <main class="pa3 cf center">
        <section class="fl mw6 w-50-m w-third-l pa3">
          <div>hey</div>
        </section>
        <section>
          ${postsList}
        </section>
      </main>
    </body>
  `

  function getPosts () {
    emit('fetchPosts', 1)
  }
}

module.exports = homeView
