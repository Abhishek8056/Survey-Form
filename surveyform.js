document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey-form");
    const submitButton = document.getElementById("submit-button");
    const resetButton = document.getElementById("reset-button");
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");
    const overlay = document.getElementById("overlay");
    const popupClose = document.getElementById("popup-close");

    submitButton.addEventListener("click", function () {
        // Perform form validation
        if (form.checkValidity()) {
            // Build a summary of the selected values
            const firstName = document.getElementById("first-name").value;
            const lastName = document.getElementById("last-name").value;
            const dob = document.getElementById("dob").value;
            const country = document.getElementById("country").value;
            const gender = [...document.querySelectorAll('input[name="gender"]:checked')].map(g => g.value).join(", ");
            const profession = document.getElementById("profession").value;
            const email = document.getElementById("email").value;
            const mobileNumber = document.getElementById("mobile-number").value;

            // Display the summary in the popup
            popupContent.innerHTML = `
                        <p><strong>First Name:</strong> ${firstName}</p>
                        <p><strong>Last Name:</strong> ${lastName}</p>
                        <p><strong>Date of Birth:</strong> ${dob}</p>
                        <p><strong>Country:</strong> ${country}</p>
                        <p><strong>Gender:</strong> ${gender}</p>
                        <p><strong>Profession:</strong> ${profession}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
                    `;

            // Show the popup and overlay
            popup.style.display = "block";
            overlay.style.display = "block";

            // Reset the form
            form.reset();
        } else {
            // If the form is not valid, show an error message
            alert("Please fill in all the required fields.");
        }
    });

    resetButton.addEventListener("click", function () {
        form.reset();
    });

    popupClose.addEventListener("click", function () {
        // Close the popup and overlay
        popup.style.display = "none";
        overlay.style.display = "none";
    });
});