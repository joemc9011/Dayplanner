// var today = new Date();
// var date = (today.getMonth() + 1)  + "-" +  today.getDate() + "-" + today.getFullYear();
// var min = "<br>"+(today.getHours() + -12) + ":" + today.getMinutes();
// $("#currentDay").append(date, min);

// function running(min) {
//     var milli = 1000;
//     newtime=setTimeout(date.running());
    
// }

// had to research this because I knew there had to be a much cleaner code out there than what I was doing above. Completely forgot about setInterval,
// but wasn't aware of/didnt remember toLocaleTimeString which I'm assuming takes the new Date info and puts it into a string.
var myVar = setInterval (myTimer, 1000);
function myTimer() {
    var d = new Date();
    $("#currentDay").text(d.toLocaleTimeString());
}


var morning = ["9", "10", "11", "12"];
var afternoon = ["1", "2", "3", "4"];
var day = [morning, afternoon];

for ( var i = 0; i < day.length; i++)
function color (){
    if (myTimer()>= day.length[i]){
        $("#hour").css("background-color", "green")


    }
}