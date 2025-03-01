// scripts.js
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);

    fetch('upload.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('APK সফলভাবে আপলোড হয়েছে!');
        } else {
            alert('APK আপলোডে ত্রুটি: ' + data.message);
        }
    })
    .catch(error => {
        console.error('ত্রুটি:', error);
    });
});