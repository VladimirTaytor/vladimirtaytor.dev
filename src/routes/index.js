var express = require('express')
var router = express.Router()

router.get('/', (req, res, _next) => {
  return res.render('index')
})

router.get('/now-playing', (req, res) => {
  return res.send({ songName: 'Toto - Africa' })
})

module.exports = router
