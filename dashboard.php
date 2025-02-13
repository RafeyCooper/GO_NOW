<?php
session_start();
if(!isset($_SESSION['admin_email'])){
    header('Location: login.php');
}
$file_path = "data/data.csv";

$total_users = 0;
$total_investment = 0;
$rows = [];

if (file_exists($file_path) && filesize($file_path) > 0) {

    $rows = array_map('str_getcsv', file($file_path));
    $rows = array_reverse($rows);

    foreach ($rows as $row) {
        $total_users++;
        $total_investment += (int)$row[3];
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
    /* Default theme (light) */
    :root {
        --background-color: #f4f7fc;
        --navbar-background-color: #343a40;
        --card-background-color: #ffffff;
        --card-text-color: #333;
        --table-background-color: #ffffff;
        --text-color: #333;
    }

    /* Dark theme */
    .dark-theme {
        --background-color: #121212;
        --navbar-background-color: #222222;
        --card-background-color: #333333;
        --card-text-color: #ffffff;
        --table-background-color: #333;
        --text-color: #ffffff;
    }

    body {
        background-color: var(--background-color);
        color: var(--text-color);
    }

    .navbar {
        background-color: var(--navbar-background-color);
    }

    .card {
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        background-color: var(--card-background-color);
        color: var(--card-text-color);
    }

    .table thead {
        background-color: var(--navbar-background-color);
        color: white !important;
    }

    .table {
        background-color: var(--table-background-color);
        color: var(--text-color);
    }

    .table td {
        color: var(--text-color);
    }

    .right-nav {
        display: flex;
        align-items: center;
        gap: 30px
    }

    /* Style for the iPhone-like toggle switch */
    .switch {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 24px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: 0.4s;
        border-radius: 34px;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        border-radius: 50%;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: 0.4s;
    }

    /* When the switch is checked */
    input:checked+.slider {
        background-color: #4CAF50;
    }

    input:checked+.slider:before {
        transform: translateX(26px);
    }
    </style>
</head>

<body>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Dashboard</a>
            <div class="right-nav">
                <label class="switch">
                    <input type="checkbox" id="theme-toggle">
                    <span class="slider"></span>
                </label>
                <button class="btn btn-primary" id="LogoutBtn"
                    onclick="window.location.href='./php/logout.php'">Logout</button>
            </div>
        </div>
    </nav>


    <div class="container mt-5">
        <div class="row">
            <!-- Statistics Cards -->
            <div class="col-lg-3 col-md-6">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">Total Leads</h5>
                        <p class="display-4"><?php echo $total_users; ?></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">Total Investment (SAR)</h5>
                        <p class="display-4"><?php echo number_format($total_investment, 2); ?></p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Data Table -->
        <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Investment</th>
                        <th>Time Stamp</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($rows as $row): ?>
                    <tr>
                        <td><?php echo $row[0]; ?></td>
                        <td><?php echo $row[1]; ?></td>
                        <td><?php echo $row[2]; ?></td>
                        <td><?php echo $row[3]; ?></td>
                        <td class="timestamp" data-time="<?php echo $row[4]; ?>"></td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>

    <script>

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.classList.add(savedTheme);
            document.getElementById('theme-toggle').checked = savedTheme === 'dark-theme';
        } else {
            document.documentElement.classList.add('light-theme');
            document.getElementById('theme-toggle').checked = false;
        }

        document.getElementById('theme-toggle').addEventListener('change', (e) => {
            const newTheme = e.target.checked ? 'dark-theme' : 'light-theme';

            document.documentElement.classList.remove('dark-theme', 'light-theme');
            document.documentElement.classList.add(newTheme);

            localStorage.setItem('theme', newTheme);
        });

        function convertToLocalTime(timestamp) {
            const karachiDate = new Date(timestamp + " UTC");
            return karachiDate.toLocaleString();
        }

        document.querySelectorAll('.timestamp').forEach(function(cell) {
            const timestamp = cell.getAttribute('data-time');
            cell.innerText = convertToLocalTime(timestamp);
        });

    </script>

</body>

</html>