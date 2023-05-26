/*
this is the javascript section of the age calculator app.
the brains of this will be,
1. capturing the values from the inputs
2. Then get the current date and time from the device.
3. Calculate the age of the user using by minusing the year of birth from the current year
4. Display the age of the user on the screen.
*/

function calculateAge() {
  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);

  var today = new Date();
  var birthdate = new Date(year, month - 1, day);

  var age = today.getFullYear() - birthdate.getFullYear();
  var monthDiff = today.getMonth() - birthdate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }

  alert("Your age is: " + age);
}

var submitButton = document.querySelector("button");
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  calculateAge();});