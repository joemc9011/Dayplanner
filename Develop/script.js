var today = new Date();
var date = (today.getMonth() + 1)  + "-" +  today.getDate() + "-" + today.getFullYear();


function running() {
    var milli = 1000;
    $("#currentDay").append(date+milli);
    
}


var morning = ["9", "10", "11", "12"];
var afternoon = ["1", "2", "3", "4"];
var day = [morning, afternoon];

