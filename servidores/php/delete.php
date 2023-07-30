phpCopy code
<?php
require 'db.php';

$id = $_GET['id'];

$conexion->exec("DELETE FROM users WHERE id = $id");
header('Location: index.php');
?>
