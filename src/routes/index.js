const express = require('express')
const router = express.Router()
const { getNowPlaying } = require('../services/lastFm')

router.get('/', (req, res, _next) => {
  return res.render('index')
})

router.get('/now-playing', async (req, res) => {
  const playing = await getNowPlaying()
  return res.send({ songName: playing })
})

module.exports = router
