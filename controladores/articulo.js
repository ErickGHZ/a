const validator = require('validator');
const Articulo = require('../modelo/Articulo');


const prueba = (req, res) => {
    return res.status(200).json({
        mensaje:"Soy una accion de prubea en mi controlador articulo"
    });
}
const articulo = (req, res) => {


let parametros = req.body;

    // Validar datos

    try {
        var validar_titulo = !validator.isEmpty(parametros.titulo) && validator.isLength(parametros.titulo, {min:5, max:undefined});
        var validar_contenido = !validator.isEmpty(parametros.contenido) && validator.isLength(parametros.contenido);
        if (!validar_titulo || !validar_contenido){
            throw new Error("No se ha validado la informacion")
        }
    } catch (error) {
        return res.status(400).json({
            status:"error",
            mensaje:"Faltan datos por enviar"
        })
    }

    return res.status(200).json({
        mensaje:"Accion de Guardar",
        parametros
    });
    // Crear el objeto a guardar

const articulo = new Articulo(parametros);

    // Giardar el articulo en la base de datos

}
// En este exports voy a pasar el nombre de todos los controlladores
module.exports = {
    prueba,
    articulo
}