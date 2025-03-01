// scripts.js
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const progressBar = document.getElementById('progressBar');
    const progressContainer = document.querySelector('.progress');
    const uploadStatus = document.getElementById('uploadStatus');

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'upload.php', true);

    xhr.upload.onprogress = function(event) {
        if (event.lengthComputable) {
            const percentComplete = (event.loaded / event.total) * 100;
            progressBar.style.width = percentComplete + '%';
            progressBar.textContent = Math.round(percentComplete) + '%';
        }
    };

    xhr.onloadstart = function() {
        progressContainer.style.display = 'block';
        uploadStatus.textContent = 'আপলোড শুরু হয়েছে...';
    };

    xhr.onload = function() {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.success) {
                uploadStatus.textContent = 'APK সফলভাবে আপলোড হয়েছে!';
            } else {
                uploadStatus.textContent = 'APK আপলোডে ত্রুটি: ' + response.message;
            }
        } else {
            uploadStatus.textContent = 'ত্রুটি: আপলোড ব্যর্থ হয়েছে';
        }
    };

    xhr.onerror = function() {
        uploadStatus.textContent = 'ত্রুটি: আপলোড ব্যর্থ হয়েছে';
    };

    xhr.send(formData);
});
