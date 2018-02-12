var html = require('choo/html')

function postView (state, emit) {
  var slug = state.params.post
  var fetchedPost = state.fetchedPosts.find(post => post.slug === slug)
  if (!fetchedPost) emit('fetchPost', slug)

  return html`
  <body class="code lh-copy">
    <main class="pa3 cf center">
      ${post.body}
    </main>
  </body>
  `
}

module.exports = postView
