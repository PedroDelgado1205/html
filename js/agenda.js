let agenda = [];  // Array para almacenar los contactos

function mostrarMenu() {
    console.log("------- Agenda -------");
    console.log("1. Agregar contacto");
    console.log("2. Eliminar contacto");
    console.log("3. Ver contactos");
    console.log("4. Ver número de contactos");
    console.log("5. Calcular promedio de edades");
    console.log("6. Obtener edad mayor");
    console.log("7. Obtener edad menor");
    console.log("8. Salir");
}

function verContactos(nombre, edad){
    for (let i = 0; i < agenda.length; i++){
        console.log(agenda[i])
    }
}

function agregarContacto(nombre, edad) {
    let contacto = { nombre: nombre, edad: edad };
    agenda.push(contacto);
    console.log("Contacto agregado con éxito.");
}

function eliminarContacto(nombre) {
    let indice = -1;
    for (let i = 0; i < agenda.length; i++) {
        if (agenda[i].nombre === nombre) {
            indice = i;
            break;
        }
    }
    if (indice !== -1) {
        agenda.splice(indice, 1);
        console.log("Contacto eliminado con éxito.");
    } else {
        console.log("No se encontró el contacto en la agenda.");
    }
}

function verNumeroContactos() {
    let numContactos = agenda.length;
    console.log("Número de contactos agregados: " + numContactos);
}

function calcularPromedioEdades() {
    if (agenda.length === 0) {
        console.log("No hay contactos en la agenda.");
        return;
    }
    let sumaEdades = agenda.reduce((total, contacto) => total + contacto.edad, 0);
    let promedio = sumaEdades / agenda.length;
    console.log("El promedio de edades es: " + promedio);
}

function obtenerEdadMayor() {
    if (agenda.length === 0) {
        console.log("No hay contactos en la agenda.");
        return;
    }
    let edades = agenda.map(contacto => contacto.edad);
    let edadMayor = Math.max(...edades);
    console.log("La edad mayor es: " + edadMayor);
}

function obtenerEdadMenor() {
    if (agenda.length === 0) {
        console.log("No hay contactos en la agenda.");
        return;
    }
    let edades = agenda.map(contacto => contacto.edad);
    let edadMenor = Math.min(...edades);
    console.log("La edad menor es: " + edadMenor);
}

// Función principal para el menú interactivo
function ejecutarMenu() {
    let opcion = -1;
    while (opcion !== 0) {
    mostrarMenu();
    opcion = parseInt(prompt("Ingrese una opción:"));

    switch (opcion) {
    case 1:
        let nombre = prompt("Ingrese el nombre del contacto:");
        let edad = parseInt(prompt("Ingrese la edad del contacto:"));
        agregarContacto(nombre, edad);
        break;
    case 2:
        let nombreEliminar = prompt("Ingrese el nombre del contacto a eliminar:");
        eliminarContacto(nombreEliminar);
        break;
    case 3:
        verContactos();
        break;
    case 4:
        verNumeroContactos();
        break;
    case 5:
        calcularPromedioEdades();
        break;
    case 6:
        obtenerEdadMayor();
        break;
    case 7:
        obtenerEdadMenor();
        break;
    case 8:
        console.log("Saliendo del programa...");
        break;
    default:
        console.log("Opción inválida. Intente nuevamente.");
    }
        console.log(""); // Agrega una línea en blanco para separar las ejecuciones del menú
    }
}

// Ejecutar el menú interactivo
mostrarMenu();
ejecutarMenu();
