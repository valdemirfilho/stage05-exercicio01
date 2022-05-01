import { btnPlay, btnPause, btnStop, separator, btnPlus, btnMinus } from './elements.js'

const Controls = () => {
  const play = () => {
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
    separator.classList.add('blink')
  }

  const reset = () => {
    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')
    separator.classList.remove('blink')
  }

  const enabled = () => {
    btnPlus.disabled = false
    btnMinus.disabled = false
  }

  const disabled = () => {
    btnPlus.disabled = true 
    btnMinus.disabled = true 
  }

  return {
    reset,
    play,
    enabled,
    disabled
  }
}

export default Controls
