const axios = require('axios')
const MemoryCache = require('./cache')

const cache = new MemoryCache()

const LAST_FM_API_KEY = process.env.LAST_FM_API_KEY
const LAST_FM_BASE_URL = 'http://ws.audioscrobbler.com/2.0/'
const LAST_FM_USERNAME = 'ferosplav'

const fetchLatestTracks = async () => {
  const url = `${LAST_FM_BASE_URL}?method=user.getrecenttracks&user=${LAST_FM_USERNAME}&api_key=${LAST_FM_API_KEY}&format=json`
  return axios.get(url).then(({ data }) => data.recenttracks.track)
}

const findCurrentPlaying = async () => {
  const latestTracks = await fetchLatestTracks()
  const latestTrack = latestTracks[0]

  if (latestTrack['@attr'] && latestTrack['@attr'].nowplaying)
    return `${latestTrack.artist['#text']} - ${latestTrack.name}`

  return 'paused'
}

const getNowPlaying = async () => {
  const nowPlaying = cache.get('now:playing')

  if (!nowPlaying) {
    const playing = await findCurrentPlaying()
    return cache.put('now:playing', playing)
  }

  return nowPlaying
}

module.exports = { getNowPlaying }
