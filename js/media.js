const btnThemes = document.querySelectorAll('[data-theme]')
const bgvideo = document.querySelector('[data-bgvideo]')
const bgaudio = document.querySelector('[data-bgaudio]')
const body = document.querySelector('body')

const themesReset = () => {
  for (let btnTheme of btnThemes) {
    btnTheme.checked = false
  }
}

// Esse código precisa de refatoração
for (let btnTheme of btnThemes) {
  btnTheme.onclick = (e) => {
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
