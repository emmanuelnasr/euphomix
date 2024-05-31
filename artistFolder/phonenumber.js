document.getElementById('uploadForm').addEventListener('submit', function(event) {
    var phoneInput = document.getElementById('phone');
    var phoneValue = phoneInput.value;
    var phoneNumberRegex = /^[0-9]{8}$/;

    if (!phoneNumberRegex.test(phoneValue)) {
        alert('Please enter a valid 8-digit phone number.');
        event.preventDefault();
    }
});
