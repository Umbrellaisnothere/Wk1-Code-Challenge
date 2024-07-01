
function Calculation() {
  let marks = parseInt(prompt("Enter the student's grade (0-100):"));

  //The condition of the Calculation
 
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


//Input the marks to give the grade
Calculation();