var playlist_box = document.querySelector('.list-container')
var darkMode_btn = document.querySelector('#darkMode-btn')
var play = document.querySelector('.play-btn')
var rewind_btn = document.querySelector('#rewind-btn')
var foward_btn = document.querySelector('#foward-btn')
var range = document.querySelector('#song-range')
var playlist_btn = document.querySelector('#list-btn')
var randon_btn = document.querySelector('#randon-btn')
var loop_btn = document.querySelector('#loop-btn')
var lyrics_btn = document.querySelector('#lyrics-btn')


playlist_btn.addEventListener('click', function(){
    if(playlist_box.classList.toggle('show')){
        playlist_btn.classList = 'fas fa-angle-double-down'
    } else{
        playlist_btn.classList = 'fas fa-list-ul'
    }
});



document.querySelector('#container').setAttribute('class', localStorage.getItem('darkmode_on'))

darkMode_btn.addEventListener('click', function(){
    if(container.classList.toggle('dark-mode')){
        localStorage.setItem('darkmode_on', 'dark-mode')
    } else{
        localStorage.removeItem('darkmode_on')
    }
})


var play_pause = function(){
    if(play.classList == 'play-btn fas fa-play-circle'){
        play.classList = 'pause-btn fas fa-pause-circle'
    } else{
        play.classList = 'play-btn fas fa-play-circle'
    }
}

play.addEventListener('click', play_pause)

randon_btn.addEventListener('click', function(){
    randon_btn.classList.toggle('btn-active')
})

loop_btn.addEventListener('click', function(){
    loop_btn.classList.toggle('btn-active')
})

lyrics_btn.addEventListener('click', function(){
    lyrics_btn.classList.toggle('btn-active')
})