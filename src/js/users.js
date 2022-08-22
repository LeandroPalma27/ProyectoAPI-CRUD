import { obtenerListaUsuarios } from './http-provider';

const crearFila = (usuario) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `<td><span class="table-text">${usuario.id}</span></td>
                      <td><span class="table-text">${usuario.email}</span></td>
                      <td><span class="table-text">${usuario.first_name} ${usuario.last_name}</span></td>
                      <td><img src="${usuario.avatar}"></td>`;
    return fila;
}

const filasUsers = async () => {

    const filasTabla = [];

    try {
        for (let usuario of await obtenerListaUsuarios()) {
            filasTabla.push(crearFila(usuario));
        }
        return filasTabla;
    } catch (error) {
        throw error;
    }

}

export {
    filasUsers
}