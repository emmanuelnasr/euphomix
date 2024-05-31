/*
const music = new Audio ('1laekherdakka.mp3');


const songs = [
    {
        id: '7',
        songName:`La Akher Dakka </br>
        <div class="subtitle">Wael Kfoury</div>`,
        poster: "media/1laekherdakka.png"
    },
    {
        id: '8',
        songName:`Kifak Inta </br>
        <div class="subtitle">Fairuz</div>`,
        poster: "media/2kifakinta.jpg"
    },
    {
        id: '9',
        songName:`Ma Fi Leil </br>
        <div class="subtitle">Nassif Zeytoun</div>`,
        poster: "media/3mafileil.jpg"
    },
    {
        id: '10',
        songName:`Chihiro </br>
        <div class="subtitle">Billie Eilish</div>`,
        poster: "media/4chihiro.jpg"
    },
    {
        id: '11',
        songName:`Hips Don't Lie </br>
        <div class="subtitle">Shakira</div>`,
        poster: "media/5hipsdontlie.jpg"
    },
    {
        id: '12',
        songName:`Zelzal </br>
        <div class="subtitle">Wadih El Sheikh</div>`,
        poster: "media/6zelzal.jpg"
    },
    {
        id: '13',
        songName:`Elfy </br>
        <div class="subtitle">Siilawy</div>`,
        poster: "media/7elfy.jpg"
    },
    {
        id: '14',
        songName:`Him & I </br>
        <div class="subtitle">G-easy & Hasley</div>`,
        poster: "media/8himandi.jpg"
    },
    {
        id: '15',
        songName:`Shu Aamel Fiyyi </br>
        <div class="subtitle">Ragheb Aalama</div>`,
        poster: "media/9shuaamelfiyyi.jpg"
    },
    {
        id: '16',
        songName:`Ana Mesh Soutak </br>
        <div class="subtitle">Elissa</div>`,
        poster: "media/10anameshsoutak.jpg"
    },
    {
        id: '17',
        songName:`Skyfall </br>
        <div class="subtitle">Adele</div>`,
        poster: "media/11skyfall.jpg"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})
let song = document.getElementById()
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave');

masterPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((element)=>{
            element.classList.remove('bi-play-circle-fill');
            element.classList.add('bi-pause-circle-fill');
    })
}

const makeAllBackgrounds = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playlistPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `media/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=> {
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";

    })
})  */

let song1 = document.getElementById('song1');
let progress1 = document.getElementById('progress1');
let ctrlIcon = document.getElementById('masterPlay');

song.onloadedmetadata = function() {
    progress1.max = song1.duration;
    progress1.value = song1.currentTime;
    
}

function playPause() {
    if(ctrlIcon.classList.contains("bi-pause-fill")) {
        song1.pause();
        ctrlIcon.classList.remove("bi-pause-fill");
        ctrlIcon.classList.add("bi-play-fill");
    } else {
        song1.play();
        ctrlIcon.classList.add("bi-pause-fill");
        ctrlIcon.classList.remove("bi-play-fill");
    }
}
if(song1.play()){
setInterval(()=>{
    progress1.value=song1.currentTime;
},500);
}

progress1.onchange = function() {
song1.play();
song1.currentTime = progress1.value;
ctrlIcon.classList.add("bi-pause-fill");
ctrlIcon.classList.remove("bi-play-fill");
}