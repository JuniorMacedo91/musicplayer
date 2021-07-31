const darkModeBtn = document.querySelector('#dark-mode-btn')
const bgimageLight = document.querySelector('#bgimage-light')
const headphonePic = document.querySelector('#headphone-pic')

darkModeBtn.addEventListener('click', darkMode)

function darkMode(){
    document.body.classList.toggle('dark-mode')
    if(darkModeBtn.checked){
        document.body.style.color='#fff'
        bgimageLight.setAttribute('src', './assets/images/black-fone.png')
        headphonePic.setAttribute('src', './assets/images/black-fone.png')
    } else{
        document.body.style.color='#000000'
        bgimageLight.setAttribute('src', './assets/images/white-fone.png')
        headphonePic.setAttribute('src', './assets/images/white-fone.png')
    }
}

