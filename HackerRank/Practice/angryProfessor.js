// A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline,
// the professor decides to cancel class if fewer than some number of students are present
// when class starts. Arrival times go from on time (arrivelTime <= 0) to arrived late (arrivalTime > 0).

// Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.

// Example
// n = 5
// k = 3
// a = [-2,-1,0,1,2]

// The first 3 students arrived on. The last were 2 late. The threshold is students, so class will go on. Return YES.

function angryProfessor(k, a) {
  // Count the number of students who arrived on time (arrivalTime <= 0)
  let onTimeCount = 0;

  // Iterate through the array of arrival times
  for (let i = 0; i < a.length; i++) {
    // Check if the student arrived on time or early (arrivalTime <= 0)
    if (a[i] <= 0) {
      onTimeCount++; // Increment the counter if the student arrived on time
    }
  }

  // If the number of students who arrived on time is greater than or equal to the threshold (k),
  // the class will not be canceled (i.e., there are enough students for the class to proceed).
  if (onTimeCount >= k) {
    return "NO"; // Class will not be canceled
  } else {
    return "YES"; // Class will be canceled
  }
}

const k = 3;
const a = [0, -1, 2, 1];
console.log(angryProfessor(k, a));
