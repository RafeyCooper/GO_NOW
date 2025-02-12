<?php
session_start();

$static_email = "admin@mail.com";
$static_password = "admin";

$error_message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $submitted_email = $_POST['email'];
    $submitted_password = $_POST['password'];

    if ($submitted_email === $static_email && $submitted_password === $static_password) {
        $_SESSION['admin_email'] = $submitted_email;
        header("Location: dashboard.php");
        exit();
    } else {
        $error_message = "Invalid email or password";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
    :root {
        --background-color: #f4f7fc;
        --navbar-background-color: #343a40;
        --card-background-color: #ffffff;
        --card-text-color: #333;
        --text-color: #333;
    }

    body {
        background-color: var(--background-color);
        color: var(--text-color);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }

    .card {
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        background-color: var(--card-background-color);
        color: var(--card-text-color);
        padding: 2rem;
        width: 100%;
        max-width: 400px;
    }

    .form-control {
        border-radius: 8px;
    }

    .btn {
        border-radius: 8px;
    }
    </style>
</head>

<body>

    <div class="card">
        <h3 class="text-center mb-4">Login</h3>
        <?php if (!empty($error_message)): ?>
        <div class="alert alert-danger" role="alert">
            <?php echo $error_message; ?>
        </div>
        <?php endif; ?>

        <form action="login.php" method="post">
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" name="email" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" name="password" required>
            </div>
            <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
    </div>

</body>

</html>