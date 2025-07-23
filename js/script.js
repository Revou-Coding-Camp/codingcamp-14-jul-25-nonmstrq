// Show welcome popup when the page loads
showWelcomePopup();

// Function to show a welcome popup and set the user's name
function showWelcomePopup() {
    let userName = prompt("Please enter your name:");
    // If the user clicks "Cancel", userName will be null
    if (userName != '') {
        document.getElementById('welcome-user').innerHTML = userName;
    }
}

function validateForm() {
    const nameInput = document.getElementById('name-input');
    const dobInput = document.getElementById('dob-input');
    const genderInput = document.getElementById('gender-input');
    const messageInput = document.getElementById('message-input')

    if (nameInput.value === '') {
        alert('Please fill in the blank fields.');
    } else if(dobInput.value === '') {
        alert('Please fill in the blank fields.');
    } else if(genderInput.value === '') {
        alert('Please fill in the blank fields.')
    } else if(messageInput.value === '') {
        alert('Please fill in the blank fields.')
    } else {
        document.getElementById('message-output').innerHTML = `<p class="mx-2 mt-2">Name: ${nameInput.value}</p>
        <p class="mx-2 mt-2">Date of birth: ${dobInput.value}</p>
        <p class="mx-2 mt-2">Gender: ${genderInput.value}</p>
        <p class="mx-2 my-2">Message: ${messageInput.value}</p>`;
        
        // Clear the input field after submission
        nameInput.value = '';
        dobInput.value = '';
        genderInput.value = '';
        messageInput.value = '';
    }
}