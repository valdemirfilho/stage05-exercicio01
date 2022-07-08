const btnThemes = document.querySelectorAll('[data-theme]')
const bgvideo = document.querySelector('[data-bgvideo]')
const bgaudio = document.querySelector('[data-bgaudio]')
const body = document.querySelector('body')

const volumeInputs = document.querySelectorAll('[data-volume')

let globalVolume = 0.5 

const themesReset = () => {
  for (let btnTheme of btnThemes) {
    btnTheme.checked = false
  }
}

// Esse código abaixo precisa de refatoração
for (let btnTheme of btnThemes) {
  btnTheme.onclick = () => {
    if (btnTheme.checked) {
      bgvideo.src = `./videos/${btnTheme.dataset.theme}_720_480.webm`
      bgaudio.src = `./sounds/${btnTheme.dataset.theme}.mp3`
      bgaudio.play()
      themesReset()
      btnTheme.checked = true
      body.setAttribute('class', btnTheme.dataset.theme)
    } else {
      bgvideo.src = ``
      bgaudio.src = '' 
      body.removeAttribute('class')
    }
  }
}

for (let volumeInput of volumeInputs) {
  volumeInput.value = globalVolume * 100
  bgaudio.volume = globalVolume
  volumeInput.nextElementSibling.innerText = `${(globalVolume * 100).toFixed(0)}%`

  volumeInput.addEventListener('input', (e) => {
    globalVolume = volumeInput.value / 100
    setGlobalVolume()
    bgaudio.volume = globalVolume 
    e.target.nextElementSibling.innerText = `${(globalVolume * 100).toFixed(0)}%`
  })
}

function setGlobalVolume() {
  for (let volumeInput of volumeInputs) {
    volumeInput.value = globalVolume * 100
    volumeInput.nextElementSibling.innerText = `${(globalVolume * 100).toFixed(0)}%`
  }
}