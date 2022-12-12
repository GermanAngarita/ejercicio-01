const frutaModel = require('../modelos/frutas/frutas.model');
const frutasMock = require('../mocks/frutas.json')
const prepararData = async () => {
    let frutas = [];
    try {
        frutas = await frutaModel.find({});
    } catch (error) {
        console.log('Error al preparar la data: ', JSON.stringify(error));
    }

    if (frutas.length === 0) {
        try {
            const cargarDatos = await frutaModel.insertMany(frutasMock)

            console.log('Datos cargados exitosamente');

        } catch (error) {
            console.log('No se pudo cargar los datos: ', JSON.stringify(error));
        }
    } else {
        console.log('Datos cargados anteriormente.')
    }
}

module.exports = prepararData