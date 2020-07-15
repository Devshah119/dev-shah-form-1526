// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>

let submitButton = document.getElementById("submit");
let email = document.getElementById("email");
let message = document.getElementById("message");
let fullName = document.getElementById("name");
// Declare variable that will 
// store regular expression for email
let regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
function form_validation(ev){
       ev.preventDefault();
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    // Declare array that will store the errors
    let formEntry = {};
    let errors = [];

    // Check if fullname is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
    // End your conditional here.
    
  if (fullName.value !== "") {
    formEntry['fullname'] = fullName.value;
  }else{
    errors.push({fullname : "Full name is missing."});
  }

    // Check if email is not empty.
       // Check if email is valid.
       // If so:
          // Pass the collected value
          // to your object "data".
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
       // End your nested conditional here.
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your outer conditional here.
  if (email.value !== "") {
    if (regex.test(email.value)) {
    formEntry['email'] = email.value;
    }else{
      errors.push({email : "Email is invalid"});
    }
  }else{
    errors.push({email : "Email is missing."});
  }

    // Check if message is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your conditional here.

  if (message.value !== "") {
    formEntry['message'] = message.value;
  }else{
    errors.push({message : "Message is missing."});
  }

    // Check if there is anything in array errors
       // If so: 
       // Print it in JavaScript console.
    // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
    // End your conditional here.
    if (errors.length === 0) {
      console.log('COLLECTED DATA', formEntry);
    }else{
      console.log('ERRORS', errors);
    }

// Close your function here
}
    
// Register your form to "click" event.
 document.getElementById("submit").addEventListener("click", form_validation);
