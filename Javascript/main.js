// Function to validate phone number (placeholder for actual validation logic)
function validatePhone() {
    const phoneInput = document.getElementById('phone');
    const phoneValue = phoneInput.value;
    // Example validation logic (simple length check)
    if (phoneValue.length < 10) {
        alert("Please enter a valid phone number.");
    } else {
        console.log("Phone number validated.");
    }
}



// Function to display event fee based on selected event type
function displayFee() {
    const eventType = document.getElementById('eventType').value;
    let feeMessage = "";
    switch (eventType) {
        case "community":
            feeMessage = "The fee for Community Events is $10.";
            break;
        case "charity":
            feeMessage = "The fee for Charity Events is $5.";
            break;
        default:
            feeMessage = "Please select an event type.";
    }
    alert(feeMessage);
}



// Function to show confirmation message
function showConfirmation() {
    alert("Thank you for your interest! We will get back to you soon.");
}



// Function to enlarge an image (placeholder for actual logic)
function enlargeImage() {
    alert("Image enlarged.");
}



// Function to count characters in feedback textarea
function countCharacters() {
    const feedbackInput = document.getElementById('feedback');
    const characterCount = feedbackInput.value.length;
    console.log(`Character count: ${characterCount}`);
}



// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.textContent = "Registration successful!";
    console.log("Form submitted successfully.");
}



// Function to find nearby events using Geolocation API
function findNearbyEvents() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, { enableHighAccuracy: true });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }



    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        // Here you can add logic to fetch nearby events based on coordinates
    }



    function error() {
        console.log('Unable to retrieve your location.');
    }
}



// Event listener for the registration form
document.getElementById('registrationForm').addEventListener('submit', handleFormSubmit);
