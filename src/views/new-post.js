var html = require('choo/html')

function createPostView (state, emit) {
  var posts = state.posts || []
  return html`
  <body class="code lh-copy">
    <main class="pa3 cf center">
    HEYEYEYE
    </main>
  </body>
  `
}

module.exports = createPostView
