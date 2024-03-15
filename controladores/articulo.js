const prueba = (req, res) => {
    return res.status(200).json({
        mensaje:"Soy una accion de prubea en mi controlador articulo"
    });
}
const articulo = (req, res) => {
    return res.status(200).json({
        mensaje:"Accion de Guardar"
    });
}
// En este exports voy a pasar el nombre de todos los controlladores
module.exports = {
    prueba,
    articulo
}