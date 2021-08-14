const playlist_box = document.querySelector('.list-container')
const container_wrapper = document.querySelector('#container-wrapper')
const playlist_btn = document.querySelector('#list-btn')
const song_waves = document.getElementById('song-waves')
const darkMode_btn = document.querySelector('#darkMode-btn')
const play = document.querySelector('.play-btn')
const randon_btn = document.querySelector('#randon-btn')
const loop_btn = document.querySelector('#loop-btn')
const lyrics_btn = document.querySelector('#lyrics-btn')


document.querySelector('#container-wrapper').setAttribute('class', localStorage.getItem('darkmode_on'))
play.addEventListener('click', toggle_play_pause)


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

function toggle_play_pause(){
    if(play.classList == 'play-btn fas fa-play-circle'){
        play.classList = 'pause-btn fas fa-pause-circle';
        song_waves.style.display='flex';
    } else{
        play.classList = 'play-btn fas fa-play-circle';
        song_waves.style.display='none';
    }
}

