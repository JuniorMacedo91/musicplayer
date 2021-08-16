const playlist_box = document.querySelector('.list-container')
const container_wrapper = document.querySelector('#container-wrapper')
const playlist_btn = document.querySelector('#list-btn')
const darkMode_btn = document.querySelector('#darkMode-btn')
const loop_btn = document.querySelector('#loop-btn')
const lyrics_btn = document.querySelector('#lyrics-btn')


playlist_btn.addEventListener('click', function(){
    if(playlist_box.classList.toggle('show')){
        playlist_btn.classList = 'fas fa-angle-double-down';
    } else{
        playlist_btn.classList = 'fas fa-list-ul'
    }
});


darkMode_btn.addEventListener('click', function(){
    if(container_wrapper.classList.toggle('dark-mode')){
        localStorage.setItem('darkmode_on', 'dark-mode')
    } else{
        localStorage.removeItem('darkmode_on')
    }
})


loop_btn.addEventListener('click', function(){
    if(loop_btn.classList.toggle('btn-active')){
        audio.loop = true
    } else{
        audio.loop = false
    }
})

document.querySelector('#container-wrapper').setAttribute('class', localStorage.getItem('darkmode_on'))

import{audio, load_song} from './main.js'