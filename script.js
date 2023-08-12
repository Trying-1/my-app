document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    document.getElementById("login-form").addEventListener("submit", function (event) {
        if (!emailPattern.test(emailInput.value)) {
            event.preventDefault();
            emailError.textContent = "Please enter a valid email address.";
        } else {
            emailError.textContent = "";
        }
    });

    emailInput.addEventListener("input", function () {
        if (emailPattern.test(emailInput.value)) {
            emailError.textContent = "";
        }
    });
});
