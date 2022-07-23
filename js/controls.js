import { btnPlay, btnPause, btnStop, separator, btnPlus, btnMinus } from './elements.js'

const Controls = () => {
  const buttonsList = { btnPlay, btnPause, btnStop, btnMinus, btnPlus }

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

  const enabledBtn = (...buttonsEnabled) => {
    buttonsEnabled.forEach(button => buttonsList[button].disabled = false)
  }

  const disabledBtn = (...buttonsDisabled) => {
    buttonsDisabled.forEach(button => buttonsList[button].disabled = true)
  }

  return {
    reset,
    play,
    enabledBtn,
    disabledBtn
  }
}

export default Controls
