const nameInput = document.getElementById('id_name');
const apeInput = document.getElementById('id_ape');
const yearInput = document.getElementById('id_year');

function agregar() {
    const name = document.getElementById('id_name').value;
    const ape = document.getElementById('id_ape').value;
    const year = document.getElementById('id_year').value;

    const tabla = document.querySelector('.tabla table');

    const fila = document.createElement('tr');
    const columnaNombre = document.createElement('td');
    const columnaApellido = document.createElement('td');
    const columnaEdad = document.createElement('td');
    const columnaBotones = document.createElement('td');

    columnaNombre.textContent = name;
    columnaApellido.textContent = ape;
    columnaEdad.textContent = calcularEdad(year);

    const botonEliminar = crearBoton('img/borrar.png', borrarFila);
    const botonEditar = crearBoton('img/editar.png', editarFila);
    const botonEditarLike = crearBoton('img/me-gusta.png', aceptarEdicion);

    columnaBotones.appendChild(botonEliminar);
    columnaBotones.appendChild(botonEditar);
    columnaBotones.appendChild(botonEditarLike);

    fila.appendChild(columnaNombre);
    fila.appendChild(columnaApellido);
    fila.appendChild(columnaEdad);
    fila.appendChild(columnaBotones);

    // Agregar un atributo data-id a la fila para identificarla de forma única
    fila.setAttribute('data-id', tabla.rows.length - 1);

    tabla.appendChild(fila);
    
    nameInput.value = '';
    apeInput.value = '';
    yearInput.value = '';
}

function borrarFila(event) {
    const fila = event.target.closest('tr');
    fila.remove();
}

function editarFila(event) {
    const fila = event.target.closest('tr');
    const filaId = fila.getAttribute('data-id');
    const nombre = fila.cells[0].textContent;
    const apellido = fila.cells[1].textContent;
    const edad = fila.cells[2].textContent;

    nameInput.value = nombre;
    apeInput.value = apellido;
    yearInput.value = "";

    console.log('Editar fila con ID:', filaId);
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Edad:', edad);
}

function calcularEdad(year) {
    const currentYear = new Date().getFullYear();
    return currentYear - parseInt(year);
}

function crearBoton(src, clickHandler) {
    const boton = document.createElement('button');
    const imagen = document.createElement('img');
    imagen.src = src;
    imagen.alt = '';
    boton.appendChild(imagen);
    boton.addEventListener('click', clickHandler);
    return boton;
}

function aceptarEdicion(event){
    const fila = event.target.closest('tr');
    const filaId = fila.getAttribute('data-id');
    const nombre = fila.cells[0].textContent;
    const apellido = fila.cells[1].textContent;
    const edad = fila.cells[2].textContent;

    borrarFila(event);
    agregar();
}