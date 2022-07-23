import Controls from './controls.js'
import Display from './display.js'

const controls = Controls()
const display = Display()

const timer = (minutes, seconds) => {
  let initialMinutes = minutes 
  const initialSeconds = 0 
  let timeId

  const countdown = () => {
    timeId = setInterval(() => {
      if (minutes == 0 && seconds == 0) {
        controls.reset()
        controls.enabled()
        display.update(minutes, seconds)
        clearInterval(timeId)
        alert("O tempo acabou!!")
        return
      }

      if (seconds <= 0) {
        seconds = 60 
        --minutes
      } 

      display.update(minutes, --seconds)
    }, 1000)
  }

  const pause = () => {
    clearInterval(timeId)
  }

  const stop = () => {
    if (minutes == 0) controls.disabledBtn("btnMinus")
    minutes = initialMinutes
    seconds = initialSeconds
    display.update(initialMinutes, initialSeconds)
    clearInterval(timeId)
  }

  const plus5minutes = () => {
    minutes = minutes + 5
    if (minutes > 0) controls.enabledBtn("btnPlay", "btnStop", "btnPlus", "btnMinus")
    initialMinutes = minutes
    display.update(minutes, seconds)
  }

  const minus5minutes = () => {
    if (minutes > 0) minutes = minutes - 5
    if (minutes == 0) controls.disabledBtn("btnMinus", "btnPlay", "btnStop")
    initialMinutes = minutes
    if (minutes < 0) minutes = 0
    display.update(minutes, seconds)
  }

  return {
    countdown,
    pause,
    stop,
    plus5minutes,
    minus5minutes
  }
}

export default timer
