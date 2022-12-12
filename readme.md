# Ejercicio 01
Despliegue de una API sencilla con métodos de consulta GET, PUT, DELETE con respuestas de código específicos para ciertos comportamientos.

## Técnología usada.
- NodeJS
- NPM

## Instalación

### Node JS y NPM
Instalación de NodeJS, visita la [Página NodeJS](https://nodejs.org/es/ "NodeJS") y sigue las instrucciones.

### Base de datos
Para implementar la base de datos por favor instle Docker Desktop, puede instalarlo siguiendo las instrucciones [Aquí](https://www.docker.com/products/docker-desktop/ "Docker desktop")

Con el siguiente comando descargará la imagen de docker con mongoDB mantenida por el equipo de Docker, con -p 27017:27017 indicará que esté disponible en el puerto 27017 y con -v YOUR_LOCAL_DIR:/data/db indicará donde desea tener el volumen para la persistencia de los datos, finalmente levantará la base de datos con mongo.

--network ejercicio_1_network utiliza este comando para ejecutar la base de datos y que quede dispinible en la red del api.


``docker run --name mongodb -d -p 27017:27017 -v /Usuarios/germanangarita/data/db --network host mongo``

### Clonar el proyecto
Para clonar el proyecto

``git clone https://github.com/GermanAngarita/ejercicio-01.git``

``cd ejercicio-01``

``npm install``

``npm run dev``




