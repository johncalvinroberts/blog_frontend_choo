var css = require('sheetify')
var choo = require('choo')
var store = require('./stores/posts')

css('wingcss')

// initialize choo
var app = choo()
app.use(store)

app.route('/', require('./views/main'))
app.route('/new', require('./views/new-post'))
app.route('/:post', require('./views/post'))
app.route('/*', require('./views/404'))

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

// start app
if (module.parent) module.exports = app
else app.mount('body')
