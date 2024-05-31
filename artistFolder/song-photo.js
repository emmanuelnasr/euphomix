document.getElementById('uploadForm').addEventListener('submit', function(event) {
    var fileInput = document.getElementById('imageFile');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if (!allowedExtensions.exec(filePath)) {
        alert('Please upload an image with .jpg, .jpeg, .png, or .gif extension.');
        fileInput.value = '';
        event.preventDefault();
    }
});
