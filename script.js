document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const status = document.getElementById('form-status');

 if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        status.style.color = 'red';
        status.textContent = 'Please fill out all fields.';
        return;
    }

    status.style.color = '#28a745';
    status.textContent = 'Thank you for reaching out, ' + name + '! We will get back to you soon.';

    document.getElementById('contact-form').reset();
});
