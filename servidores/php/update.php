phpCopy code
<?php
require 'db.php';

$id = $_POST['id'];
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];

$conexion->exec("UPDATE users SET nombre = '$nombre', correo = '$correo' WHERE id = $id");
header('Location: index.php');
?>