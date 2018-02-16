var html = require('choo/html')
var css = require('sheetify')
var marked = require('marked')

var prefix = css`
  :host .cool-button {
    background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
    text-decoration: none;
    color: #F5F5F5;
    padding: 5px 20px;
    border-radius: 0;
    box-shadow:  4px 4px 0 #414141;
    max-width: 30px;
    max-height: 30px;
    transition: all 0.2s ease;
  }
  :host .cool-button:hover {
    box-shadow:  4px 5px 0 #414141;
  }
  :host .full-width{
    display: block;
    margin: 15px 0;
  }
  :host .post-section {
    max-width: 740px;
    padding-left: 20px;
    padding-right: 20px;
  }
  :host .post-body {
    padding-bottom: 40px;
    transform: scale(0.99);
  }
  :host .post-header {
    border-bottom: 1px solid #333333;
  }
  :host .row {
    display: flex;
    padding: 10px 0;
    margin-bottom: 20px;
    justify-content: space-between;
  }
  :host .row-item {
    flex: 0 0 50%;
  }
`

function postView (state, emit) {
  var slug = state.params.post
  var post = state.currentPost
  if (!post || post.slug !== slug) emit('fetchPost', slug)
  var createdAt = post && new Date(post.createdAt)
  var postBody = post && post.body && marked(post.body)

  if (typeof window !== 'undefined') {
    var blankNode = document.createElement('div')
    blankNode.innerHTML = postBody
    postBody = blankNode
  }
  return html`
  <body class="${prefix}">
    <main>
      <section class="row container post-section">
        <a class="cool-button row-item" href="/">back</a>
        <div class="row-item">
          <div class="right">${createdAt && createdAt.toDateString()}</div>
          <div class="right">John Roberts</div>
        </div>
      </section>
      <section class="container post-section post-header">
        <div>
          <h1 class="full-width">${post.title}</h1>
        </div>
        <div>
          <h5 class="full-width">${post.subtitle}</h5>
        </div>
      </section>
      <section class="container post-section post-body">
        ${postBody}
      </section>
    </main>
  </body>
  `
}

module.exports = postView
