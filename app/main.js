import { playlist } from "./playlist.js"

const play = document.querySelector('.play-btn')
const rewind_btn = document.querySelector('#rewind-btn')
const foward_btn = document.querySelector('#foward-btn')
const range = document.querySelector('#song-range')
const song_name = document.querySelector('#song-name')
const artist_name = document.querySelector('#artist-name')
const singer_pic = document.querySelector('#singer-picture')
const current_time = document.querySelector('#current-time')
const duration = document.querySelector('#duration')




//play.addEventListener('click', update_play_pause)
rewind_btn.addEventListener('click', prev)
foward_btn.addEventListener('click', next)


onload = function(){
    next()
}

var pos = 0;

function next(){
    (pos < playlist.length)? pos++: pos= pos;
        song_name.innerHTML = playlist[pos-1].title
        artist_name.innerHTML = playlist[pos-1].artist
        singer_pic.setAttribute('src', playlist[pos-1].cover)
}


function prev(){
    (pos > 0)? pos--:pos = pos;
        song_name.innerHTML = playlist[pos-1].title
        artist_name.innerHTML = playlist[pos-1].artist
        singer_pic.setAttribute('src', playlist[pos-1].cover)
}


randon_btn.addEventListener('click', function(){
    randon_btn.classList.toggle('btn-active')
})

loop_btn.addEventListener('click', function(){
    loop_btn.classList.toggle('btn-active')
})



lyrics_btn.addEventListener('click', function(){
    if(lyrics_btn.classList.toggle('btn-active')){
        document.querySelector('#show-lyrics').style.display='block'
    } else{
        document.querySelector('#show-lyrics').style.display='none'
    }
})

