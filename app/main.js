import { playlist } from "./playlist.js"

const playPause = document.querySelector('.play-btn')
const rewind_btn = document.querySelector('#rewind-btn')
const foward_btn = document.querySelector('#foward-btn')
const seekbar = document.querySelector('#seekbar')
const song_name = document.querySelector('#song-name')
const artist_name = document.querySelector('#artist-name')
const singer_pic = document.querySelector('#singer-picture')
const current_time = document.querySelector('#current-time')
const total_duration = document.querySelector('#duration')


rewind_btn.addEventListener('click', prev)
foward_btn.addEventListener('click', next)
play.addEventListener('click', play_pause)


onload = function(){
    load_song()
}

var pos = 0;
var song = new Audio()


function load_song(){
    song_name.innerHTML = playlist[pos].title
    artist_name.innerHTML = playlist[pos].artist
    singer_pic.setAttribute('src', playlist[pos].cover)
    song.src = playlist[pos].file
    song.play()
}

function play_pause(){
    if(playPause.classList == 'play-btn fas fa-play-circle'){
        song.play()
        playPause.classList = 'pause-btn fas fa-pause-circle';
        song_waves.style.display='flex';
    } else{
        song.pause()
        playPause.classList = 'play-btn fas fa-play-circle';
        song_waves.style.display='none';
    }
}


function time_converter(){

}


function next(){
    (pos < playlist.length)? pos++: pos= pos;
    playPause.classList = 'pause-btn fas fa-pause-circle'
    song_waves.style.display='flex';
    song.play()
    return load_song()
}

function prev(){
    (pos > 0)? pos--:pos = pos;
    playPause.classList = 'pause-btn fas fa-pause-circle'
    song_waves.style.display='flex';
    song.play()
    return load_song()
}


