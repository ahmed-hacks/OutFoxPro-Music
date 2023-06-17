console.log("Welcome to OutFox Pro")
let songindex = 0;
let audioElement = new Audio("2.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "1", filepath: "C:\Users\hp\Documents\spotify clone", coverapth: ""},
    {songName: "2", filepath: "C:\Users\hp\Documents\spotify clone", coverapth: ""},
    {songName: "low-life", filepath: "song/3.mpe", coverapth: ""},
    {songName: "low-life", filepath: "song/4.mpe", coverapth: ""},
    {songName: "low-life", filepath: "song/5.mpe", coverapth: ""},
    {songName: "low-life", filepath: "song/6.mpe", coverapth: ""},
    {songName: "low-life", filepath: "song/7.mpe", coverapth: ""},


    
 ]

//let audioElement = new Audio('1.mp3');
//audioElement.play();
//handle play pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0;

    }

    

})


//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


