document.addEventListener('DOMContentLoaded', function() {
    // Rental form logic
    const rentalForm = document.getElementById('rental-form');
    if (rentalForm) {
        // Price calculation logic
        document.getElementById('calculate-btn').addEventListener('click', function() {
            const duration = document.getElementById('duration').value;
            const rentalRate = 60;
            const price = duration * rentalRate;

            // Display calculated price
            const priceMessage = document.getElementById('price-message');
            priceMessage.textContent = `Total Rental Cost: Ksh ${price}`;

            // Show the submit button after price is calculated
            document.getElementById('submit-btn').style.display = 'block';
        });

        // Rent al form submission logic
        rentalForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const studentId = document.getElementById('student-id').value;
            const email = document.getElementById('email').value;
            const bikeModel = document.getElementById('bike-model').value;
            const duration = document.getElementById('duration').value;
            const pickUpTime = document.getElementById('pick-up-time').value;
            const rentalRate = 60;
            const price = duration * rentalRate;

            // Show confirmation message
            const confirmationMessage = document.getElementById('confirmation-message');
            confirmationMessage.innerHTML = `
                <strong>Thank you, ${name}!</strong><br>
                You've reserved a <strong>${bikeModel}</strong> for <strong>${duration}</strong> hours.<br>
                Your total rental cost is <strong>Ksh ${price}</strong>.<br>
                Pick-up Time: <strong>${pickUpTime}</strong><br>
                Confirmation will be sent to: <strong>${email}</strong>.
            `;

            rentalForm.reset();
            document.getElementById('price-message').textContent = ''; // Clear price message
            document.getElementById('submit-btn').style.display = 'none'; // Hide submit button
        });
    }

    // Contact form logic
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                document.getElementById('contact-confirmation').textContent = 
                `Thank you for reaching out, ${name}. We will get back to you shortly.`;
                contactForm.reset(); // Optionally reset the form after submission
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const typedText = "Peda-licious Adventures!";
    const typingSpeed = 150; // Speed of typing in milliseconds
    let index = 0;

    function type() {
        if (index < typedText.length) {
            document.getElementById("typed-text").textContent += typedText.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});

let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex < 1) {slideIndex = slides.length;}
    showSlides();
}

