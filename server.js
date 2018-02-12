const http = require('http')
const bankai = require('bankai/http')
const path = require('path')

var compiler = bankai(path.join(__dirname, '/src'))

function handler (req, res) {
  compiler(req, res, function () {
    res.statusCode = 404
    res.end('not found')
  })
}

const server = http.createServer(handler)
server.listen(4000, function () {
  console.log('listening on port 8080')
})
