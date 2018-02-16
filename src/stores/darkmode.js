function store (state, emitter) {
  var white = '#ffffff'
  var black = '#333333'
  state.darkMode = false
  state.backgroundColor = white
  state.textColor = black

  emitter.on('toggleDark', function () {
    state.darkMode = !state.darkMode
    if (state.darkMode) {
      state.backgroundColor = black
      state.textColor = white
    } else {
      state.backgroundColor = white
      state.textColor = black
    }
    emitter.emit(state.events.RENDER)
  })
}

module.exports = store
