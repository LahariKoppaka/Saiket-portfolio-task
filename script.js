document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const status = document.getElementById('status');

    let valid = true;

    // Validate Name
    if (name.value.trim() === "") {
        nameError.classList.remove('d-none');
        valid = false;
    } else {
        nameError.classList.add('d-none');
    }

    // Validate Email
    if (!email.value.includes('@') || email.value.length < 5) {
        emailError.classList.remove('d-none');
        valid = false;
    } else {
        emailError.classList.add('d-none');
    }

    // Show Success Message
    if (valid) {
        status.classList.remove('d-none');
        this.reset();
        setTimeout(() => status.classList.add('d-none'), 3000);
    }
});