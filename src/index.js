var css = require('sheetify')
var choo = require('choo')
var store = require('./stores/posts')
var darkmode = require('./stores/darkmode')
var user = require('./stores/user')
css('wingcss')

// initialize choo
var app = choo()
app.use(store)
app.use(darkmode)
app.use(user)

app.route('/', require('./views/main'))
app.route('/:post/editor', require('./views/editor'))
app.route('/:post', require('./views/post'))
app.route('/home', require('./views/userhome'))
app.route('/login', require('./views/login'))

app.use((state, emitter) => {
  emitter.on('navigate', (route) => {
    console.log(`Navigated to ${route}`)
  })
})

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

// start app
if (module.parent) module.exports = app
else app.mount('body')
