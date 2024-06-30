function speedDetector(speed) {
    //Expressing the speed LImit
    const speedLimit = 70;

    //Expressing the  demeritpoint
    const kmPerDemeritPoint = 5;

    let points = 2;
    
    //Condition
    if (speed < speedLimit) {
        console.log("Ok");
    } 
    else 
    {
        points = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log(`Points: ${points}`);
        
        if (points >= 12) {
            console.log("License suspended");
        }
    }
}