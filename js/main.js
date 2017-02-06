var forEach = function(arr, func){
   for(var i = 0 ; i < arr.length; i++){
       func(arr[i], i, arr)
   }
}

function convertTime(miliseconds) {
  var totalSeconds = Math.floor(miliseconds/1000);
  var minutes = Math.floor(totalSeconds/60);
  var seconds = totalSeconds - minutes * 60;
  if(seconds < 10){
    seconds = '0' + seconds;
  }
  return minutes + ':' + seconds;
}

var titleTextInput = document.querySelector('.countdown__user-input');
var buttonEl = document.querySelector('.submit-button');
var inputEl = document.querySelector('.input-bar');
var clockEl = document.querySelector('.countdown__clock');
var completeEl = document.querySelector('.countdown__complete');
var countdownEl = document.querySelector('.countdown')

buttonEl.addEventListener('click', function(){
  var theTextInput = document.getElementById("the-text").value;
  titleTextInput.innerHTML = theTextInput;
  inputEl.style.display = 'none'
  var counterVal = 1500000;
  var intervalID = setInterval(function(){
    counterVal = counterVal - 1000
    if(counterVal < 60000){
      countdownEl.style.backgroundImage = "url(./images/images/tomato-green-silhouette.svg)";
    }
    if(counterVal < 0){
      clearInterval(intervalID)
      clockEl.style.display = "none";
      completeEl.style.display = "block";
      titleTextInput.style.display = "none";
      countdownEl.style.backgroundImage = "url(./images/images/tomato-red-silhouette.svg)";
    }
    var timeNormal = convertTime(counterVal)
    clockEl.innerHTML = "<h1 class='countdown__clock'>" + timeNormal + "</h1>";
  }, 1000)


  })

// buttonEl.addEventListener('keypress', function(e){
//   var keyCode = e.keyCode;
//   if(keyCode === 13)
//     var theTextInput = document.getElementById("the-text").value;
//     titleTextInput.innerHTML = theTextInput;
// })
