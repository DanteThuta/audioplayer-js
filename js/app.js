// UI

const musiccontainer = document.getElementById('music-container');


const title = document.getElementById('title'),
      progresscontainer = document.getElementById('progress-container'),
      progress = document.getElementById('progress');

const audio = document.getElementById('audio');

const cover = document.getElementById('cover');

const playbtn = document.getElementById('play'),
    prevbtn = document.getElementById('prev'),
    nextbtn = document.getElementById('next');

//Song Title
const song = ['sample1','sample2','sample3'];

let songindex = 0;
// console.log(song[songindex]);
loadsong(song[songindex]);

// Load Song and Get Song Detailed
function loadsong(song){
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `img/${song}.jpg`;
}

//ADD EVENT LISTENER


playbtn.addEventListener('click',()=>{
    
    const isplaying = musiccontainer.classList.contains('play');
    if(isplaying){
        pausesong();
    }else{
        playsong();
    }
});

//play song
function playsong(){
    musiccontainer.classList.add('play');

    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');
    //Need to Add  (play Audio API)
    audio.play();

}


// pause song
function pausesong(){
    musiccontainer.classList.remove('play');

    playbtn.querySelector('i.fas').classList.remove('fa-pause');
    playbtn.querySelector('i.fas').classList.add('fa-play');
    //Need to add (Audio API)
    audio.pause();
}

//Prev and Next Button

prevbtn.addEventListener('click',previoussong);
nextbtn.addEventListener('click',nextsong);

function previoussong(){
    songindex--;

    if(songindex < 0){
        songindex = song.length -1 ;
    }
    loadsong(song[songindex]);
    playsong();
}

function nextsong(){
    songindex++;
    if(songindex > song.length -1){
        songindex = 0;
    }
    loadsong(song[songindex]);
    playsong();
}

//Update Progress

function updateprogress(){
    progress.style.width = `${(audio.currentTime / audio.duration) * 100}` + '%';
}
audio.addEventListener('timeupdate',updateprogress);

//set Progress
function setprogress(e){
    const width = this.clientWidth;
    // console.log(width);

    const clickx = e.offsetX;
    console.log(clickx);

    const duration = audio.duration;
    //formula (need to think about it   )
    audio.currentTime = (clickx/width) * duration;
}
progresscontainer.addEventListener('click',setprogress);

//One song after Another
audio.addEventListener('ended',nextsong);

    
/* Resume Minutes:*/
// 26.6.2021 (Mini Project)