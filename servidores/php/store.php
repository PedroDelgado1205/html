<?php
require 'db.php';

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];

$conexion->exec("INSERT INTO users (nombre, correo) VALUES ('$nombre', '$correo')");
header('Location: index.php');
?>