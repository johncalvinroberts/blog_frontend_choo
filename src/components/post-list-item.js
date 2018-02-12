var html = require('choo/html')

var postItem = function (post) {
  return html`
    <a href="/${post.id}">
      <h5>${post.title}</h5>
    </a>
  `
}
module.exports = postItem
