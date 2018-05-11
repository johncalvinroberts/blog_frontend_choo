var html = require('choo/html')
var css = require('sheetify')

var prefix = css`
    :host
  `

function homeView (state, emit) {
  return `<div>yooo</div>`
}

function submitLogin(e) {
  emit('login', 1)
}

module.exports = homeView
