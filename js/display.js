import { displayMinutes, displaySeconds, separator } from './elements.js'

const Display = () => {
  const update = (minutes, seconds) => {
    displayMinutes.innerText = String(minutes).padStart(2, '0')
    displaySeconds.innerText = String(seconds).padStart(2, '0')
  }
 
  return {
    update
  }
}

export default Display
