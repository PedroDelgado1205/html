<?php
require 'db.php';

$id = $_GET['id'];
$usuario = $conexion->query("SELECT * FROM users WHERE id = $id")->fetch(PDO::FETCH_OBJ);
?>

<!DOCTYPE html>
<html>
<body>
<form action="update.php" method="post">
    Nombre:<br>
    <input type="text" name="nombre" value="<?php echo $usuario->nombre; ?>">
    <br>
    Correo:<br>
    <input type="text" name="correo" value="<?php echo $usuario->correo; ?>">
    <br>
    <input type="hidden" name="id" value="<?php echo $usuario->id; ?>">
    <br><br>
    <input type="submit" value="Actualizar">
</form>
</body>
</html>