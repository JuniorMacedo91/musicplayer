const playlist = [
    {
        title: 'Tá chorando por quê?',
        artist:'Preto no branco',
        cover: 'preto-no-branco.jpg',
        file:'Tá Chorando Por Quê.mp3',
    },
    {
        title: 'Physical',
        artist:'Dua Lipa',
        cover: 'dua-lipa.jpg',
        file:'Physical.mp3',
    },
    {
        title: 'Sinto sua Falta',
        artist:'Ferrugem',
        cover:'ferrugem.jpeg',
        file:'Sinto sua Falta.mp3'
    },
    {
        title:'Ouvi dizer',
        artist: 'Melim',
        cover:'melim.jpg',
        file:'Ouvi Dizer.mp3',
    },
    {
        title:'Movimento da sanfoninha',
        artist:'Anitta',
        cover:'anitta.jpg',
        file:'Movimento da sanfoninha.mp3',
    },
    {
        title:'Perigosinha',
        artist: 'Claudia Leitte',
        cover:'claudia.jpg',
        file:'Perigosinha.mp3',
    },
    {
        title:'Qué fue del amor',
        artist:'RBD',
        cover:'rbd.jpg',
        file:'Qué Fue Del Amor.mp3',
    },
    {
        title:'This is me',
        artist:'The Greatest Showman',
        cover:'showman.jpg',
        file:'This Is Me.mp3'
    },
    {
        title:'Something Beautiful',
        artist:'Tim Halperin',
        cover:'tim.jpg',
        file:'Something Beautiful.mp3'
    },
    {
        title:'Ariga Tchan',
        artist:'É o tchan',
        cover:'tchan.jpeg',
        file:'ArigaTchan.mp3'
    },
];

var music_list = document.querySelector('#music_list')

for(var song of playlist){
    var list = document.createElement('li')
    var image = document.createElement('img')
    var music_content = document.createElement('div')
    var song_name = document.createElement('p')
    var artist_name = document.createElement('p')
    
    image.src=`./assets/images/${song.cover}`
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
