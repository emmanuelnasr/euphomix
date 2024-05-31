document.getElementById('uploadForm').addEventListener('submit', function(event) {
    var fileInput = document.getElementById('audioFile');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.mp3|\.wav)$/i;

    if (!allowedExtensions.exec(filePath)) {
        alert('Please upload a file with .mp3 or .wav extension.');
        fileInput.value = '';
        event.preventDefault();
    }
})

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    var phoneInput = document.getElementById('phone');
    var phoneValue = phoneInput.value;
    var phoneNumberRegex = /^[0-9]{8}$/;

    if (!phoneNumberRegex.test(phoneValue)) {
        alert('Please enter a valid 8-digit phone number.');
        event.preventDefault();
    }
})

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    var fileInput = document.getElementById('imageFile');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if (!allowedExtensions.exec(filePath)) {
        alert('Please upload an image with .jpg, .jpeg, .png, or .gif extension.');
        fileInput.value = '';
        event.preventDefault();
    }
})

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    var fileInput = document.getElementById('songPhotoFile');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if (!allowedExtensions.exec(filePath)) {
        alert('Please upload an image with .jpg, .jpeg, .png, or .gif extension.');
        fileInput.value = '';
        event.preventDefault();
    }
})