const express = require ('express');
const app = express();
const port = 3000;

//URLs      RUTAS       ROUTES
let html = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1{
            color: red;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Mi paguina de inicio</h1>
    <hr>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ab earum corrupti. Quibusdam, eos reiciendis? Minima atque possimus libero delectus porro deserunt vitae odio nesciunt aut. Corrupti incidunt commodi ratione.</p>
    <a href="/proyectos" clas="btn">Proyectos</a>
    </body>
</html>
`
app.get('/', (peticion, respuesta)=>{
    respuesta.send(html);
}
);

app.get('/proyectos', (peticion, respuesta)=>{
    respuesta.sendFile(__dirname+'/index.html');
}
);

app.listen(port, ()=>{
    console.log(`SERVIDOR EN ORDEN, http://localhost:${port}`);
    
});

app.get('/proyectos/1', (peticion, respuesta)=>{
    respuesta.sendFile(__dirname+'/pages/p1.html');
}
);

app.get('/proyectos/2', (peticion, respuesta)=>{
    respuesta.sendFile(__dirname+'/pages/p2.html');
}
);

app.get('/proyectos/3', (peticion, respuesta)=>{
    respuesta.sendFile(__dirname+'/pages/p3.html');
}
);

app.get('/proyectos/4', (peticion, respuesta)=>{
    respuesta.sendFile(__dirname+'/pages/p4.html');
}
);