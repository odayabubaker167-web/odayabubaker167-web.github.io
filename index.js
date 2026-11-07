const form = document.querySelector('#contactForm');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        let hasEmptyFields = false;

        for (let value of formData.values()) {
            if (value.trim() === '') {
                hasEmptyFields = true;
                break;
            }
        }

        if (hasEmptyFields) {
            alert('Please fill in all fields before submission.');
        } else {
            alert('Form submitted successfully!');
            form.reset();
        }
    });
}