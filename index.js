const mainContainer = document.querySelector(".main-container")
const subscribeButton = document.querySelector(".btn")
const thanksContainer = document.querySelector(".subscribe")
const dismissButton = document.querySelector(".dismiss")

subscribeButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    if (validateEmail()) {
        mainContainer.classList.add("hidden");
        thanksContainer.classList.remove("hidden");
    }
})


dismissButton.addEventListener("click", () => {
    resetForm();
    mainContainer.classList.remove("hidden")
    thanksContainer.classList.add("hidden")
})

function validateEmail() {
    const emailInput = document.getElementById('email-input');
    const emailAddress = document.querySelector('.email-address');
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validationMessage = document.querySelector('h2 span');

    if (emailPattern.test(email)) {
        validationMessage.textContent = 'Email is valid';
        validationMessage.classList.remove('invalid');
        validationMessage.classList.add('valid');
        emailInput.classList.remove('input-invalid');
        emailAddress.textContent = email
        return true; // Email is valid
    } else {
        validationMessage.textContent = 'Valid email required';
        validationMessage.classList.remove('valid');
        validationMessage.classList.add('invalid');
        emailInput.classList.add('input-invalid');
        return false; // Email is invalid
    }
}

function resetForm() {
    const emailInput = document.getElementById('email-input');
    const validationMessage = document.querySelector('h2 span');
    const emailAddress = document.querySelector('.email-address');

    emailInput.value = ''; // Clear the email input field
    validationMessage.textContent = ''; // Clear the validation message
    validationMessage.classList.remove('valid');
    validationMessage.classList.remove('invalid');
    emailInput.classList.remove('input-invalid');
    emailAddress.textContent = ''
}