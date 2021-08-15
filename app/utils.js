import {audio} from './main.js'

const playlist_box = document.querySelector('.list-container')
const container_wrapper = document.querySelector('#container-wrapper')
const playlist_btn = document.querySelector('#list-btn')
const song_waves = document.getElementById('song-waves')
const darkMode_btn = document.querySelector('#darkMode-btn')
const play = document.querySelector('.play-btn')
const randon_btn = document.querySelector('#randon-btn')
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

randon_btn.addEventListener('click', function(){
    randon_btn.classList.toggle('btn-active')
})

function loop(){
    if(loop_btn.classList.toggle('btn-active')){
        
    }
}


lyrics_btn.addEventListener('click', function(){
    if(lyrics_btn.classList.toggle('btn-active')){
        document.querySelector('#show-lyrics').style.display='block'
    } else{
        document.querySelector('#show-lyrics').style.display='none'
    }
})