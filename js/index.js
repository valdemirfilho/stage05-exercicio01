import { btnPlay, btnPause, btnStop, displayMinutes, displaySeconds, btnPlus, btnMinus } from './elements.js'
import './media.js'

import Controls from './controls.js'
import Timer from './timer.js'

const controls = Controls()

let minutes = Number(displayMinutes.innerText)
let seconds = Number(displaySeconds.innerText)
const timer = Timer(minutes, seconds)

btnPlay.onclick = () => {
  controls.play()
  controls.disabled()
  timer.countdown()
}

btnPause.onclick = () => {
  controls.reset()
  controls.disabled()
  timer.pause()
}

btnStop.onclick = () => {
  controls.reset()
  controls.enabled()
  timer.stop()
}

btnPlus.onclick = () => {
  timer.plus5minutes()
}

btnMinus.onclick = () => {
  timer.minus5minutes()
}
