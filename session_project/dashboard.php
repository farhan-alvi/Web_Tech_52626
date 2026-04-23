<?php
session_start();

// check if user logged in
if (!isset($_SESSION['user'])) {
    header("Location: login.html");
    exit();
}

$user = $_SESSION['user'];
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
</head>
<body>

<h2>Welcome, <?php echo $user; ?></h2>

<p>You are successfully logged in.</p>

<a href="logout.php">Logout</a>

</body>
</html>