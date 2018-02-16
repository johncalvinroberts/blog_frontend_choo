var html = require('choo/html')
var css = require('sheetify')

function homeView (state, emit) {
  if (state.signedIn && state.user !== {}) {
    console.log('redirecting')
    setTimeout(() => emit('replaceState', '/'), 300)
  }
  var prefix = css`
    :host form {
      max-width: 500px;
    }
    :host label {
      font-family: -apple-system, BlinkMacSystemFont, Avenir, "Avenir Next", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    }
  `
  return html`
    <body>
      <main class="${prefix}">
        <section class="container">
          <h4>Sign in to this sillyblog</h4>
          <form id="login" onsubmit=${submitLogin} enctype="application/x-www-form-urlencoded">
            <label for="username">
              username
            </label>
            <input id="username" name="username"
              type="text"
              required
              pattern=".{1,36}"
              title="Username must be between 1 and 36 characters long."
            >
            <label for="password">
              password
            </label>
            <input id="password" name="password"
              type="password"
              required
            >
            <input type="submit" value="Login">
          </form>
        </section>
      </main>
    </body>
  `
  function submitLogin (e) {
    e.preventDefault()
    var form = new FormData(e.currentTarget)
    var body = JSON.stringify({username: form.get('username'), password: form.get('password')})
    emit('login', body)
  }
}

module.exports = homeView
