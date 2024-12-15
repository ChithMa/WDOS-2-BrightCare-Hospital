console.log("test");
// Render the cart table on the second page
window.addEventListener("DOMContentLoaded", function () {
    const savedCart = JSON.parse(localStorage.getItem("cartProducts")) || {}; // Retrieve cart data
    const cartTable = document.querySelector(".formCartTable tbody");

    cartTable.innerHTML = ""; // Clear table rows

    // Populate the cart table
    for (const [name, details] of Object.entries(savedCart)) {
        cartTable.innerHTML += `
        <tr>
            <td>${name}</td>
            <td>RS.${details.price}.00</td>
            <td>${details.quantity}</td>
            <td>RS.${details.totalPrice}.00</td>
        </tr>`;
    }
    
    // Add total to the bottom of the table
    let totalPrice = Object.values(savedCart).reduce((sum, item) => sum + item.totalPrice, 0);
    cartTable.innerHTML += `
        <tr>
            <td colspan="3" style="text-align: right;"><strong>Total:</strong></td>
            <td><strong>RS.${totalPrice}.00</strong></td>
        </tr>`;

});

// Add a "Confirm Cart" button listener
document.getElementById("confirmBtn").addEventListener("click", function () {
    alert("You confirmed the medicine!");
    localStorage.removeItem("cartProducts"); // Optionally clear the cart after confirmation
});




// radio btn

// Get the radio buttons and the card details div
let cashRadio = document.getElementById("cash");
let cardRadio = document.getElementById("card");
let cardDetails = document.getElementById("cardDetails");

// Add event listeners to the radio buttons
cashRadio.addEventListener("change", function () {
    if (cashRadio.checked) {
        cardDetails.style.display = "none"; // Hide card details
    }
});

cardRadio.addEventListener("change", function () {
    if (cardRadio.checked) {
        cardDetails.style.display = "block"; // Show card details
    }
});


// Submit button validation
document.getElementById("Purchase-form").addEventListener("submit", function (event) {
    const phoneNumber = document.getElementById("mobile-no").value; // Get the phone number value
    const phoneNumberPattern = /^[0-9]{10}$/; // Regex pattern for a 10-digit phone number

    const cardNumber = document.getElementById("cardNo").value.trim(); // Trim spaces from card number
    const cardNumberPattern = /^[0-9]{16}$/; // Regex pattern for a 16-digit card number

    const cvvNumber = document.getElementById("cvv").value.trim(); // Trim spaces from CVV
    const cvvNumberPattern = /^[0-9]{3}$/; // Regex pattern for a 3-digit CVV number

    const isCardPayment = document.getElementById("card").checked; 

    // Validate phone number
    if (!phoneNumberPattern.test(phoneNumber)) {
        event.preventDefault(); // Prevent form submission
        alert("Invalid mobile number. Please enter a valid 10-digit number.");
        return;
    }

    // Validate card details only if "Card" payment is selected
    if (isCardPayment) {
        if (!cardNumberPattern.test(cardNumber)) {
            alert("Invalid card number. Please enter a valid 16-digit number.");
            event.preventDefault();
            return; // Stop further validation
        }

        if (!cvvNumberPattern.test(cvvNumber)) {
            alert("Invalid CVV number. Please enter a valid 3-digit number.");
            event.preventDefault();
            return; // Stop further validation
        }
    }

    alert("Form submitted successfully!");
});
