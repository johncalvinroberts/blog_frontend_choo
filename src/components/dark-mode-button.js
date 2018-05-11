var html = require('choo/html')
var css = require('sheetify')


module.exports = function (state, emit) {
  var darkMode = state.darkMode

  function _toggleDarkMode() {
    emit('toggleDark', 1)
  }
  
  var prefix = css`
    :host {
      position: fixed;
      top: 20px;
      right: 20px;
      opacity: 0.5;
    }
    :host button {
    }
  `
  return html `
    <div class="${prefix}">
      <button onclick="${_toggleDarkMode}">Switch To Dark Mode</button>
    </div>
  `
}