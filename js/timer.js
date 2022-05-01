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
        display.update(minutes, seconds)
        clearInterval(timeId)
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
    minutes = initialMinutes
    seconds = initialSeconds
    display.update(initialMinutes, initialSeconds)
    clearInterval(timeId)
  }

  const plus5minutes = () => {
    minutes = minutes + 5
    initialMinutes = minutes
    display.update(minutes, seconds)
  }

  const minus5minutes = () => {
    minutes = minutes - 5
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
