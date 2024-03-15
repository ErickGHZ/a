const { conexion } = require('./db/conexion');
const express = require('express'); 
const cors = require('cors');

// Incializar app

console.log('Iniciando app');

// Conexion a la base de datos

conexion();

// Crear servidor de node
const app = express();
const puerto = 3900;

// Configurar corse
app.use(cors());

// Crear rutas
app.get('/probando', (req, res) => {
    console.log('Se esta ejecutando el endpoint /probando');
    /*return res.status(200).send(`
        <div>
            <h1>Probando ruta node js</h1>
            <p>Creando API con node js</p>
            <ul>
                <li>Master en Mongo</li>
                <li>Master en programacion</li>
        </div>
    `)*/
    return res.status(200).json({
        curso:"Mongo DB",
        autor:"Erick Gutierrez",
        url:"www.utectulancingo.edu.mx",
    })
    
});

// Escuchar las peticiones HTTP
app.listen(puerto, () => {
    console.log('Servidor corriendo en el puerto '+puerto)
});


// endpoint
app.get('/', (req, res) => {
    res.send('Hola mundo');
});