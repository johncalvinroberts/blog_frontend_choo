var html = require('choo/html')
var postItem = require('../components/post-list-item')
var css = require('sheetify')

const prefix = css`
  body {
    min-height: 100vh;
    color: #333;
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  }
  :host .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 2rem;
  }
  :host .card {
    flex-direction: column;
    overflow: hidden;
    flex: 0 1 calc(100% - .5rem);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.01);
    margin-bottom: 2rem;
    background-color:#fff;
    max-width: 500px;
    color: #333;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  :host .card:hover {
    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.1);
  }
  :host .card-header {
    font-weight: 600;
    margin: 0;
    padding: 2rem 3rem 1rem
  }
  :host .card-body {
    padding: 0 3rem 2rem 3rem;
    min-height: 100px;
  }
`
function homeView (state, emit) {
  var posts = state.posts
  if (posts.length < 1) emit('fetchPosts')
  var postsList = posts.map(post => postItem(post))

  return html`
    <body class="${prefix}">
      <main class="">
        <section class="container center">
          <h1 class="">title or something here</h1>
        </section>
        <section class="container center">
          <div class="cards">
            ${postsList}
          </div>
        </section>
      </main>
    </body>
  `

  function getPosts () {
    emit('fetchPosts', 1)
  }
}

module.exports = homeView
