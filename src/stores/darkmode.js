function store (state, emitter) {
  state.darkMode = false
  state.backgroundColor = '#C4C4C4'
  state.textColor = '#333333'

  emitter.on('toggleDark', function () {
    state.darkMode = !state.darkMode
    if (state.darkMode) {
      state.backgroundColor = '#333333'
      state.textColor = '#C4C4C4'
    } else {
      state.backgroundColor = '#C4C4C4'
      state.textColor = '#333333'
    }
    emitter.emit(state.events.RENDER)
  })
}

module.exports = store
