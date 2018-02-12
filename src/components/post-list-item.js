var html = require('choo/html')

var postItem = function (post) {
  return html`
    <a href="/${post.slug}" class="card">
      <h5 class="card-header">${post.title}</h5>
      <p class="card-body">${post.subtitle}</p>
    </a>
  `
}
module.exports = postItem
