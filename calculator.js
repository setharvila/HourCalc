function calcHours(){

    // Variable Decleration
    var hourIn = parseInt(document.getElementById('hourIn').value);             // Hour Clocked In
    var minIn = parseInt(document.getElementById('minIn').value);               // Minute Clocked In
    var amPm;                                                                   // AM or PM
    var desiredHours = document.getElementById('hoursDesired').value;           // Hours desired to work in the week
    var hoursAlreadyWorked = document.getElementById('hoursWorked').value;      // Hours already worked this week
    var returnString = "";                                                      // Blank return string used for final calculation

    // Sets the amPm variable based on the radio button on the form
    if(document.getElementById('am').checked) 
    {
        amPm = "am";
    } else if(document.getElementById('pm').checked) 
    {
        amPm = "pm";
    }

    var totalNeeded = desiredHours - hoursAlreadyWorked;                        // Figures out how many hours you need left in the week
    var hoursNeeded = Math.floor(totalNeeded);                                  // Converts hours needed from a decimal to an int
    var minNeeded = (totalNeeded - hoursNeeded) * 60;                           // Converts minutes needed from a decimal to an int. Converts base 10 decimal to base 60 minutes


    // Converts the calculations to a string for display on the form
    returnString = ("You need " + Math.trunc(hoursNeeded) + " hours and " + Math.trunc(minNeeded) + " min.<br>");
    var neededTime =  Math.trunc(hoursNeeded) + " hours and " + Math.trunc(minNeeded) + " min.";    // Same string as a string, not HTML formatted

    var outHour = hourIn + hoursNeeded;     // Calculates what hour to clock out
    var outMin = minIn + minNeeded;         // Calculates what minute to clock out

    // Accounts for minutes greater than 59
    if(outMin > 59){
        var remainMin = (outMin - 60);
        console.log("made it hereeeeeee");
        outHour  = outHour + 1;
        outMin = remainMin;
    }

    // Accounts for hours greater than 12
    if(outHour > 12){
        outHour = outHour % 12;
        
        if(amPm == "am") amPm = "pm";
        else if(amPm == "pm") amPm = "am";
    }
    
    // Makes the hour human friendly
    var txtHour = "" + Math.trunc(outHour);
    txtHour = "" + ('00'+ outHour).slice(-2);
    
    // Makes the minute human friendly
    var txtMin = "" + Math.trunc(outMin);
    txtMin = "" + ('00'+ txtMin).slice(-2);

    
    // Appends the calculated times to the main return string
    returnString = returnString + ("You should clock out at " + txtHour + ":" + txtMin + amPm + " for " + desiredHours + " hours.");
    var clockOutTime = txtHour + ":" + txtMin + amPm;

    // Returns the information to console. Mainly used for testing
    // console.log(returnString);
    
    // Passes the data back to the HTML page
    document.getElementById("clockOutTime").innerHTML = clockOutTime;
    document.getElementById("needHours").innerHTML = neededTime;
    document.getElementById("result").style.visibility = "visible";


}