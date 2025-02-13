<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $investment = $_POST['investment'];
    $timestamp = $_POST['timestamp'];

    $file_path = "../data/data.csv";

    $new_id = 1;

    if (file_exists($file_path) && filesize($file_path) > 0) {
        $file = fopen($file_path, "r");

        while (($row = fgetcsv($file)) !== false) {
            $last_id = $row[0];
            $new_id = $last_id + 1;
        }

        fclose($file);
    }

    $file = fopen($file_path, "a");

    $data = [$new_id, $name, $phone, $investment, $timestamp];

    if (fputcsv($file, $data)) {
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'error']);
    }

    fclose($file);
} else {
    echo json_encode(['status' => 'error']);
}
?>
