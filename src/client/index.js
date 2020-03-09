import { renderScene } from './engine'
import { getCurrentPlayingSong } from './api'

window.onload = async () => {
  await getCurrentPlayingSong()
  renderScene()
}
