<?php
$nama = "";
$email = "";
$nilai = "";
$status = "";
$proses = false;


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $nilai = $_POST['nilai'];
    $proses = true;
    
    
    if ($nilai > 70) {
        $status = "Lulus";
    } else {
        $status = "Remedial";
    }
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Form Processing & Struktur Kendali</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .form-container, .result-container { 
            border: 1px solid #ccc; padding: 20px; width: 300px; margin-bottom: 20px; 
        }
        .result-container { background-color: #f9f9f9; }
        input[type="text"], input[type="email"], input[type="number"] {
            width: 100%; padding: 8px; margin: 5px 0 15px 0; box-sizing: border-box;
        }
        button { padding: 10px 15px; background-color: #28a745; color: white; border: none; cursor: pointer; }
    </style>
</head>
<body>

    <h2>Form Input Data Siswa</h2>
    <div class="form-container">
        <form method="POST" action="">
            <label>Nama:</label>
            <input type="text" name="nama" required>
            
            <label>Email:</label>
            <input type="email" name="email" required>
            
            <label>Nilai Ujian:</label>
            <input type="number" name="nilai" min="0" max="100" required>
            
            <button type="submit" name="submit">Kirim</button>
        </form>
    </div>

    
    <?php if ($proses): ?>
        <div class="result-container">
            <h3>Hasil Pemrosesan:</h3>
            <p><strong>Nama:</strong> <?= $nama; ?></p>
            <p><strong>Email:</strong> <?= $email; ?></p>
            <p><strong>Nilai Ujian:</strong> <?= $nilai; ?></p>
            <p><strong>Status:</strong> 
                
                <span style="color: <?= $status == 'Lulus' ? 'green' : 'red'; ?>; font-weight: bold;">
                    <?= $status; ?>
                </span>
            </p>
        </div>
    <?php endif; ?>

</body>
</html>