var html = require('choo/html')
var css = require('sheetify')
var marked = require('marked')

function editorView (state, emit) {
  var prefix = css`
    :host {
    }
  `
  var currentPost = state.currentPost
  var slug = state.params.post
  var post = state.currentPost
  if (!post || post.slug !== slug) emit('fetchPost', slug)
  return html`
  <body class="${prefix}">
    <div>
      ${post ? post.title : ''}
    </div>
  </body>
  `
}

module.exports = editorView
