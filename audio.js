var data = {
    title : [
       "Gangster",
       " Voron",
       " konechna",
       "Snova den snova noch",
       " Yunost",
       " Deep end foushee"
    ],
    song : [
       " music/Xcho - Гангстер (1).mp3",
       "music/Xcho - Вороны.mp3 ",
      " music/echteliebe-jo-konchena.mp3",
      "music/Dinar Rahmatullin - Снова день снова ночь мысли прочь в эту ночь.mp3",
      "music/Dabro - Юность.mp3",
      "music/Foushee - Deep end foushee.mp3"

    ],
    poster : [
         "https://i.gifer.com/Up2T.gif",
         "https://www.cevirce.com/en/translate/wp-content/uploads/2021/10/xcho-%D0%B2%D0%BE%D1%80%D0%BE%D0%BD%D1%8B-russian-lyrics-english-translations.jpg"
    ]
}

//console.log(new Audio());
//console.log(window)


var currentSong = 0

var song = new Audio
console.log(song);


window.onload = function () {
    playSong()
}

function playSong() {
    song.src = data.song[currentSong];
    let songTitle = document.getElementById ("songTitle");
    songTitle.textContent = data.title[currentSong];
    let img = document.getElementById ("row1");
    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementById ("main")
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play();
    }

function playOrPauseSong(){
    let play = document.getElementById("play")
    console.log(play);

    if (song.paused){
        song.play();
        play.src = "images/pause.png" //pause
    }else{
        song.pause();
        play.src = "images/play-button-arrowhead.png" //play
    }
}


song.addEventListener("timeupdate", function () {
    // console.log(song.currentTime);
    // console.log(song.duration);
    let fill = document.getElementById("fill")
    // console.log(fill);
    let position = song.currentTime / song.duration;
    fill.style.width = position * 100 + "%"; // fill
    
    convertTime(song.currentTime) // cur. time
    
    if (song.ended) {
    next()
    }
    })

function convertTime(seconds){
    let currentTime = document.getElementById("currentTime")


    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)


    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;



    currentTime.textContent = min + ":" + sec
    totalTime(Math.round(song.duration))
    console.log(seconds);
    console.log(min);
}

function totalTime(seconds){
    var min = Math.floor(seconds / 60)
    var sec = Math.floor(seconds % 60)


min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;


    currentTime.textContent += "/" + min + ":" + sec;
}


function next() {
    currentSong++;
    if (currentSong >= data.song.lenght) {
        currentSong = 0
    }
    playSong();
    play.src = "images/pause.png"

}




function pre(){
    currentSong--;
    if (currentSong < 0) {
        currentSong = data.song.lenght - 1;
    }
    playSong();
    play.src = "images/pause.png"

    
}


    function decrease(){
        song.volume -= 0.2
    }

    function increase(){
        song.volume += 0.2
    }














    

