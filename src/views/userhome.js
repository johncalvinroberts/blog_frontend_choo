var html = require('choo/html')
var css = require('sheetify')

function homeView (state, emit) {
  var prefix = css`
    :host
  `
  return html``
  function submitLogin (e) {
    emit('login', 1)
  }
}

module.exports = homeView
