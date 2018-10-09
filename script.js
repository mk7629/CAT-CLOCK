var message;
var messageText;

var lolCatImage = document.getElementById('lolcat');
var timeEventJs = document.getElementById("timeEvent");
var time = new Date();
var hours = time.getHours();

var noon = 12;
var evening = 18;
var wakeUpTime = 8;
var lunchTime = 12;
var napTime = 14;
var partyTime = 21;
var clockJs = document.getElementById("clock");
var partyTimeButton = document.getElementById("partyTimeButton");
var ispartyTime = false;

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

//Wakeup time selector
var wakeUpEvent = function() {
    wakeUpTime = wakeUpTimeSelector.value;
};
//lunchTime selector
var lunchTimeEvent = function() {
    lunchTime = lunchTimeSelector.value;
};
//nap tiem selector
var napTimeEvent = function() {
    napTime = napTimeSelector.value;
};

var updateClock = function() {

    //Setup time event 
    var messageText = message;

    if (hours == wakeUpTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        message = "Time to Get UP";
    } else if (hours == lunchTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        message = "I need some good food!!";
    } else if (hours == napTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        message = "Zzzzzzzzzzzzzz....";
    } else if (hours == partyTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
        message = "Let's party party~!";
    } else {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
        message = "What time is it?";
    }


    timeEventJs.innerText = message;
    lolCatImage.src = image;
    showCurrentTime();

};

var showCurrentTime = function() {
    var clock = document.getElementById('clock');
    var currentTime = new Date()
    var hours = currentTime.getHours();

    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";


    //Set hours
    if (hours >= noon) {
        meridian = "PM";
    }

    if (hours > noon) {
        hours = hours - 12;
    }


    //Set minutes
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    //Set seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    {
        message = "Time is " + hours + ":" + minutes + ":" + seconds + meridian;
    }
    clockJs.innerText = message;

};

updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);
console.log(message);

var partyEvent = function() {

    if (ispartyTime === false) {
        ispartyTime = true;
        hours = partyTime;
        partyTimeButton.innerText = "PARTY TIME!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    } else {
        ispartyTime = false;
        hours = new Date().getHours();
        partyTimeButton.innerText = "PARTY OVER";
        partyTimeButton.style.backgroundColor = "#222";
    }
    console.log(ispartyTime);
};
partyTimeButton.addEventListener('click', partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchTimeEvent);
napTimeSelector.addEventListener('change', napTimeEvent);