const playPause = document.querySelector('.play-btn')
const rewind_btn = document.querySelector('#rewind-btn')
const foward_btn = document.querySelector('#foward-btn')
const seekbar = document.querySelector('#seekbar')
const song_name = document.querySelector('#song-name')
const artist_name = document.querySelector('#artist-name')
const singer_pic = document.querySelector('#singer-picture')
const current_time = document.querySelector('#current-time')
const total_duration = document.querySelector('#duration')
const song_waves = document.getElementById('song-waves')

onload= function(){
    load_song()
}

var pos = 0;
var audio = new Audio()

function load_song(){
    song_name.innerHTML = playlist[pos].title
    artist_name.innerHTML = playlist[pos].artist
    singer_pic.setAttribute('src', playlist[pos].cover)
    audio.src = playlist[pos].file
    seekbar.max = audio.duration
}


audio.onloadeddata = function(){
    total_duration.innerText = time_converter(audio.duration)
}


function updateTime(){
    seekbar.value = audio.currentTime
    seekbar.max = audio.duration
    current_time.innerHTML = time_converter(audio.currentTime)
}


seekbar.addEventListener('input', function(){
    audio.currentTime = seekbar.value
})


function play_pause(){
    if(audio.paused){
        audio.play()
        playPause.classList = 'pause-btn fas fa-pause-circle';
        song_waves.style.display='flex';
    } else{
        audio.pause()
        playPause.classList = 'play-btn fas fa-play-circle';
        song_waves.style.display='none';
    }
}


function next(){
    (pos < playlist.length)? pos++: pos= pos;
    playPause.classList = 'pause-btn fas fa-pause-circle'
    song_waves.style.display='flex';
    load_song()
    audio.play()
}


function prev(){
    (pos > 0)? pos--:pos = pos;
    playPause.classList = 'pause-btn fas fa-pause-circle'
    song_waves.style.display='flex';
    load_song()
    audio.play()
}


function time_converter(time){
    const min = Math.floor(time / 60)
    const sec = Math.floor(time % 60)

    return `${("0" + min).slice(-2)}:${("0" + sec).slice(-2)}` 
}


rewind_btn.addEventListener('click', prev)
foward_btn.addEventListener('click', next)
playPause.addEventListener('click', play_pause)
audio.addEventListener('ended', next)
audio.addEventListener('timeupdate', updateTime)


import { playlist } from "./playlist.js"
export{audio, load_song}