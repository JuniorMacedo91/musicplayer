  export const playlist = [
    {
        title: 'Tá chorando por quê?',
        artist:'Preto no branco',
        cover: './assets/images/preto-no-branco.jpg',
        file:'./assets/songs/Tá Chorando Por Quê.mp3',
    },
    {
        title: 'Physical',
        artist:'Dua Lipa',
        cover: './assets/images/dua-lipa.jpg',
        file:'./assets/songs/Physical.mp3',
    },
    {
        title: 'Sinto sua Falta',
        artist:'Ferrugem',
        cover:'./assets/images/ferrugem.jpeg',
        file:'./assets/songs/Sinto sua Falta.mp3'
    },
    {
        title:'Ouvi dizer',
        artist: 'Melim',
        cover:'./assets/images/melim.jpg',
        file:'./assets/songs/Ouvi Dizer.mp3',
    },
    {
        title:'Movimento da sanfoninha',
        artist:'Anitta',
        cover:'./assets/images/anitta.jpg',
        file:'./assets/songs/Movimento da sanfoninha.mp3',
    },
    {
        title:'Perigosinha',
        artist: 'Claudia Leitte',
        cover:'./assets/images/claudia.jpg',
        file:'./assets/songs/Perigosinha.mp3',
    },
    {
        title:'Qué fue del amor',
        artist:'RBD',
        cover:'./assets/images/rbd.jpg',
        file:'./assets/songs/Qué Fue Del Amor.mp3',
    },
    {
        title:'This is me',
        artist:'The Greatest Showman',
        cover:'./assets/images/showman.jpg',
        file:'./assets/songs/This Is Me.mp3'
    },
    {
        title:'Something Beautiful',
        artist:'Tim Halperin',
        cover:'./assets/images/tim.jpg',
        file:'./assets/songs/Something Beautiful.mp3'
    },
    {
        title:'Ariga Tchan',
        artist:'É o tchan',
        cover:'./assets/images/tchan.jpeg',
        file:'./assets/songs/ArigaTchan.mp3'
    },
];

var music_list = document.querySelector('#music_list')

document.querySelector('#container-wrapper').setAttribute('class', localStorage.getItem('darkmode_on'))


for(var song of playlist){
    var list = document.createElement('li')
    var image = document.createElement('img')
    var music_content = document.createElement('div')
    var song_name = document.createElement('p')
    var artist_name = document.createElement('p')
    
    image.src=`${song.cover}`
    music_content.classList.add('music-content')
    song_name.classList.add('song-name')
    artist_name.classList.add('artist-name')

    song_name.innerHTML += `${song.title}`
    artist_name.innerHTML += `${song.artist}`
    
    list.appendChild(image)
    list.appendChild(music_content)
    music_content.appendChild(song_name)
    music_content.appendChild(artist_name)
    music_list.appendChild(list)
    list.innerHTML += `<i class="play-btn fas fa-play-circle"></i>`
}