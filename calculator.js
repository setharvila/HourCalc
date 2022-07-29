window.onload = initAll;

function initAll(){
    console.log("Made it this far!");
    
    
}


function calcHours(){

    var hourIn = parseInt(document.getElementById('hourIn').value);
    var minIn = parseInt(document.getElementById('minIn').value);
    var amPm;
    if(document.getElementById('am').checked) {
        console.log("Time is AM");
        amPm = "am";
      }else if(document.getElementById('pm').checked) {
        console.log("Time is PM");
        amPm = "pm";
      }

    var desiredHours = document.getElementById('hoursDesired').value;
    var hoursAlreadyWorked = document.getElementById('hoursWorked').value;

    var totalNeeded = desiredHours - hoursAlreadyWorked;
    var returnString = "";
    //console.log("You need " + totalNeeded + " more hours this week.");

    var hoursNeeded = Math.floor(totalNeeded);
    var minNeeded = (totalNeeded - hoursNeeded) * 60;

    returnString = ("You need " + Math.trunc(hoursNeeded) + " hours and " + Math.trunc(minNeeded) + " min.<br>");
    var neededTime =  Math.trunc(hoursNeeded) + " hours and " + Math.trunc(minNeeded) + " min.";

    console.log("HourIn:" + hourIn + "  HourNeeded: " + hoursNeeded );

    var outHour = hourIn + hoursNeeded;
    var outMin = minIn + minNeeded;
    console.log("outHour = " + outHour);
    console.log("outMin = " + outMin);

    if(outMin > 59){
        var remainMin = (outMin - 60);
        console.log("made it hereeeeeee");
        outHour  = outHour + 1;
        outMin = remainMin;
    }

    if(outHour > 12){
        outHour = outHour % 12;
        
        if(amPm == "am") amPm = "pm";
        else if(amPm == "pm") amPm = "am";
    }
    console.log("outMin = " + outMin);

    var txtHour = "" + Math.trunc(outHour);
    txtHour = "" + ('00'+ outHour).slice(-2);
    
    var txtMin = "" + Math.trunc(outMin);
    txtMin = "" + ('00'+ txtMin).slice(-2);

    console.log("outMin = " + txtMin);

    returnString = returnString + ("You should clock out at " + txtHour + ":" + txtMin + amPm + " for " + desiredHours + " hours.");
    var clockOutTime = txtHour + ":" + txtMin + amPm;

    console.log(returnString);
    document.getElementById("result").innerHTML = returnString;

    document.getElementById("clockOutTime").innerHTML = clockOutTime;
    document.getElementById("needHours").innerHTML = neededTime;


}