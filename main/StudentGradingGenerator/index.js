function Calculation() {
    //Validation of the calculation input
    const studentMarks = prompt ("Enter student marks (0-100):");

    //Converts input to a number
    const marks = Number(studentMarks);
  }


  //Configure if input is indeed a number
  if (NaN(marks) || marks < 0 || marks > 100) {
    console.log ("Invalid input.")
    return;
  }


  //The condition of the Calculation
  function condition() {
    
  if (marks > 79) {
    console.log ("Grade: A");
} else if (marks >= 60) {
    console.log ("Grade: B");
} else if (marks >= 50) {
    console.log ("Grade: C");
} else if (marks >= 40) {
    console.log ("Grade: D");
} else {
    console.log ("Grade: E");
}
  }


//Configuration of the condition
function checkcondition() {
if (condition) {
    console.log (true); 
  } else {
    console.log (false);
  }
}
