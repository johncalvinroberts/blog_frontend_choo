var html = require('choo/html')
var css = require('sheetify')

var prefix = css`
  :host .full-width{
    display: block;
  }
  :host .post-body {
    max-width: 740px;
    padding-left: 20px;
    padding-right: 20px;
  }
`

function postView (state, emit) {
  var slug = state.params.post
  var post = state.currentPost
  if (!post || post.slug !== slug) emit('fetchPost', slug)

  return html`
  <body class="${prefix}">
    <main class="">
      <div class="nav">
        <a class="nav-item" href="/">back</a>
      </div>
      <section class="container post-body">
        <div class="col">${post.createdAt}</div>
      </section>
      <section class="container post-body">
        <div>
          <h2 class="full-width">${post.title}</h2>
        </div>
        <div>
          <h5 class="full-width">${post.subtitle}</h5>
        </div>
      </section>
      <section class="container post-body">
        ${post ? post.body : ''}
      </section>
    </main>
  </body>
  `
}

module.exports = postView
