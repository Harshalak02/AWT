// loginn.js

function submitt() {
    event.preventDefault(); // Prevent form submission from refreshing the page

    // Retrieve form field values
    var name = document.querySelector('input[name="name"]').value;
    var username = document.querySelector('input[name="userName"]').value;
    var email = document.querySelector('input[name="EmailID"]').value;
    var phoneNumber = document.querySelector('input[name="Phone_number"]').value;
    var password = document.querySelector('input[name="password"]').value;
    var confirmPassword = document.querySelector('input[name="confirmPassword"]').value;
    var state = document.querySelector('select[name="state"]').value;
    var gender = document.querySelector('input[name="Gender"]:checked');
    var agreeCheckbox = document.querySelector('input[name="Agree"]');

    // Perform form validation
    if (!name || !username || !email || !phoneNumber || !password || !confirmPassword || !state || !gender || !agreeCheckbox) {
        alert("Please fill in all the required fields.");
        return;
    }

    // Email validation
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (password != confirmPassword) {
        alert("PLease reenter confirm password");
        return;
    }
    if (!agreeCheckbox) {
        alert("PLease click on agrrement if you agree");
        return;
    }


    // Perform additional validation or submit the form

    // Submit the form
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("State:", state);
    console.log("Gender:", gender.value);
}

function validateEmail(email) {

    var emailPattern = /^[a-zA-Z0-9._-]+@(charusat\.edu\.in|ac\.in)$/;

    if (email.length < 5 || !emailPattern.test(email)) {
        return false;
    }

    return true;
}
