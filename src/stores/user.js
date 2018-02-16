var Axios = require('axios')
var api = 'http://localhost:8000/'
var axios = Axios.create({
  baseURL: 'http://localhost:8000/',
  timeout: 1000,
  headers: {'Content-Type': 'application/json', 'credentials': 'include'}
})
function store (state, emitter) {
  state.signedIn = false
  state.user = {}
  var headers = {'Content-Type': 'application/json', 'credentials': 'include'}
  emitter.on('login', function (body) {
    // axios.post('login', body)
    //   .then(({data}) => {
    //     state.signedIn = true
    //     state.user = data
    //     emitter.emit(state.events.RENDER)
    //   })
    //   .catch(err => console.log('oh no!'))
    fetch(`${api}login`, {method: 'POST', body, headers: headers})
      .then(res => res.json())
      .then(user => {
        console.log(user)
        state.signedIn = true
        state.user = user
        emitter.emit(state.events.RENDER)
      })
      .catch(err => console.log('oh no!'))
  })
}

module.exports = store
