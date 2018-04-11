
function myFunction(){

  y=document.getElementById("user").value;
  console.log(y);

}

$(window).load(function() {

  x=document.getElementById("user").value;

});

$("#save-btn").click(function() {

  var blob = new Blob(["test text"], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "testfile1.txt");

});

setInterval(function(){
    playMusic()}, 30000);

function playMusic(){

  y=document.getElementById("user").value;
  hours=0;

  arrivaltimehours=parseInt(document.getElementById("hours").value);
  arrivaltimemins=parseInt(document.getElementById("mins").value);
  readytime=parseInt(document.getElementById("readytime").value);

  if(arrivaltimemins-readytime-y<0){
    hours=arrivaltimehours-1;
    mins=60+(arrivaltimemins-readytime-y);
  } else{
    hours=arrivaltimehours;
    mins=arrivaltimemins-readytime-y;
  }

    //playMusic();

  var music = new Audio('song.mp3');

    var date = new Date();

    if(date.getHours() === hours && date.getMinutes() === mins) { // Check the time
        music.play();
    }
  }
