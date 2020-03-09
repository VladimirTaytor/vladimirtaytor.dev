import axios from 'axios'

export const getCurrentPlayingSong = async () => {
  return await axios.get('/now-playing').then(({ data }) => console.log(data))
}
