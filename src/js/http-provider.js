const urlListUsers = 'https://reqres.in/api/users';
let pageNumber = 1;

const obtenerListaUsuarios = async () => {
        const listUsersPromise = await fetch(`${urlListUsers}?page=${pageNumber}`);
        const {data:usuarios} = await listUsersPromise.json();
        return usuarios;
}

export {
    obtenerListaUsuarios
}