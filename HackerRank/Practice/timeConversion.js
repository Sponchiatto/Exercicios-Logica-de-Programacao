// This function converts a time string from 12-hour format to 24-hour format.
const timeConversion = (time) => {
  // Extract the period (AM/PM) from the end of the time string
  const period = time.slice(-2);
  // Remove the period from the time string
  time = time.slice(0, -2);

  // Split the time string into an array of hours, minutes, and seconds
  const [...timeWithoutPeriod] = time.split(":");

  // Destructure the array to extract hours, minutes, and seconds
  let [hours, minutes, seconds] = timeWithoutPeriod;

  // If the period is "PM" and hours is not already 12, add 12 to hours
  if (period === "PM" && hours !== "12") {
    hours = String(Number(hours) + 12);
  }

  // If the period is "AM" and hours is already 12, set hours to "00"
  if (period === "AM" && hours === "12") {
    hours = "00";
  }

  // Return the converted time in the format "hh:mm:ss"
  return `${hours}:${minutes}:${seconds}`;
};

// Example usage
const inputTime = "06:30:45PM";
const convertedTime = timeConversion(inputTime);
console.log(convertedTime); // Output: 18:30:45
