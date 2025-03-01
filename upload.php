<?php
// upload.php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $uploadDir = 'uploads/';
    $apkFile = $uploadDir . basename($_FILES['apkFile']['name']);
    $apkName = $_POST['apkName'];
    $apkDescription = $_POST['apkDescription'];

    if (move_uploaded_file($_FILES['apkFile']['tmp_name'], $apkFile)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'ফাইল আপলোডে ব্যর্থ হয়েছে']);
    }
}
?>