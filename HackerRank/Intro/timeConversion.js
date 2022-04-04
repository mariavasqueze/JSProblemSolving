// Convert time from 12 hours to 24 hour format

function timeConversion(s) {
        let hours = s.substring(0,2); //prints hours
        let amPm = s.substring(8,10); //prints PM or AM
        let militaryHours = ""; 
        
        if (amPm === "AM"){
            if(hours === "12"){
                militaryHours = "00";
            }
            else {
               militaryHours = hours; 
            }   
        }
        else {
            if(hours === "12"){
               militaryHours = hours;
            }
            else {
                militaryHours = parseInt(hours) + 12;
            }  
        }
        return militaryHours + s.substring(2,8);
}

//Note to self: if I didn't write 2 different ifs for AM and for PM respectively, the time 12 AM will never be accurately converted! 
// Ex: 12:01:00PM prints '12:01:00'  - 12:01:00AM prints '00:01:00'