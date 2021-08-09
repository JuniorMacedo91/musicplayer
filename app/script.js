var rewind_btn = document.querySelector('#rewind-btn')
var foward_btn = document.querySelector('#foward-btn')
var play = document.querySelector('.play-btn')
var range = document.querySelector('#song-range')
var list_btn = document.querySelector('#list-btn')
var darkMode_btn = document.querySelector('#darkMode-btn')
var randon_btn = document.querySelector('#randon-btn')
var loop_btn = document.querySelector('#loop-btn')
var lyrics_btn = document.querySelector('#lyrics-btn')

list_btn.addEventListener('click', function(){
    document.querySelector('.list-container').classList.toggle('show')
})

darkMode_btn.addEventListener('click', function(){
    if(darkMode_btn){
        document.body.classList.toggle('dark-mode')
        document.querySelector('#bgImage-home').setAttribute('src', './assets/images/black-fone.png')
    } else {
        document.querySelector('#bgImage-home').removeAttribute('src')
    }
})


randon_btn.addEventListener('click', function(){
    randon_btn.classList.toggle('btn-active')
})

loop_btn.addEventListener('click', function(){
    loop_btn.classList.toggle('btn-active')
})

lyrics_btn.addEventListener('click', function(){
    lyrics_btn.classList.toggle('btn-active')
})