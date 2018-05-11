var html = require('choo/html')
var postItem = require('../components/post-list-item')
var css = require('sheetify')
var DarkModeBtn = require('../components/dark-mode-button')

function getStyle (state) {
  var prefix = css`
  body {
    min-height: 100vh;
    color: #C4C4C4;
    background-color: #000000;
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
  }
`  
  return prefix
}

function mainView (state, emit) {
  var posts = state.posts
  var darkModeBtn = DarkModeBtn(state, emit)
  if (posts.length < 1) emit('fetchPosts')
  var postsList = posts.map(post => postItem(post))
  var prefix = getStyle(state)
  return html`
    <body class="${prefix}">
      <main class="">
        ${darkModeBtn}
        <section class="container center">
          <h1 class="">blog.</h1>
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

module.exports = mainView
