import '../css/index.css';
import * as CRUD from './crud-provider';
import { filasUsers } from './users';

console.log('Estoy pensando');

const tableBody = document.getElementById('tableBody');

// Funcion init de la pagina
const listarUsuarios = async () => {

    for (let fila of await filasUsers()) {
        tableBody.appendChild(fila);
    }

}

listarUsuarios();

CRUD.buscarUsuario(1).then(console.log)

CRUD.createUser({
    "name": 'Leandro Palma',
    "job": 'Web developer'
}).then(console.log)

CRUD.updateUser(88, {
    "name": 'Leandro Palma Alvarado',
    "job": 'React developer'
}).then(console.log)

CRUD.deleteUser().then(console.log)

/* fetch('https://dni.optimizeperu.com/api/prod/persons/77276954', {
    method: 'GET',
    headers: {
        "Authorization": "Token " + 'k4d2956bd531ab61d44f4fa07304b20e13913815',
    }
}).then(res => {
    const data = res.json();
    data.then(console.log)
}).catch(console.log) */

const btnSubirFoto = document.getElementById('subirFoto');
const inputFile = document.getElementById('inputFile');
const cajaImg = document.getElementById('foto');
console.log(inputFile.value)

btnSubirFoto.addEventListener('click', async () => {
    const res = await CRUD.subirFoto(inputFile.files);
    cajaImg.src = res.secure_url;
});



