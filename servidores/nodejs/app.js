// const express = require("express");
// const app = express();
// const port = 3000;
// const path = require("path");

// app.get("/", (req, res)=>{
//     //res.send("Hola mundo");
//     res.sendFile(path.join(__dirname+"/index.html"));
// });

// app.listen(port, ()=>{
//     console.log("servidor en el puerto:", port)
// });

const express = require('express');
const mysql = require('mysql');
const app = express();

// Conexión a MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pemildebra',
    database: 'test'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
});

// Configuración de EJS
app.set('view engine', 'ejs');

// Ruta principal
app.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, rows) => {
        if (err) throw err;
        res.render('index', { users: rows });
    });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
